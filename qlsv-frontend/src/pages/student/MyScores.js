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

    if (loading) return <div className="p-5 text-center">Đang tải bảng điểm...</div>;

    return (
        <div className="p-4">
            <h2>📊 Bảng điểm của tôi</h2>

            <div className="table-responsive mt-4">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th>Môn học</th>
                        <th>Giảng viên</th>
                        <th>Điểm</th>
                        <th>Trạng thái</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scores.length === 0 ? (
                        <tr><td colSpan="4" className="text-center py-4">Chưa có điểm số nào</td></tr>
                    ) : (
                        scores.map((item, index) => (
                            <tr key={index}>
                                <td>{item.courseName}</td>
                                <td>{item.teacherName}</td>
                                <td><strong className={item.score >= 5 ? "text-success" : "text-danger"}>{item.score}</strong></td>
                                <td>
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
    );
};

export default MyScores;