// src/pages/admin/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const cards = [
        {
            title: "Quản lý Sinh viên",
            icon: "🎓",
            path: "/admin/students",
            color: "#0d6efd",
            desc: "Thêm, sửa, xóa sinh viên"
        },
        {
            title: "Quản lý Giáo viên",
            icon: "👩‍🏫",
            path: "/admin/teachers",
            color: "#198754",
            desc: "Quản lý giảng viên"
        },
        {
            title: "Quản lý Môn học",
            icon: "📚",
            path: "/admin/courses",
            color: "#ffc107",
            desc: "Danh sách môn học"
        },
        {
            title: "Quản lý Lớp học",
            icon: "🏫",
            path: "/admin/classes",
            color: "#dc3545",
            desc: "Các lớp học đang mở"
        },
        {
            title: "Quản lý Học phí",
            icon: "💰",
            path: "/admin/tuition",
            color: "#6f42c1",
            desc: "Công nợ & thanh toán"
        },
        {
            title: "Quản lý Kỳ học",
            icon: "📅",
            path: "/admin/semesters",
            color: "#fd7e14",
            desc: "Kỳ học & thời gian biểu"
        },
        {
            title: "Đăng ký học phần",
            icon: "📋",
            path: "/admin/enrollments",
            color: "#20c997",
            desc: "Quản lý đăng ký môn"
        }
    ];

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                👨‍💼 Dashboard Quản trị viên
            </h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px"
            }}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(card.path)}
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            padding: "25px",
                            cursor: "pointer",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            transition: "0.3s"
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                    >
                        <div style={{ fontSize: "42px", marginBottom: "15px" }}>
                            {card.icon}
                        </div>

                        <h4 style={{
                            margin: 0,
                            fontWeight: "bold",
                            color: card.color,
                            fontSize: "1.35rem"
                        }}>
                            {card.title}
                        </h4>

                        <p style={{
                            marginTop: "12px",
                            color: "#666",
                            fontSize: "0.95rem"
                        }}>
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;