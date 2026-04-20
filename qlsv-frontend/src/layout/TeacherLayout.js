// src/pages/teacher/TeacherLayout.js
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const TeacherLayout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm("Bạn có chắc muốn đăng xuất?")) {
            localStorage.removeItem("user");
            navigate("/login");
        }
    };

    const menuItems = [
        { path: "/teacher/dashboard", label: "Dashboard", icon: "🏠" },
        { path: "/teacher/profile", label: "Hồ sơ cá nhân", icon: "👤" },
        { path: "/teacher/classes", label: "Lớp học của tôi", icon: "📚" },
        { path: "/teacher/grade", label: "Nhập điểm", icon: "✍️" },
    ];

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <div style={{
                width: "260px",
                background: "#1e293b",
                color: "#fff",
                position: "fixed",
                height: "100vh",
                padding: "20px",
                display: "flex",
                flexDirection: "column"
            }}>
                <div style={{ marginBottom: "30px" }}>
                    <h4 style={{ margin: "0 0 5px 0" }}>QLSV</h4>
                    <p style={{ fontSize: "14px", opacity: 0.7, margin: 0 }}>Giảng viên</p>
                </div>

                <ul style={{ listStyle: "none", padding: 0, flex: 1 }}>
                    {menuItems.map((item) => (
                        <li key={item.path} style={{ marginBottom: "8px" }}>
                            <Link
                                to={item.path}
                                style={{
                                    display: "block",
                                    padding: "12px 15px",
                                    color: "#fff",
                                    textDecoration: "none",
                                    borderRadius: "8px",
                                    transition: "0.2s"
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = "#334155"}
                                onMouseOut={(e) => e.currentTarget.style.background = "transparent"}
                            >
                                <span style={{ marginRight: "10px" }}>{item.icon}</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={handleLogout}
                    style={{
                        padding: "12px",
                        background: "#ef4444",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "500"
                    }}
                >
                    🚪 Đăng xuất
                </button>
            </div>

            {/* Nội dung chính */}
            <div style={{
                marginLeft: "260px",
                padding: "30px",
                width: "100%",
                background: "#f5f7fa",
                minHeight: "100vh"
            }}>
                <Outlet />
            </div>
        </div>
    );
};

export default TeacherLayout;