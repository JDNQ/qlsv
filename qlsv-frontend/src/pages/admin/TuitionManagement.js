// src/pages/admin/TuitionManagement.js
import React, { useState, useEffect } from 'react';

const TuitionManagement = () => {
    const [tuitions, setTuitions] = useState([]);

    useEffect(() => {
        setTuitions([
            { id: 1, studentName: "Nguyễn Văn A", semester: "2026 Spring", total: 8400000, paid: 8400000, status: "Đã thanh toán" },
            { id: 2, studentName: "Trần Thị B", semester: "2026 Spring", total: 7200000, paid: 5000000, status: "Còn nợ" },
            { id: 3, studentName: "Lê Văn C", semester: "2026 Spring", total: 9600000, paid: 9600000, status: "Đã thanh toán" },
        ]);
    }, []);

    return (
        <div className="container mt-4">
            <h3 className="fw-bold mb-4">💰 Quản lý Học phí & Công nợ</h3>
            <div className="card shadow">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th>Sinh viên</th>
                            <th>Kỳ học</th>
                            <th>Tổng học phí</th>
                            <th>Đã thanh toán</th>
                            <th>Còn nợ</th>
                            <th>Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tuitions.map(t => (
                            <tr key={t.id}>
                                <td>{t.studentName}</td>
                                <td>{t.semester}</td>
                                <td>{t.total.toLocaleString()} đ</td>
                                <td>{t.paid.toLocaleString()} đ</td>
                                <td className="text-danger fw-bold">
                                    {(t.total - t.paid).toLocaleString()} đ
                                </td>
                                <td>
                                        <span className={`badge ${t.status === 'Đã thanh toán' ? 'bg-success' : 'bg-warning'}`}>
                                            {t.status}
                                        </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TuitionManagement;