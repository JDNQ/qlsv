// src/pages/admin/EditTeacher.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import teacherApi from '../../api/teacherApi';

const EditTeacher = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [teacher, setTeacher] = useState({
        name: '',
        email: '',
        phone: '',
        department: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Tạm thời dùng dữ liệu giả (sau thay bằng API)
        setTimeout(() => {
            setTeacher({
                name: "Nguyễn Văn A",
                email: "nguyenvana@gmail.com",
                phone: "0912345678",
                department: "Công nghệ thông tin"
            });
            setLoading(false);
        }, 600);
    }, [id]);

    const handleChange = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // await teacherApi.update(id, teacher);
            alert("Cập nhật thông tin giáo viên thành công!");
            navigate('/admin/teachers');
        } catch (error) {
            alert("Cập nhật thất bại!");
        }
    };

    if (loading) return <div className="p-5 text-center">Đang tải thông tin giáo viên...</div>;

    return (
        <div className="p-4">
            <h2>👩‍🏫 Sửa thông tin Giáo viên</h2>
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

                        <div className="mb-3">
                            <label className="form-label">Khoa / Bộ môn</label>
                            <input
                                type="text"
                                name="department"
                                className="form-control"
                                value={teacher.department}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-success">Lưu thay đổi</button>
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

export default EditTeacher;