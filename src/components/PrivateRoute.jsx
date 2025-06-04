import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PrivateRoute({ allowedRoles }) {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) return null; // hoặc spinner nếu muốn

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Kiểm tra role đã được format (không có prefix ROLE_)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    console.log("Unauthorized access attempt:", { userRole: user.role, allowedRoles });
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
