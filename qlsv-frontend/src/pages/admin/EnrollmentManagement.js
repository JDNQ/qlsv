// src/pages/admin/EnrollmentManagement.js
import React, { useState, useEffect } from 'react';

const EnrollmentManagement = () => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        setEnrollments([
            { id: 101, studentName: "Nguyễn Văn A", courseName: "Lập trình Java", status: "Đã duyệt", date: "2026-04-10" },
            { id: 102, studentName: "Trần Thị B", courseName: "Cơ sở dữ liệu", status: "Chờ duyệt", date: "2026-04-12" },
            { id: 103, studentName: "Lê Văn C", courseName: "Trí tuệ nhân tạo", status: "Đã duyệt", date: "2026-04-11" },
        ]);
    }, []);

    return (
        <div className="container mt-4">
            <h3 className="fw-bold mb-4">📋 Quản lý Đăng ký Học phần</h3>

            <div className="card shadow">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th>Mã SV</th>
                            <th>Sinh viên</th>
                            <th>Môn học</th>
                            <th>Ngày đăng ký</th>
                            <th>Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        {enrollments.map(e => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.studentName}</td>
                                <td>{e.courseName}</td>
                                <td>{e.date}</td>
                                <td>
                                        <span className={`badge ${e.status === 'Đã duyệt' ? 'bg-success' : 'bg-warning'}`}>
                                            {e.status}
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

export default EnrollmentManagement;