import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import InstructorDashboard from "../pages/InstructorDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import PrivateRoute from "../components/PrivateRoute";

function AppRouter({ darkMode, setDarkMode }) {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
      />

      <Route element={<PrivateRoute allowedRoles={["ROLE_ADMIN"]} />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      <Route element={<PrivateRoute allowedRoles={["ROLE_INSTRUCTOR"]} />}>
        <Route path="/instructor" element={<InstructorDashboard />} />
      </Route>

      <Route element={<PrivateRoute allowedRoles={["ROLE_STUDENT"]} />}>
        <Route path="/student" element={<StudentDashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
