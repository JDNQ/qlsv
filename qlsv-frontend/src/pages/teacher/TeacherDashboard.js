// src/pages/teacher/TeacherDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
    const navigate = useNavigate();

    const cards = [
        {
            title: "Thông tin cá nhân",
            icon: "👤",
            path: "/teacher/profile",
            color: "#0d6efd"
        },
        {
            title: "Lớp học của tôi",
            icon: "📚",
            path: "/teacher/classes",
            color: "#198754"
        },
        {
            title: "Nhập điểm",
            icon: "✍️",
            path: "/teacher/grade",
            color: "#ffc107"
        }
    ];

    return (
        <div style={{
            padding: "30px",
            background: "#f5f7fa",
            minHeight: "100vh"
        }}>
            <h2 style={{
                fontWeight: "bold",
                marginBottom: "30px",
                color: "#333"
            }}>
                Xin chào, Giảng viên! 👋
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
                            padding: "30px 25px",
                            cursor: "pointer",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            transition: "0.3s"
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                    >
                        <div style={{ fontSize: "42px", marginBottom: "15px" }}>
                            {card.icon}
                        </div>

                        <h4 style={{
                            margin: 0,
                            fontWeight: "bold",
                            color: card.color,
                            fontSize: "1.4rem"
                        }}>
                            {card.title}
                        </h4>

                        <p style={{
                            marginTop: "12px",
                            color: "#666",
                            fontSize: "0.95rem"
                        }}>
                            Quản lý {card.title.toLowerCase()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeacherDashboard;