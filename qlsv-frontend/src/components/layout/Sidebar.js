// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/admin/dashboard', label: 'Dashboard', icon: '🏠' },
        { path: '/admin/students', label: 'Quản lý Sinh viên', icon: '👨‍🎓' },
        { path: '/admin/teachers', label: 'Quản lý Giáo viên', icon: '👩‍🏫' },
        { path: '/admin/courses', label: 'Quản lý Khóa học', icon: '📚' },
    ];

    return (
        <div className="w-72 bg-gray-900 text-white h-screen fixed left-0 top-0 flex flex-col border-r border-gray-800 shadow-xl">
            {/* Header Sidebar */}
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl">
                        📚
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">QLSV Admin</h2>
                        <p className="text-xs text-gray-500">Quản trị hệ thống</p>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path ||
                            location.pathname.startsWith(item.path + '/');
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all ${
                                        isActive
                                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                                            : 'hover:bg-gray-800 text-gray-300 hover:text-white'
                                    }`}
                                >
                                    <span className="text-xl opacity-90">{item.icon}</span>
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Footer - Đăng xuất */}
            <div className="p-6 border-t border-gray-800 mt-auto">
                <Link
                    to="/logout"
                    className="flex items-center gap-3 px-5 py-3 text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded-2xl transition-all"
                >
                    <span className="text-xl">🚪</span>
                    <span className="font-medium">Đăng xuất</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;