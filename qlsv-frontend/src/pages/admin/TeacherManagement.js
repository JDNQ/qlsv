// src/pages/admin/TeacherManagement.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import teacherApi from '../../api/teacherApi';   // bạn tạo sau

const TeacherManagement = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Tạm thời dùng API chung hoặc bạn sẽ thay sau
    useEffect(() => {
        // Giả sử bạn có teacherApi.getAll()
        // const loadTeachers = async () => { ... }
        setTimeout(() => {   // demo
            setTeachers([
                { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@gmail.com", phone: "0912345678" },
                { id: 2, name: "Trần Thị B", email: "tranthib@gmail.com", phone: "0987654321" }
            ]);
            setLoading(false);
        }, 800);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Xác nhận xóa giáo viên?")) {
            alert(`Đã xóa giáo viên ID: ${id} (chưa kết nối API)`);
            // Sau này gọi API delete
        }
    };

    if (loading) return <div className="p-5 text-center">Đang tải danh sách giáo viên...</div>;

    return (
        <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>👩‍🏫 Quản lý Giáo viên</h2>
                <Link to="/admin/teachers/add" className="btn btn-primary">
                    + Thêm Giáo viên mới
                </Link>
            </div>

            <div className="table-responsive">
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
                    {teachers.map(teacher => (
                        <tr key={teacher.id}>
                            <td>{teacher.id}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.phone}</td>
                            <td>
                                <Link to={`/admin/teachers/edit/${teacher.id}`} className="btn btn-warning btn-sm me-2">
                                    Sửa
                                </Link>
                                <button onClick={() => handleDelete(teacher.id)} className="btn btn-danger btn-sm">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherManagement;