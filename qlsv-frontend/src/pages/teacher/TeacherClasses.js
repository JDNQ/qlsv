// src/pages/teacher/TeacherClasses.js
import React, { useState } from 'react';
import axiosClient from '../../services/axiosClient';

const TeacherClasses = () => {
    const [selectedClassId, setSelectedClassId] = useState(null);
    const [selectedClassName, setSelectedClassName] = useState('');
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showStudents, setShowStudents] = useState(false);

    // Dữ liệu lớp học + số lượng sinh viên thực tế (dựa trên DB của bạn)
    const classes = [
        {
            id: 1,
            name: "Lập trình Java",
            students: 25,     // Toàn bộ sinh viên CNTT
            semester: "2026 Spring"
        },
        {
            id: 2,
            name: "Cơ sở dữ liệu",
            students: 18,
            semester: "2026 Spring"
        },
        {
            id: 3,
            name: "Phát triển Web",
            students: 15,
            semester: "2026 Spring"
        }
    ];

    // Mock data sinh viên (dựa trên dữ liệu bạn insert trong DB)
    const mockAllStudents = [
        { id: 1, name: "Nguyễn Văn A", email: "a1@gmail.com" },
        { id: 2, name: "Trần Thị B", email: "b1@gmail.com" },
        { id: 3, name: "Lê Văn C", email: "c1@gmail.com" },
        { id: 4, name: "Phạm Thị D", email: "d1@gmail.com" },
        { id: 5, name: "Hoàng Văn E", email: "e1@gmail.com" },
        { id: 6, name: "Nguyễn Thị F", email: "f1@gmail.com" },
        { id: 7, name: "Trần Văn G", email: "g1@gmail.com" },
        { id: 8, name: "Lê Thị H", email: "h1@gmail.com" },
        { id: 9, name: "Phạm Văn I", email: "i1@gmail.com" },
        { id: 10, name: "Hoàng Thị J", email: "j1@gmail.com" },
        { id: 11, name: "Nguyễn Văn K", email: "k1@gmail.com" },
        { id: 12, name: "Trần Thị L", email: "l1@gmail.com" },
        { id: 13, name: "Lê Văn M", email: "m1@gmail.com" },
        { id: 14, name: "Phạm Thị N", email: "n1@gmail.com" },
        { id: 15, name: "Hoàng Văn O", email: "o1@gmail.com" },
        { id: 16, name: "Nguyễn Thị P", email: "p1@gmail.com" },
        { id: 17, name: "Trần Văn Q", email: "q1@gmail.com" },
        { id: 18, name: "Lê Thị R", email: "r1@gmail.com" },
        { id: 19, name: "Phạm Văn S", email: "s1@gmail.com" },
        { id: 20, name: "Hoàng Thị T", email: "t1@gmail.com" },
        { id: 21, name: "Nguyễn Văn U", email: "u1@gmail.com" },
        { id: 22, name: "Trần Thị V", email: "v1@gmail.com" },
        { id: 23, name: "Lê Văn W", email: "w1@gmail.com" },
        { id: 24, name: "Phạm Thị X", email: "x1@gmail.com" },
        { id: 25, name: "Hoàng Văn Y", email: "y1@gmail.com" }
    ];

    const handleViewStudents = async (classId, className) => {
        setSelectedClassId(classId);
        setSelectedClassName(className);
        setShowStudents(true);
        setLoading(true);

        try {
            // Gọi API thật nếu backend đã có
            const res = await axiosClient.get(`/classes/${classId}/students`);
            setStudents(res.data || []);
        } catch (error) {
            console.error("Lỗi tải danh sách sinh viên:", error);

            // Phân bổ số lượng sinh viên theo từng lớp (data giả)
            let displayedStudents = [];

            if (classId === 1) {
                displayedStudents = mockAllStudents.slice(0, 25);   // 25 SV - Lập trình Java
            } else if (classId === 2) {
                displayedStudents = mockAllStudents.slice(0, 18);   // 18 SV - Cơ sở dữ liệu
            } else if (classId === 3) {
                displayedStudents = mockAllStudents.slice(5, 20);   // 15 SV - Phát triển Web
            }

            setStudents(displayedStudents);
        } finally {
            setLoading(false);
        }
    };

    const handleEnterGrades = (classId) => {
        window.location.href = `/teacher/grade?classId=${classId}`;
    };

    const closeStudentList = () => {
        setShowStudents(false);
        setStudents([]);
    };

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                📋 Lớp học của tôi
            </h2>

            <div className="row g-4">
                {classes.map(cls => (
                    <div key={cls.id} className="col-md-6 col-lg-4">
                        <div className="card shadow h-100" style={{ borderRadius: "12px" }}>
                            <div className="card-body">
                                <h5 className="card-title">{cls.name}</h5>
                                <p className="text-muted">Kỳ học: <strong>{cls.semester}</strong></p>
                                <p><strong>Số sinh viên:</strong> {cls.students} người</p>
                            </div>
                            <div className="card-footer bg-light d-flex gap-2" style={{ borderRadius: "0 0 12px 12px" }}>
                                <button
                                    className="btn btn-primary flex-fill"
                                    onClick={() => handleViewStudents(cls.id, cls.name)}
                                >
                                    Xem danh sách SV
                                </button>
                                <button
                                    className="btn btn-success flex-fill"
                                    onClick={() => handleEnterGrades(cls.id)}
                                >
                                    Nhập điểm
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bảng danh sách sinh viên */}
            {showStudents && (
                <div className="mt-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>
                            Danh sách sinh viên lớp: <strong>{selectedClassName}</strong>
                            <span className="text-muted ms-2">({students.length} sinh viên)</span>
                        </h4>
                        <button className="btn btn-secondary" onClick={closeStudentList}>
                            Đóng
                        </button>
                    </div>

                    {loading ? (
                        <p>Đang tải danh sách sinh viên...</p>
                    ) : (
                        <div className="card shadow" style={{ borderRadius: "12px" }}>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="table-dark">
                                        <tr>
                                            <th>Mã SV</th>
                                            <th>Họ và tên</th>
                                            <th>Email</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {students.map((student) => (
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TeacherClasses;