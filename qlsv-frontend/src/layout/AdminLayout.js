import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
    const navigate = useNavigate();

    // 🔥 Hàm logout
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div style={{ display: "flex" }}>

            {/* SIDEBAR */}
            <div
                style={{
                    width: "260px",
                    height: "100vh",
                    background: "#1e293b",
                    color: "#fff",
                    position: "fixed",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflowY: "auto"
                }}
            >
                {/* HEADER */}
                <div>
                    <div style={{ textAlign: "center", marginBottom: "30px" }}>
                        <h3 style={{ margin: 0, fontWeight: "bold" }}>QLSV</h3>
                        <p style={{ fontSize: "14px", opacity: 0.7, margin: "5px 0 0 0" }}>
                            Quản trị hệ thống
                        </p>
                    </div>

                    {/* MENU */}
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>
                            <Link to="/admin/dashboard" style={linkStyle}>
                                🏠 Dashboard
                            </Link>
                        </li>

                        <li style={{ marginTop: "20px" }}>
                            <p style={{ fontSize: "13px", opacity: 0.6, marginBottom: "8px", paddingLeft: "10px" }}>
                                QUẢN LÝ NGƯỜI DÙNG
                            </p>
                        </li>
                        <li>
                            <Link to="/admin/students" style={linkStyle}>
                                👨‍🎓 Sinh viên
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/teachers" style={linkStyle}>
                                👩‍🏫 Giáo viên
                            </Link>
                        </li>

                        <li style={{ marginTop: "20px" }}>
                            <p style={{ fontSize: "13px", opacity: 0.6, marginBottom: "8px", paddingLeft: "10px" }}>
                                QUẢN LÝ HỌC TẬP
                            </p>
                        </li>
                        <li>
                            <Link to="/admin/courses" style={linkStyle}>
                                📚 Khóa học / Môn học
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/classes" style={linkStyle}>
                                🏫 Lớp học
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/enrollments" style={linkStyle}>
                                📋 Đăng ký học phần
                            </Link>
                        </li>

                        <li style={{ marginTop: "20px" }}>
                            <p style={{ fontSize: "13px", opacity: 0.6, marginBottom: "8px", paddingLeft: "10px" }}>
                                QUẢN LÝ HÀNH CHÍNH
                            </p>
                        </li>
                        <li>
                            <Link to="/admin/semesters" style={linkStyle}>
                                📅 Kỳ học
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/tuition" style={linkStyle}>
                                💰 Học phí & Công nợ
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* LOGOUT */}
                <button
                    onClick={handleLogout}
                    style={{
                        padding: "12px",
                        background: "#ef4444",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "500",
                        marginTop: "20px"
                    }}
                >
                    🚪 Đăng xuất
                </button>
            </div>

            {/* CONTENT AREA */}
            <div
                style={{
                    marginLeft: "260px",
                    padding: "20px",
                    width: "100%",
                    minHeight: "100vh",
                    background: "#f1f5f9",
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

const linkStyle = {
    display: "block",
    padding: "12px 15px",
    color: "#e2e8f0",
    textDecoration: "none",
    borderRadius: "6px",
    marginBottom: "4px",
    transition: "all 0.2s",
};

linkStyle[':hover'] = {
    background: "#334155",
    color: "#fff",
    paddingLeft: "20px"
};

export default AdminLayout;