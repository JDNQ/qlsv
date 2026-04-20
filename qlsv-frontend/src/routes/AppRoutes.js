// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// ==================== LAYOUTS ====================
import AdminLayout from '../layout/AdminLayout';
import StudentLayout from '../pages/student/StudentLayout';     // ✅ Sửa đúng đường dẫn
import TeacherLayout from '../layout/TeacherLayout';

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
import ClassManagement from '../pages/admin/ClassManagement';

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
            {/* LOGIN */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* ====================== STUDENT ROUTES ====================== */}
            <Route element={<RequireAuth allowedRoles={['STUDENT']} />}>
                <Route path="/student" element={<StudentLayout />}>
                    <Route index element={<Navigate to="/student/dashboard" replace />} />
                    <Route path="dashboard" element={<StudentDashboard />} />
                    <Route path="profile" element={<StudentProfile />} />
                    <Route path="courses" element={<MyCourses />} />
                    <Route path="scores" element={<MyScores />} />

                    {/* Các trang bổ sung (có thể để trống hoặc thêm sau) */}
                    <Route path="register" element={<div className="p-8"><h3>Đăng ký học phần</h3><p>Chức năng đang phát triển...</p></div>} />
                    <Route path="schedule" element={<div className="p-8"><h3>Lịch học</h3><p>Chức năng đang phát triển...</p></div>} />
                    <Route path="notifications" element={<div className="p-8"><h3>Thông báo</h3><p>Chức năng đang phát triển...</p></div>} />
                    <Route path="debt" element={<div className="p-8"><h3>Công nợ học phí</h3><p>Chức năng đang phát triển...</p></div>} />
                </Route>
            </Route>

            {/* ====================== ADMIN ROUTES ====================== */}
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
                    <Route path="classes" element={<ClassManagement />} />
                </Route>
            </Route>

            {/* ====================== TEACHER ROUTES ====================== */}
            <Route element={<RequireAuth allowedRoles={['TEACHER']} />}>
                <Route path="/teacher" element={<TeacherLayout />}>
                    <Route index element={<Navigate to="/teacher/dashboard" replace />} />
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="profile" element={<TeacherProfile />} />
                    <Route path="classes" element={<TeacherClasses />} />
                    <Route path="grade" element={<GradeManagement />} />
                </Route>
            </Route>

            {/* LOGOUT */}
            <Route path="/logout" element={<LogoutHandler />} />

            {/* 404 Not Found */}
            <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-red-500 mb-4">404</h2>
                        <p className="text-xl text-gray-600">Trang không tồn tại</p>
                    </div>
                </div>
            } />
        </Routes>
    );
};

// Logout Handler Component
const LogoutHandler = () => {
    React.useEffect(() => {
        localStorage.clear();
        window.location.href = '/login';
    }, []);
    return <div className="p-10 text-center">Đang đăng xuất...</div>;
};

export default AppRoutes;