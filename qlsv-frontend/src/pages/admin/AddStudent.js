// src/pages/admin/AddStudent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studentApi from '../../api/studentApi';

const AddStudent = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 👉 Thử gọi API
            await studentApi.create(student);

        } catch (error) {
            console.warn("API lỗi -> dùng localStorage");

            // 👉 fallback localStorage
            const oldData = JSON.parse(localStorage.getItem("students")) || [];

            const newStudent = {
                id: Date.now(),
                ...student
            };

            localStorage.setItem(
                "students",
                JSON.stringify([...oldData, newStudent])
            );
        }

        alert("Thêm sinh viên thành công!");
        navigate('/admin/students');
        setLoading(false);
    };

    return (
        <div className="p-4">
            <h2>Thêm Sinh viên mới</h2>

            <div className="card shadow mt-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Họ và tên</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={student.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={student.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Số điện thoại</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                value={student.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="d-flex gap-2">
                            <button
                                type="submit"
                                className="btn btn-success"
                                disabled={loading}
                            >
                                {loading ? "Đang thêm..." : "Thêm sinh viên"}
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate('/admin/students')}
                            >
                                Hủy
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;