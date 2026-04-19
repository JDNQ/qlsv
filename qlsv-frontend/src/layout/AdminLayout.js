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
                    width: "250px",
                    height: "100vh",
                    background: "#1e293b",
                    color: "#fff",
                    position: "fixed",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                {/* MENU */}
                <div>
                    <h4>QLSV</h4>
                    <p style={{ fontSize: "14px", opacity: 0.7 }}>
                        Quản trị hệ thống
                    </p>

                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li>
                            <Link to="/admin" style={linkStyle}>🏠 Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/admin/students" style={linkStyle}>👨‍🎓 Sinh viên</Link>
                        </li>
                        <li>
                            <Link to="/admin/teachers" style={linkStyle}>👩‍🏫 Giáo viên</Link>
                        </li>
                        <li>
                            <Link to="/admin/courses" style={linkStyle}>📚 Khóa học</Link>
                        </li>
                    </ul>
                </div>

                {/* 🔥 LOGOUT */}
                <button
                    onClick={handleLogout}
                    style={{
                        padding: "10px",
                        background: "#ef4444",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                    }}
                >
                    🚪 Đăng xuất
                </button>
            </div>

            {/* CONTENT */}
            <div
                style={{
                    marginLeft: "250px",
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
    padding: "10px",
    color: "#fff",
    textDecoration: "none",
};

export default AdminLayout;