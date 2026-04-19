import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const StudentLayout = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/student/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/student/profile', label: 'Hồ sơ cá nhân', icon: '👤' },
        { path: '/student/courses', label: 'Khóa học của tôi', icon: '📚' },
        { path: '/student/scores', label: 'Điểm số', icon: '📝' },
    ];

    return (
        <div className="flex h-screen bg-gray-950 text-gray-100">
            {/* Sidebar hiện đại */}
            <div className="w-72 bg-gray-900 border-r border-gray-800 flex flex-col">
                <div className="p-6 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                            QLSV
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">QL Sinh Viên</h1>
                            <p className="text-xs text-gray-500">Hệ thống quản lý</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-6">
                    <ul className="space-y-2">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all ${
                                            isActive
                                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                                                : 'hover:bg-gray-800 text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="p-6 border-t border-gray-800">
                    <button
                        onClick={() => window.location.href = '/logout'}
                        className="w-full flex items-center justify-center gap-3 bg-red-600/10 hover:bg-red-600/20 text-red-400 hover:text-red-300 py-3 rounded-2xl font-medium transition"
                    >
                        🚪 Đăng xuất
                    </button>
                </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 flex flex-col">
                {/* Top Header */}
                <header className="h-16 bg-gray-900 border-b border-gray-800 px-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-semibold text-white">Xin chào, Lý Tấn Tài!</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="bg-gray-800 text-xs px-3 py-1.5 rounded-full border border-gray-700">
                            Lớp 11A5
                        </div>
                        <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-semibold shadow">
                            LT
                        </div>
                    </div>
                </header>

                {/* Nội dung trang */}
                <main className="flex-1 overflow-auto bg-gray-950 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default StudentLayout;