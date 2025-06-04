import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import InstructorDashboard from "../pages/InstructorDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import CourseDetail from "../pages/CourseDetail";
import LessonDetail from "../pages/LessonDetail";
import Search from "../pages/Search";

import AdminLayout from "../pages/AdminLayout";
import AdminWelcome from "../pages/AdminWelcome";
import AdminUsersPage from "../pages/AdminUsersPage";
import AdminCoursesPage from "../pages/AdminCoursesPage";
import AdminLessonsPage from "../pages/AdminLessonsPage";
import AdminFilesPage from "../pages/AdminFilesPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";

function AppRouter({ darkMode, setDarkMode }) {
  return (
    <Routes>
      {/* Public Routes - Chỉ cho phép truy cập khi chưa đăng nhập */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Semi-Public Routes - Cho phép truy cập cả khi đã đăng nhập */}
      <Route
        path="/contact"
        element={<ContactUs darkMode={darkMode} setDarkMode={setDarkMode} />}
      />
      <Route
        path="/"
        element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
      />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />

      {/* Protected Routes (cho tất cả user đã đăng nhập) */}
      <Route element={<PrivateRoute allowedRoles={["ADMIN", "INSTRUCTOR", "STUDENT"]} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetail />} />
      </Route>

      {/* Protected Admin Routes */}
      <Route element={<PrivateRoute allowedRoles={["ADMIN"]} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminWelcome />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="courses" element={<AdminCoursesPage />} />
          <Route path="lessons" element={<AdminLessonsPage />} />
          <Route path="files" element={<AdminFilesPage />} />
        </Route>
      </Route>

      {/* Protected Instructor */}
      <Route element={<PrivateRoute allowedRoles={["INSTRUCTOR"]} />}>
        <Route path="/instructor" element={<InstructorDashboard />} />
      </Route>

      {/* Protected Student */}
      <Route element={<PrivateRoute allowedRoles={["STUDENT"]} />}>
        <Route path="/student" element={<StudentDashboard />} />
      </Route>

      {/* 404 Route - phải đặt cuối cùng */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
