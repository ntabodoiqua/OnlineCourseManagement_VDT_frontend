import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        localStorage.setItem("token", token);
        fetchUserProfile(token);
      } catch (e) {
        console.error("Token decode error", e);
        logout();
      }
    } else {
      setUser(null);
    }
  }, [token]);

  const fetchUserProfile = async (token) => {
    try {
      const res = await fetch("http://localhost:8080/lms/users/myInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (data.code === 1000) {
        const result = data.result;
        const fullName = `${result.firstName || ""} ${
          result.lastName || ""
        }`.trim();
        const avatar = result.avatarUrl?.startsWith("http")
          ? result.avatarUrl
          : `http://localhost:8080/lms${result.avatarUrl}`;
        const role = result.roles?.[0]?.name || "STUDENT";

        setUser({
          username: result.username,
          name: fullName || result.username,
          avatar,
          role,
        });

        localStorage.setItem("name", fullName || result.username);
        localStorage.setItem("role", role);
        localStorage.setItem("avatar", avatar);
      } else {
        console.error("Lỗi khi lấy thông tin người dùng:", data.message);
        logout();
      }
    } catch (err) {
      console.error("Không thể gọi users/myInfo:", err);
      logout();
    }
  };

  const login = (newToken) => {
    setToken(newToken); // sẽ kích hoạt useEffect gọi fetchUserProfile()
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await fetch("http://localhost:8080/lms/auth/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
      }
    } catch (e) {
      console.warn("Logout request failed", e);
    } finally {
      localStorage.clear();
      setToken(null);
      setUser(null);
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
