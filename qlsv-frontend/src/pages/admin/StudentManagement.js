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
            console.error("Lỗi tải danh sách sinh viên:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sinh viên này?")) {
            try {
                await studentApi.delete(id);
                loadStudents(); // reload danh sách
            } catch (error) {
                alert("Xóa thất bại!");
            }
        }
    };

    if (loading) return <div>Đang tải...</div>;

    return (
        <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Quản lý Sinh viên</h2>
                <Link to="/admin/students/add" className="btn btn-primary">
                    + Thêm Sinh viên
                </Link>
            </div>

            <table className="table table-striped table-hover">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Họ và tên</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>
                            <Link to={`/admin/students/edit/${student.id}`}
                                  className="btn btn-warning btn-sm me-2">
                                Sửa
                            </Link>
                            <button
                                onClick={() => handleDelete(student.id)}
                                className="btn btn-danger btn-sm">
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentManagement;