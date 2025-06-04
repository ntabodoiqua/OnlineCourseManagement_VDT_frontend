import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen"; // 👈 file này tạo ở bước dưới

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true); // 👈 loading toàn cục

  useEffect(() => {
    const init = async () => {
      if (token) {
        try {
          jwtDecode(token); // kiểm tra token hợp lệ
          await fetchUserProfile(token);
        } catch (e) {
          console.error("Token không hợp lệ:", e);
          logout(false);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    };

    init();
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
        const role = result.roles?.[0]?.name?.replace("ROLE_", "") || "STUDENT";

        const userData = {
          username: result.username,
          name: fullName || result.username,
          avatar,
          role,
        };

        setUser(userData);

        localStorage.setItem("token", token);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("role", role);
        localStorage.setItem("avatar", avatar);
      } else {
        throw new Error(data.message || "Không thể lấy user info");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API myInfo:", error);
      logout(false);
    }
  };

  const login = async (newToken) => {
    setIsLoading(true);
    setToken(newToken);
    await fetchUserProfile(newToken);
    setIsLoading(false);
  };

  const logout = async (navigateAfter = true) => {
    try {
      const oldToken = localStorage.getItem("token");
      if (oldToken) {
        await fetch("http://localhost:8080/lms/auth/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: oldToken }),
        });
      }
    } catch (e) {
      console.warn("Logout failed silently:", e);
    } finally {
      localStorage.clear();
      setUser(null);
      setToken(null);
      if (navigateAfter) navigate("/login");
    }
  };

  // ✅ loading screen toàn cục
  if (isLoading) return <LoadingScreen />;

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated: !!user, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
