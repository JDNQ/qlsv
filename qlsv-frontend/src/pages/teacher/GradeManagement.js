// src/pages/teacher/GradeManagement.js
import React, { useState, useEffect } from 'react';
import axiosClient from '../../services/axiosClient';

const GradeManagement = () => {
    const [students, setStudents] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [grades, setGrades] = useState({});
    const [loading, setLoading] = useState(false);

    // Danh sách lớp mẫu (sau này sẽ lấy từ API)
    const classes = [
        { id: 1, name: "Lập trình Java - Lớp 1" },
        { id: 2, name: "Cơ sở dữ liệu - Lớp 2" },
        { id: 3, name: "Web Development - Lớp 1" }
    ];

    useEffect(() => {
        if (selectedClass) {
            loadStudentsByClass(selectedClass);
        }
    }, [selectedClass]);

    const loadStudentsByClass = async (classId) => {
        setLoading(true);
        try {
            // Giả lập dữ liệu - sau thay bằng API thật
            const mockStudents = [
                { id: 101, name: "Nguyễn Thị Lan", email: "lan@gmail.com", currentScore: 7.5 },
                { id: 102, name: "Trần Văn Hải", email: "hai@gmail.com", currentScore: 8.0 },
                { id: 103, name: "Lê Thị Hoa", email: "hoa@gmail.com", currentScore: 6.5 },
                { id: 104, name: "Phạm Minh Quân", email: "quan@gmail.com", currentScore: null }
            ];
            setStudents(mockStudents);

            // Khởi tạo điểm hiện tại
            const initialGrades = {};
            mockStudents.forEach(student => {
                initialGrades[student.id] = student.currentScore || '';
            });
            setGrades(initialGrades);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleScoreChange = (studentId, value) => {
        setGrades(prev => ({
            ...prev,
            [studentId]: value
        }));
    };

    const handleSaveAll = async () => {
        try {
            // Gọi API lưu điểm hàng loạt
            // await axiosClient.post('/scores/batch', { classId: selectedClass, grades });
            alert("✅ Lưu điểm thành công cho tất cả sinh viên!");
        } catch (error) {
            alert("Lưu điểm thất bại!");
        }
    };

    return (
        <div className="p-4">
            <h2>✍️ Nhập / Quản lý Điểm Sinh viên</h2>

            <div className="card shadow mt-4">
                <div className="card-body">
                    <div className="mb-4">
                        <label className="form-label fw-bold">Chọn Lớp học</label>
                        <select
                            className="form-select"
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                        >
                            <option value="">-- Chọn lớp --</option>
                            {classes.map(cls => (
                                <option key={cls.id} value={cls.id}>{cls.name}</option>
                            ))}
                        </select>
                    </div>

                    {selectedClass && (
                        <>
                            <h5>Danh sách sinh viên - Nhập điểm</h5>
                            {loading ? (
                                <p>Đang tải danh sách sinh viên...</p>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead className="table-dark">
                                        <tr>
                                            <th>Mã SV</th>
                                            <th>Họ và tên</th>
                                            <th>Email</th>
                                            <th style={{ width: '180px' }}>Điểm số</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        step="0.1"
                                                        min="0"
                                                        max="10"
                                                        className="form-control"
                                                        value={grades[student.id] || ''}
                                                        onChange={(e) => handleScoreChange(student.id, e.target.value)}
                                                        placeholder="Nhập điểm"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            <div className="mt-4">
                                <button
                                    onClick={handleSaveAll}
                                    className="btn btn-success btn-lg px-5"
                                    disabled={!selectedClass}
                                >
                                    💾 Lưu tất cả điểm
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GradeManagement;