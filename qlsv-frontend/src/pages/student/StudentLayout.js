// src/pages/student/StudentLayout.js
import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const StudentLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { path: '/student/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/student/profile', label: 'Hồ sơ cá nhân', icon: '👤' },
        { path: '/student/courses', label: 'Khóa học của tôi', icon: '📚' },
        { path: '/student/scores', label: 'Bảng điểm', icon: '📝' },
        { path: '/student/register', label: 'Đăng ký học phần', icon: '📝' },
        { path: '/student/schedule', label: 'Lịch học', icon: '🗓️' },
        { path: '/student/notifications', label: 'Thông báo', icon: '🛎️' },
        { path: '/student/debt', label: 'Công nợ học phí', icon: '💰' },
    ];

    const handleLogout = () => {
        if (window.confirm("Bạn có chắc muốn đăng xuất?")) {
            localStorage.removeItem('user');
            localStorage.removeItem('studentId');
            navigate('/login');
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-72 bg-white border-r shadow-sm flex flex-col">
                <div className="p-6 border-b">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                            Q
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">QLSV</h1>
                            <p className="text-sm text-gray-500">Sinh viên</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 overflow-auto">
                    <ul className="space-y-2">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-4 px-6 py-4 rounded-xl text-base font-medium transition-all ${
                                            isActive
                                                ? 'bg-blue-600 text-white shadow'
                                                : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Nút Đăng xuất */}
                <div className="p-6 border-t mt-auto">
                    <button
                        onClick={handleLogout}
                        className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition flex items-center justify-center gap-2"
                    >
                        🚪 Đăng xuất
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="h-16 bg-white border-b px-8 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">Xin chào, Sinh viên!</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Kỳ Xuân 2026</span>
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            SV
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-8 overflow-auto bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default StudentLayout;