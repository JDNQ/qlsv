// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Student
import StudentLayout from './pages/student/StudentLayout';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfile from './pages/student/StudentProfile';
import MyScores from './pages/student/MyScores';
import MyCourses from './pages/student/MyCourses';

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentManagement from './pages/admin/StudentManagement';
import AddStudent from './pages/admin/AddStudent';
import EditStudent from './pages/admin/EditStudent';
import TeacherManagement from './pages/admin/TeacherManagement';
import AddTeacher from './pages/admin/AddTeacher';
import EditTeacher from './pages/admin/EditTeacher';
import CourseManagement from './pages/admin/CourseManagement';

// Teacher pages
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import TeacherClasses from './pages/teacher/TeacherClasses';
import GradeManagement from './pages/teacher/GradeManagement';
import TeacherProfile from './pages/teacher/TeacherProfile';

function App() {
  return (
      <Router>
        <Routes>
          {/* Student với Layout đầy đủ */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<Navigate to="/student/dashboard" replace />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="scores" element={<MyScores />} />
            <Route path="courses" element={<MyCourses />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<StudentManagement />} />
          <Route path="/admin/students/add" element={<AddStudent />} />
          <Route path="/admin/students/edit/:id" element={<EditStudent />} />
          <Route path="/admin/teachers" element={<TeacherManagement />} />
          <Route path="/admin/teachers/add" element={<AddTeacher />} />
          <Route path="/admin/teachers/edit/:id" element={<EditTeacher />} />
          <Route path="/admin/courses" element={<CourseManagement />} />

          {/* Teacher Routes */}
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/classes" element={<TeacherClasses />} />
          <Route path="/teacher/grade" element={<GradeManagement />} />
          <Route path="/teacher/profile" element={<TeacherProfile />} />

          {/* Default & Logout */}
          <Route path="/" element={<Navigate to="/student/dashboard" replace />} />
          <Route path="/logout" element={<LogoutHandler />} />

          <Route path="*" element={<div className="p-5 text-center"><h2>404 - Trang không tồn tại</h2></div>} />
        </Routes>
      </Router>
  );
}

const LogoutHandler = () => {
  React.useEffect(() => {
    localStorage.clear();
    window.location.href = '/student/dashboard';
  }, []);
  return <div className="p-5 text-center">Đang đăng xuất...</div>;
};

export default App;