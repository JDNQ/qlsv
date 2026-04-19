// src/pages/student/StudentLayout.js
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const StudentLayout = () => {
    const location = useLocation();

    const menuItems = [
        {
            path: '/student/dashboard',
            label: 'Dashboard',
            icon: '🏠'
        },
        {
            path: '/student/profile',
            label: 'Hồ sơ cá nhân',
            icon: '👤'
        },
        {
            path: '/student/scores',
            label: 'Bảng điểm',
            icon: '📊'
        },
        {
            path: '/student/courses',
            label: 'Môn học của tôi',
            icon: '📚'
        }
    ];

    return (
        <div className="d-flex">
            {/* Sidebar cho Sinh viên */}
            <div className="sidebar bg-success text-white vh-100 p-3" style={{ width: '260px', position: 'fixed' }}>
                <div className="text-center mb-4">
                    <h4>👨‍🎓 QLSV</h4>
                    <p className="mb-0 opacity-75">Sinh viên</p>
                </div>

                <ul className="nav flex-column">
                    {menuItems.map((item) => (
                        <li key={item.path} className="nav-item mb-1">
                            <Link
                                to={item.path}
                                className={`nav-link text-white d-flex align-items-center gap-2 ${
                                    location.pathname === item.path ? 'active bg-white text-success fw-bold' : ''
                                }`}
                            >
                                <span>{item.icon}</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <hr className="my-4 border-light" />

                <div className="mt-auto">
                    <Link
                        to="/logout"
                        className="nav-link text-white d-flex align-items-center gap-2 text-danger"
                    >
                        <span>🚪</span>
                        Đăng xuất
                    </Link>
                </div>
            </div>

            {/* Nội dung chính */}
            <div className="flex-grow-1" style={{ marginLeft: '260px' }}>
                {/* Top Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
                    <div className="container-fluid">
                        <h5 className="mb-0 text-success fw-bold">
                            Hệ thống Quản lý Sinh viên
                        </h5>

                        <div className="d-flex align-items-center gap-3">
                            <span className="badge bg-success">Online</span>
                            <div className="dropdown">
                                <button
                                    className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="bi bi-person-circle"></i>
                                    <span>Sinh viên</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link className="dropdown-item" to="/student/profile">
                                            Hồ sơ cá nhân
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item text-danger" to="/logout">
                                            Đăng xuất
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Khu vực nội dung trang con */}
                <div className="p-4">
                    <Outlet />   {/* Đây là nơi render các trang con: Dashboard, Profile, Scores, Courses */}
                </div>
            </div>
        </div>
    );
};

export default StudentLayout;