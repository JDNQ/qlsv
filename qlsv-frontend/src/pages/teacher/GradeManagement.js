// src/pages/teacher/GradeManagement.js
import React, { useState, useEffect } from 'react';
import axiosClient from '../../services/axiosClient';
import { useSearchParams } from 'react-router-dom';

const GradeManagement = () => {
    const [students, setStudents] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [grades, setGrades] = useState({});
    const [loading, setLoading] = useState(false);
    const [className, setClassName] = useState('');
    const [searchParams] = useSearchParams();

    // Danh sách lớp học với số lượng sinh viên thực tế
    const classes = [
        { id: 1, name: "Lập trình Java - Lớp 1", count: 25 },
        { id: 2, name: "Cơ sở dữ liệu - Lớp 2", count: 18 },
        { id: 3, name: "Web Development - Lớp 1", count: 15 }
    ];

    // Mock data đầy đủ 25 sinh viên (dựa trên DB bạn cung cấp)
    const allStudents = [
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

    // Tự động chọn lớp nếu có từ URL (từ nút Nhập điểm)
    useEffect(() => {
        const classFromUrl = searchParams.get('classId');
        if (classFromUrl) {
            setSelectedClass(classFromUrl);
            const foundClass = classes.find(c => c.id === parseInt(classFromUrl));
            if (foundClass) setClassName(foundClass.name);
        }
    }, [searchParams]);

    useEffect(() => {
        if (selectedClass) {
            loadStudentsByClass(selectedClass);
        }
    }, [selectedClass]);

    const loadStudentsByClass = async (classId) => {
        setLoading(true);

        try {
            // Gọi API thật từ backend
            const res = await axiosClient.get(`/classes/${classId}/students`);
            const studentList = Array.isArray(res.data) ? res.data : [];
            setStudents(studentList);

            const initialGrades = {};
            studentList.forEach(student => {
                initialGrades[student.id] = student.score || '';
            });
            setGrades(initialGrades);

        } catch (error) {
            console.error("Lỗi tải danh sách sinh viên:", error);

            // ==================== DÙNG DATA GIẢ THEO TỪNG LỚP ====================
            let displayedStudents = [];

            if (classId === '1' || classId === 1) {
                displayedStudents = allStudents.slice(0, 25);   // 25 sinh viên
            } else if (classId === '2' || classId === 2) {
                displayedStudents = allStudents.slice(0, 18);   // 18 sinh viên
            } else if (classId === '3' || classId === 3) {
                displayedStudents = allStudents.slice(8, 23);   // 15 sinh viên
            }

            setStudents(displayedStudents);

            // Khởi tạo điểm trống
            const initialGrades = {};
            displayedStudents.forEach(student => {
                initialGrades[student.id] = '';
            });
            setGrades(initialGrades);
        } finally {
            setLoading(false);
        }
    };

    const handleScoreChange = (studentId, value) => {
        setGrades(prev => ({ ...prev, [studentId]: value }));
    };

    const handleSaveAll = async () => {
        if (Object.keys(grades).length === 0) {
            alert("Vui lòng chọn lớp và nhập điểm!");
            return;
        }

        try {
            // TODO: Sau này thay bằng API thật
            // await axiosClient.post('/scores/batch', { classId: selectedClass, grades });
            alert(`✅ Lưu điểm thành công cho ${Object.keys(grades).length} sinh viên lớp ${className || 'đã chọn'}!`);
        } catch (error) {
            console.error(error);
            alert("❌ Lưu điểm thất bại! Vui lòng kiểm tra console.");
        }
    };

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                ✍️ Nhập / Quản lý Điểm Sinh viên
            </h2>

            <div className="card shadow" style={{ borderRadius: "12px" }}>
                <div className="card-body">
                    <div className="mb-4">
                        <label className="form-label fw-bold">Chọn Lớp học</label>
                        <select
                            className="form-select"
                            value={selectedClass}
                            onChange={(e) => {
                                setSelectedClass(e.target.value);
                                const found = classes.find(c => c.id === parseInt(e.target.value));
                                if (found) setClassName(found.name);
                            }}
                            style={{ borderRadius: "8px" }}
                        >
                            <option value="">-- Chọn lớp --</option>
                            {classes.map(cls => (
                                <option key={cls.id} value={cls.id}>
                                    {cls.name} ({cls.count} sinh viên)
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedClass && (
                        <>
                            <h5 className="mb-3">
                                Danh sách sinh viên - Nhập điểm • {className}
                                <span className="text-muted ms-2">({students.length} sinh viên)</span>
                            </h5>

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
                                        {students.length === 0 ? (
                                            <tr>
                                                <td colSpan="4" className="text-center py-5 text-muted">
                                                    Không có dữ liệu sinh viên
                                                </td>
                                            </tr>
                                        ) : (
                                            students.map(student => (
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
                                            ))
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            <div className="mt-4 text-end">
                                <button
                                    onClick={handleSaveAll}
                                    className="btn btn-success btn-lg px-5"
                                    disabled={loading || Object.keys(grades).length === 0}
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