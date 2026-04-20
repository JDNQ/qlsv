// src/pages/admin/AddTeacher.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teacherApi from '../../api/teacherApi';

const AddTeacher = () => {
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await teacherApi.create(teacher);
            alert("Thêm giáo viên thành công!");
            navigate('/admin/teachers');
        } catch (error) {
            console.error(error);
            alert("Thêm giáo viên thất bại!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h2>👩‍🏫 Thêm Giáo viên mới</h2>
            <div className="card shadow mt-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Họ và tên</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={teacher.name}
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
                                value={teacher.email}
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
                                value={teacher.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="d-flex gap-2">
                            <button
                                type="submit"
                                className="btn btn-success"
                                disabled={loading}
                            >
                                {loading ? "Đang thêm..." : "Thêm giáo viên"}
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate('/admin/teachers')}
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

export default AddTeacher;