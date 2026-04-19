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

                // Tính điểm trung bình
                if (scoresRes.data.length > 0) {
                    const avg = scoresRes.data.reduce((sum, s) => sum + (parseFloat(s.score) || 0), 0) / scoresRes.data.length;
                    setAverageScore(avg.toFixed(1));
                }
            } catch (error) {
                console.error("Lỗi tải dashboard sinh viên:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();
    }, []);

    if (loading) return <div className="p-5 text-center fs-4">Đang tải thông tin...</div>;

    return (
        <div className="p-4">
            <h2 className="mb-4">Xin chào, {student?.name || 'Sinh viên'} 👋</h2>

            <div className="row g-4">
                <div className="col-md-3">
                    <div className="card bg-primary text-white shadow h-100">
                        <div className="card-body text-center">
                            <h5>Điểm trung bình</h5>
                            <h1 className="display-4 fw-bold">{averageScore}</h1>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-success text-white shadow h-100">
                        <div className="card-body text-center">
                            <h5>Số môn học</h5>
                            <h1 className="display-4 fw-bold">{totalCourses}</h1>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow h-100">
                        <div className="card-header bg-info text-white">
                            <h5>Điểm số gần đây</h5>
                        </div>
                        <div className="card-body">
                            {recentScores.length > 0 ? (
                                recentScores.map((item, index) => (
                                    <div key={index} className="d-flex justify-content-between py-2 border-bottom last:border-0">
                                        <span>{item.courseName || 'Môn học'}</span>
                                        <strong className={item.score >= 5 ? "text-success" : "text-danger"}>
                                            {item.score}
                                        </strong>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted text-center py-3">Chưa có điểm số nào</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <a href="/student/profile" className="btn btn-outline-primary me-3">👤 Hồ sơ cá nhân</a>
                <a href="/student/scores" className="btn btn-outline-success me-3">📊 Bảng điểm chi tiết</a>
                <a href="/student/courses" className="btn btn-outline-info">📚 Môn học của tôi</a>
            </div>
        </div>
    );
};

export default StudentDashboard;