// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ==================== LAYOUTS ====================
import AdminLayout from "./layout/AdminLayout";
import StudentLayout from "./pages/student/StudentLayout";   // ✅ Sửa đúng đường dẫn
import TeacherLayout from "./layout/TeacherLayout";

// ==================== PAGES ====================
import Login from "./pages/Login";

// Student Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import MyScores from "./pages/student/MyScores";
import MyCourses from "./pages/student/MyCourses";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentManagement from "./pages/admin/StudentManagement";
import AddStudent from "./pages/admin/AddStudent";
import EditStudent from "./pages/admin/EditStudent";
import TeacherManagement from "./pages/admin/TeacherManagement";
import AddTeacher from "./pages/admin/AddTeacher";
import EditTeacher from "./pages/admin/EditTeacher";
import CourseManagement from "./pages/admin/CourseManagement";
import ClassManagement from "./pages/admin/ClassManagement";

// Teacher Pages
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import TeacherClasses from "./pages/teacher/TeacherClasses";
import GradeManagement from "./pages/teacher/GradeManagement";
import TeacherProfile from "./pages/teacher/TeacherProfile";

// 🔒 Protected Route
const PrivateRoute = ({ children, role }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return <Navigate to="/login" replace />;

    if (role && user.role !== role) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* LOGIN */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                {/* ====================== ADMIN ROUTES ====================== */}
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute role="ADMIN">
                            <AdminLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<AdminDashboard />} />
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

                {/* ====================== STUDENT ROUTES ====================== */}
                <Route
                    path="/student"
                    element={
                        <PrivateRoute role="STUDENT">
                            <StudentLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<Navigate to="/student/dashboard" replace />} />
                    <Route path="dashboard" element={<StudentDashboard />} />
                    <Route path="profile" element={<StudentProfile />} />
                    <Route path="courses" element={<MyCourses />} />
                    <Route path="scores" element={<MyScores />} />

                    {/* Các trang bổ sung */}
                    <Route path="register" element={<div className="p-8"><h3>Đăng ký học phần</h3><p>Chức năng đang phát triển...</p></div>} />
                    <Route path="schedule" element={<div className="p-8"><h3>Lịch học</h3><p>Chức năng đang phát triển...</p></div>} />
                    <Route path="notifications" element={<div className="p-8"><h3>Thông báo</h3><p>Chức năng đang phát triển...</p></div>} />
                    <Route path="debt" element={<div className="p-8"><h3>Công nợ học phí</h3><p>Chức năng đang phát triển...</p></div>} />
                </Route>

                {/* ====================== TEACHER ROUTES ====================== */}
                <Route
                    path="/teacher"
                    element={
                        <PrivateRoute role="TEACHER">
                            <TeacherLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<Navigate to="/teacher/dashboard" replace />} />
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="profile" element={<TeacherProfile />} />
                    <Route path="classes" element={<TeacherClasses />} />
                    <Route path="grade" element={<GradeManagement />} />
                </Route>

                {/* DEFAULT & 404 */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;