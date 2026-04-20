// src/pages/student/StudentLayout.js
import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const StudentLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { path: "/student/dashboard", label: "Dashboard", icon: "🏠" },
        { path: "/student/profile", label: "Hồ sơ cá nhân", icon: "👤" },
        { path: "/student/courses", label: "Khóa học của tôi", icon: "📚" },
        { path: "/student/scores", label: "Bảng điểm", icon: "📝" },
        { path: "/student/register", label: "Đăng ký học phần", icon: "📋" },
        { path: "/student/schedule", label: "Lịch học", icon: "🗓️" },
        { path: "/student/notifications", label: "Thông báo", icon: "🛎️" },
        { path: "/student/debt", label: "Công nợ học phí", icon: "💰" },
    ];

    const handleLogout = () => {
        if (window.confirm("Bạn có chắc muốn đăng xuất?")) {
            localStorage.removeItem("user");
            localStorage.removeItem("studentId");
            navigate("/login");
        }
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <div style={{
                width: "260px",
                background: "#1e293b",
                color: "#fff",
                position: "fixed",
                height: "100vh",
                padding: "20px 15px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "2px 0 10px rgba(0,0,0,0.1)"
            }}>
                {/* Logo */}
                <div style={{ marginBottom: "40px", textAlign: "center" }}>
                    <div style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        marginBottom: "4px"
                    }}>
                        QLSV
                    </div>
                    <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>
                        Hệ thống quản lý sinh viên
                    </p>
                </div>

                {/* Menu */}
                <nav style={{ flex: 1 }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path} style={{ marginBottom: "6px" }}>
                                    <Link
                                        to={item.path}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "12px 16px",
                                            color: "#fff",
                                            textDecoration: "none",
                                            borderRadius: "8px",
                                            background: isActive ? "#3b82f6" : "transparent",
                                            transition: "all 0.2s",
                                        }}
                                        onMouseOver={(e) => {
                                            if (!isActive) e.currentTarget.style.background = "#334155";
                                        }}
                                        onMouseOut={(e) => {
                                            if (!isActive) e.currentTarget.style.background = "transparent";
                                        }}
                                    >
                                        <span style={{ marginRight: "12px", fontSize: "18px" }}>{item.icon}</span>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Nút Đăng xuất */}
                <button
                    onClick={handleLogout}
                    style={{
                        marginTop: "auto",
                        padding: "12px 16px",
                        background: "#ef4444",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "500",
                        transition: "0.2s",
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = "#dc2626"}
                    onMouseOut={(e) => e.currentTarget.style.background = "#ef4444"}
                >
                    🚪 Đăng xuất
                </button>
            </div>

            {/* Nội dung chính */}
            <div style={{
                marginLeft: "260px",
                flex: 1,
                padding: "30px",
                background: "#f5f7fa",
                minHeight: "100vh"
            }}>
                <Outlet />
            </div>
        </div>
    );
};

export default StudentLayout;