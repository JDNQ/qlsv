import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TeacherManagement = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setTeachers([
                { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@gmail.com", phone: "0912345678" },
                { id: 2, name: "Trần Thị B", email: "tranthib@gmail.com", phone: "0987654321" }
            ]);
            setLoading(false);
        }, 800);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Xác nhận xóa giáo viên?")) {
            alert(`Đã xóa giáo viên ID: ${id}`);
        }
    };

    if (loading) return <div className="text-center mt-5">Đang tải...</div>;

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
                                    <td>{teacher.phone}</td>

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