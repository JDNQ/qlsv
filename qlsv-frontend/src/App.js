import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";

import Dashboard from "./pages/admin/AdminDashboard";
import StudentManagement from "./pages/admin/StudentManagement";
import TeacherManagement from "./pages/admin/TeacherManagement";
import CourseManagement from "./pages/admin/CourseManagement";
import Login from "./pages/Login";

// 🔒 Bảo vệ route
const PrivateRoute = ({ children }) => {
    const user = localStorage.getItem("user");
    return user ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Trang login */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                {/* Trang admin */}
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <AdminLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<Dashboard />} />
                    <Route path="students" element={<StudentManagement />} />
                    <Route path="teachers" element={<TeacherManagement />} />
                    <Route path="courses" element={<CourseManagement />} />
                </Route>

                {/* Nếu sai đường dẫn */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;