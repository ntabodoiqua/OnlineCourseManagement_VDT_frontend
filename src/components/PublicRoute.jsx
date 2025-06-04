import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PublicRoute() {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) return null;

  if (isAuthenticated) {
    // ✅ Điều hướng về trang dashboard tương ứng với role cao nhất
    const redirectPath =
      user.role === "ADMIN"
        ? "/admin"
        : user.role === "INSTRUCTOR"
        ? "/instructor"
        : "/student";

    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default PublicRoute; 