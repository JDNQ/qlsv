// src/pages/admin/SemesterManagement.js
import React, { useState, useEffect } from 'react';

const SemesterManagement = () => {
    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        setSemesters([
            {
                id: 1,
                name: "Kỳ Xuân 2026",
                startDate: "2026-01-15",
                endDate: "2026-05-30",
                status: "Đang diễn ra"
            },
            {
                id: 2,
                name: "Kỳ Hè 2026",
                startDate: "2026-06-15",
                endDate: "2026-08-15",
                status: "Sắp tới"
            },
            {
                id: 3,
                name: "Kỳ Thu 2025",
                startDate: "2025-09-01",
                endDate: "2025-12-20",
                status: "Đã kết thúc"
            }
        ]);
    }, []);

    return (
        <div className="container mt-4">
            <h3 className="fw-bold mb-4">📅 Quản lý Kỳ học</h3>

            <div className="card shadow">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Tên kỳ học</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        {semesters.map(s => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td><strong>{s.name}</strong></td>
                                <td>{s.startDate}</td>
                                <td>{s.endDate}</td>
                                <td>
                                        <span className={`badge ${s.status === 'Đang diễn ra' ? 'bg-success' : s.status === 'Sắp tới' ? 'bg-warning' : 'bg-secondary'}`}>
                                            {s.status}
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

export default SemesterManagement;