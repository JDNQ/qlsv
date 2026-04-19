// src/pages/admin/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const cards = [
        {
            title: "Sinh viên",
            icon: "🎓",
            path: "/admin/students",
            color: "#0d6efd"
        },
        {
            title: "Giáo viên",
            icon: "👩‍🏫",
            path: "/admin/teachers",
            color: "#198754"
        },
        {
            title: "Khóa học",
            icon: "📚",
            path: "/admin/courses",
            color: "#ffc107"
        },
        {
            title: "Lớp học",
            icon: "🏫",
            path: "/admin/classes",
            color: "#dc3545"
        }
    ];

    return (
        <div style={{
            padding: "30px",
            background: "#f5f7fa",
            minHeight: "100vh"
        }}>
            {/* Title */}
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                Dashboard
            </h2>

            {/* Cards */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            transition: "0.3s"
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                    >
                        <div style={{ fontSize: "40px", marginBottom: "10px" }}>
                            {card.icon}
                        </div>

                        <h4 style={{
                            margin: 0,
                            fontWeight: "bold",
                            color: card.color
                        }}>
                            {card.title}
                        </h4>

                        <p style={{
                            marginTop: "10px",
                            color: "#666"
                        }}>
                            Quản lý {card.title.toLowerCase()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;