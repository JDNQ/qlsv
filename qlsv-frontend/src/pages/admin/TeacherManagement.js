// src/pages/admin/TeacherManagement.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import teacherApi from '../../api/teacherApi';

const TeacherManagement = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTeachers();
    }, []);

    const loadTeachers = async () => {
        try {
            const response = await teacherApi.getAll();
            setTeachers(response.data);
        } catch (error) {
            console.error("Lỗi tải giáo viên:", error);
            alert("Không thể kết nối với server. Kiểm tra backend đã chạy chưa?");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa giáo viên này?")) {
            try {
                await teacherApi.delete(id);
                alert("Xóa giáo viên thành công!");
                loadTeachers();
            } catch (error) {
                console.error(error);
                alert("Xóa thất bại!");
            }
        }
    };

    if (loading) return <div className="text-center mt-5">Đang tải danh sách giáo viên...</div>;

    return (
        <div className="container mt-4">
            <div className="card shadow-lg border-0">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="fw-bold">👩‍🏫 Quản lý Giáo viên</h3>
                        <Link to="/admin/teachers/add" className="btn btn-primary px-4">
                            + Thêm Giáo viên
                        </Link>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-dark text-center">
                            <tr>
                                <th>ID</th>
                                <th>Họ và tên</th>
                                <th>Email</th>
                                <th>SĐT</th>
                                <th>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            {teachers.map(teacher => (
                                <tr key={teacher.id}>
                                    <td className="text-center">{teacher.id}</td>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.phone || "Chưa có"}</td>
                                    <td className="text-center">
                                        <Link
                                            to={`/admin/teachers/edit/${teacher.id}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            Sửa
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(teacher.id)}
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

export default TeacherManagement;