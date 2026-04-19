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

    const isActive = (path) => {
        return (
            location.pathname === path ||
            location.pathname.startsWith(path + '/')
        );
    };

    return (
        <aside className="w-72 bg-white border-r border-gray-200 min-h-screen flex flex-col shadow-sm">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow">
                        📘
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            QLSV
                        </h2>
                        <p className="text-sm text-gray-500">
                            Quản trị hệ thống
                        </p>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[15px] font-medium transition-all ${
                                    isActive(item.path)
                                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100">
                <Link
                    to="/logout"
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl text-red-600 hover:bg-red-50 transition-all font-medium"
                >
                    <span className="text-xl">🚪</span>
                    Đăng xuất
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;