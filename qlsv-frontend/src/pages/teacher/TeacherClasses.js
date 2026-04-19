// src/pages/teacher/TeacherClasses.js
import React from 'react';

const TeacherClasses = () => {
    const classes = [
        { id: 1, name: "Lập trình Java", students: 42, semester: "2026 Spring" },
        { id: 2, name: "Cơ sở dữ liệu", students: 38, semester: "2026 Spring" },
        { id: 3, name: "Phát triển Web", students: 45, semester: "2026 Spring" }
    ];

    return (
        <div className="p-4">
            <h2>📋 Lớp học của tôi</h2>

            <div className="row g-4 mt-3">
                {classes.map(cls => (
                    <div key={cls.id} className="col-md-6 col-lg-4">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h5 className="card-title">{cls.name}</h5>
                                <p className="text-muted">Kỳ học: {cls.semester}</p>
                                <p><strong>Số sinh viên:</strong> {cls.students} người</p>
                            </div>
                            <div className="card-footer bg-light">
                                <button className="btn btn-primary me-2">Xem danh sách SV</button>
                                <button className="btn btn-success">Nhập điểm</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeacherClasses;