// src/pages/admin/EditTeacher.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import teacherApi from '../../api/teacherApi';

const EditTeacher = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [teacher, setTeacher] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const response = await teacherApi.getById(id);
                setTeacher(response.data);
            } catch (error) {
                console.error(error);
                alert("Không tìm thấy giáo viên!");
                navigate('/admin/teachers');
            } finally {
                setLoading(false);
            }
        };
        fetchTeacher();
    }, [id, navigate]);

    const handleChange = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await teacherApi.update(id, teacher);
            alert("Cập nhật giáo viên thành công!");
            navigate('/admin/teachers');
        } catch (error) {
            console.error(error);
            alert("Cập nhật thất bại!");
        }
    };

    if (loading) return <div className="p-5 text-center">Đang tải thông tin...</div>;

    return (
        <div className="p-4">
            <h2>Sửa thông tin Giáo viên</h2>
            <div className="card shadow mt-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Họ và tên</label>
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
                            <label>Email</label>
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
                            <label>Số điện thoại</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                value={teacher.phone}
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