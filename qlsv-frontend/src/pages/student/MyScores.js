// src/pages/student/MyScores.js
import React, { useState, useEffect } from 'react';
import axiosClient from '../../services/axiosClient';

const MyScores = () => {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const studentId = localStorage.getItem('studentId') || 1;
                const res = await axiosClient.get(`/students/${studentId}/scores`);
                setScores(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchScores();
    }, []);

    if (loading) {
        return <div className="text-center mt-10">Đang tải bảng điểm...</div>;
    }

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                📊 Bảng điểm của tôi
            </h2>

            <div className="card shadow" style={{ borderRadius: "12px" }}>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-dark">
                            <tr>
                                <th>Môn học</th>
                                <th>Giảng viên</th>
                                <th className="text-center">Điểm</th>
                                <th className="text-center">Trạng thái</th>
                            </tr>
                            </thead>
                            <tbody>
                            {scores.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-5 text-muted">
                                        Chưa có điểm số nào
                                    </td>
                                </tr>
                            ) : (
                                scores.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.courseName}</td>
                                        <td>{item.teacherName}</td>
                                        <td className="text-center">
                                            <strong className={item.score >= 5 ? "text-success" : "text-danger"}>
                                                {item.score || '—'}
                                            </strong>
                                        </td>
                                        <td className="text-center">
                                                <span className={`badge ${item.score >= 5 ? "bg-success" : "bg-danger"}`}>
                                                    {item.score >= 5 ? "Đạt" : "Chưa đạt"}
                                                </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyScores;