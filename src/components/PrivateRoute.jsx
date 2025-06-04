import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PrivateRoute({ allowedRoles }) {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) return null; // hoặc spinner nếu muốn

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Kiểm tra xem user có ít nhất một role được phép truy cập không
  const hasAllowedRole = user.roles.some(role => allowedRoles.includes(role));

  if (!hasAllowedRole) {
    console.log("Unauthorized access attempt:", { 
      userRoles: user.roles, 
      allowedRoles,
      highestRole: user.role 
    });
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
