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
        <div className="sidebar bg-dark text-white vh-100 p-3" style={{ width: '260px', position: 'fixed' }}>
            <h4 className="text-center mb-4">📚 QLSV Admin</h4>

            <ul className="nav flex-column">
                {menuItems.map(item => (
                    <li key={item.path} className="nav-item mb-1">
                        <Link
                            to={item.path}
                            className={`nav-link text-white ${location.pathname === item.path ? 'active bg-primary' : ''}`}
                        >
                            <span className="me-2">{item.icon}</span>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <hr className="my-4" />

            <div className="mt-auto">
                <Link to="/logout" className="nav-link text-danger">
                    <span className="me-2">🚪</span> Đăng xuất
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;