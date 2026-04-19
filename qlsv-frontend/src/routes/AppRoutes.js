// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// ==================== LAYOUTS ====================
import StudentLayout from '../pages/student/StudentLayout';
import AdminLayout from '../pages/admin/AdminLayout';
// import TeacherLayout from '../pages/teacher/TeacherLayout';   // uncomment khi đã tạo

// ==================== PAGES ====================
import Login from '../pages/Login';

// Student Pages
import StudentDashboard from '../pages/student/StudentDashboard';
import StudentProfile from '../pages/student/StudentProfile';
import MyScores from '../pages/student/MyScores';
import MyCourses from '../pages/student/MyCourses';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import StudentManagement from '../pages/admin/StudentManagement';
import AddStudent from '../pages/admin/AddStudent';
import EditStudent from '../pages/admin/EditStudent';
import TeacherManagement from '../pages/admin/TeacherManagement';
import AddTeacher from '../pages/admin/AddTeacher';
import EditTeacher from '../pages/admin/EditTeacher';
import CourseManagement from '../pages/admin/CourseManagement';

// Teacher Pages
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import TeacherClasses from '../pages/teacher/TeacherClasses';
import GradeManagement from '../pages/teacher/GradeManagement';
import TeacherProfile from '../pages/teacher/TeacherProfile';

// Auth Guard
import RequireAuth from '../components/RequireAuth';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Login */}
            <Route path="/login" element={<Login />} />

            {/* STUDENT ROUTES */}
            <Route element={<RequireAuth allowedRoles={['STUDENT']} />}>
                <Route path="/student" element={<StudentLayout />}>
                    <Route index element={<Navigate to="/student/dashboard" replace />} />
                    <Route path="dashboard" element={<StudentDashboard />} />
                    <Route path="profile" element={<StudentProfile />} />
                    <Route path="scores" element={<MyScores />} />
                    <Route path="courses" element={<MyCourses />} />
                </Route>
            </Route>

            {/* ADMIN ROUTES */}
            <Route element={<RequireAuth allowedRoles={['ADMIN']} />}>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Navigate to="/admin/dashboard" replace />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="students" element={<StudentManagement />} />
                    <Route path="students/add" element={<AddStudent />} />
                    <Route path="students/edit/:id" element={<EditStudent />} />
                    <Route path="teachers" element={<TeacherManagement />} />
                    <Route path="teachers/add" element={<AddTeacher />} />
                    <Route path="teachers/edit/:id" element={<EditTeacher />} />
                    <Route path="courses" element={<CourseManagement />} />
                </Route>
            </Route>

            {/* TEACHER ROUTES */}
            <Route element={<RequireAuth allowedRoles={['TEACHER']} />}>
                <Route path="/teacher" element={<div className="p-10 text-white">Teacher Layout chưa được tạo</div>}>
                    <Route index element={<Navigate to="/teacher/dashboard" replace />} />
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="classes" element={<TeacherClasses />} />
                    <Route path="grade" element={<GradeManagement />} />
                    <Route path="profile" element={<TeacherProfile />} />
                </Route>
            </Route>

            {/* Default */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/logout" element={<LogoutHandler />} />

            {/* 404 */}
            <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center bg-gray-950">
                    <h2 className="text-4xl text-red-500">404 - Trang không tồn tại</h2>
                </div>
            } />
        </Routes>
    );
};

// Logout Handler
const LogoutHandler = () => {
    React.useEffect(() => {
        localStorage.clear();
        window.location.href = '/login';
    }, []);
    return <div className="p-10 text-center text-white">Đang đăng xuất...</div>;
};

export default AppRoutes;