// src/pages/admin/StudentManagement.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import studentApi from '../../api/studentApi';

const StudentManagement = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const response = await studentApi.getAll();
            setStudents(response.data);
        } catch (error) {
            console.error("Lỗi tải sinh viên:", error);
            alert("Không thể kết nối với server. Kiểm tra backend đã chạy chưa?");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sinh viên này?")) {
            try {
                await studentApi.delete(id);
                alert("Xóa sinh viên thành công!");
                loadStudents();
            } catch (error) {
                console.error(error);
                alert("Xóa thất bại!");
            }
        }
    };

    if (loading) return <div className="text-center mt-5">Đang tải danh sách sinh viên...</div>;

    return (
        <div className="container mt-4">
            <div className="card shadow-lg border-0">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="fw-bold">🎓 Quản lý Sinh viên</h3>
                        <Link to="/admin/students/add" className="btn btn-primary px-4">
                            + Thêm Sinh viên
                        </Link>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-dark text-center">
                            <tr>
                                <th>ID</th>
                                <th>Họ và tên</th>
                                <th>Email</th>
                                <th>Chuyên ngành</th>
                                <th>SĐT</th>
                                <th>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            {students.map(student => (
                                <tr key={student.id}>
                                    <td className="text-center">{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.major || "Chưa có"}</td>
                                    <td>{student.phone}</td>
                                    <td className="text-center">
                                        <Link
                                            to={`/admin/students/edit/${student.id}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            Sửa
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(student.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentManagement;