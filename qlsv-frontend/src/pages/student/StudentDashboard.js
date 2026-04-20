// src/pages/student/StudentDashboard.js
import React, { useState, useEffect } from 'react';
import axiosClient from '../../services/axiosClient';

const StudentDashboard = () => {
    const [student, setStudent] = useState(null);
    const [averageScore, setAverageScore] = useState(0);
    const [totalCourses, setTotalCourses] = useState(0);
    const [recentScores, setRecentScores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const studentId = localStorage.getItem('studentId') || 1;

                const [profileRes, scoresRes, coursesRes] = await Promise.all([
                    axiosClient.get(`/students/${studentId}`),
                    axiosClient.get(`/students/${studentId}/scores`),
                    axiosClient.get(`/students/${studentId}/courses`)
                ]);

                setStudent(profileRes.data);
                setRecentScores(scoresRes.data.slice(0, 5));
                setTotalCourses(coursesRes.data.length || 0);

                if (scoresRes.data.length > 0) {
                    const avg = scoresRes.data.reduce((sum, s) => sum + (parseFloat(s.score) || 0), 0) / scoresRes.data.length;
                    setAverageScore(avg.toFixed(1));
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();
    }, []);

    if (loading) {
        return <div className="text-center mt-10">Đang tải thông tin...</div>;
    }

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                Xin chào, {student?.name || 'Sinh viên'} 👋
            </h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px"
            }}>
                {/* Card 1: Điểm trung bình */}
                <div style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "25px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    transition: "0.3s"
                }}
                     onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                     onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                    <div style={{ fontSize: "40px", marginBottom: "10px" }}>📊</div>
                    <h4 style={{ margin: 0, fontWeight: "bold", color: "#0d6efd" }}>
                        Điểm trung bình
                    </h4>
                    <h1 style={{ fontSize: "48px", fontWeight: "bold", margin: "15px 0 5px" }}>
                        {averageScore}
                    </h1>
                    <p style={{ color: "#666" }}>/ 10.0</p>
                </div>

                {/* Card 2: Số môn học */}
                <div style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "25px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    transition: "0.3s"
                }}
                     onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                     onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                    <div style={{ fontSize: "40px", marginBottom: "10px" }}>📚</div>
                    <h4 style={{ margin: 0, fontWeight: "bold", color: "#198754" }}>
                        Số môn học
                    </h4>
                    <h1 style={{ fontSize: "48px", fontWeight: "bold", margin: "15px 0" }}>
                        {totalCourses}
                    </h1>
                    <p style={{ color: "#666" }}>đã đăng ký</p>
                </div>

                {/* Card 3: Điểm gần đây */}
                <div style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "25px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    transition: "0.3s"
                }}
                     onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                     onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                    <div style={{ fontSize: "40px", marginBottom: "10px" }}>📝</div>
                    <h4 style={{ margin: 0, fontWeight: "bold", color: "#dc3545" }}>
                        Điểm gần đây
                    </h4>
                    <div style={{ marginTop: "15px" }}>
                        {recentScores.length > 0 ? (
                            recentScores.map((item, idx) => (
                                <div key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: idx !== recentScores.length - 1 ? "1px solid #eee" : "none" }}>
                                    <span>{item.courseName}</span>
                                    <strong style={{ color: item.score >= 5 ? "#198754" : "#dc3545" }}>
                                        {item.score}
                                    </strong>
                                </div>
                            ))
                        ) : (
                            <p style={{ color: "#666", fontStyle: "italic" }}>Chưa có điểm số nào</p>
                        )}
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "40px" }}>
                <a href="/student/profile" className="btn btn-primary me-3">👤 Xem hồ sơ cá nhân</a>
                <a href="/student/scores" className="btn btn-success">📊 Xem bảng điểm đầy đủ</a>
            </div>
        </div>
    );
};

export default StudentDashboard;