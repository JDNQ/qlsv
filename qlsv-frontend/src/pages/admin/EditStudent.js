// src/pages/admin/EditStudent.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import studentApi from '../../api/studentApi';

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await studentApi.getById(id);
                setStudent(response.data);
            } catch (error) {
                alert("Không tìm thấy sinh viên!");
                navigate('/admin/students');
            } finally {
                setLoading(false);
            }
        };
        fetchStudent();
    }, [id, navigate]);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await studentApi.update(id, student);
            alert("Cập nhật thành công!");
            navigate('/admin/students');
        } catch (error) {
            alert("Cập nhật thất bại!");
        }
    };

    if (loading) return <div className="p-5">Đang tải thông tin...</div>;

    return (
        <div className="p-4">
            <h2>Sửa thông tin Sinh viên</h2>
            <div className="card shadow mt-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Họ và tên</label>
                            <input type="text" name="name" className="form-control" value={student.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" value={student.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Số điện thoại</label>
                            <input type="text" name="phone" className="form-control" value={student.phone} onChange={handleChange} />
                        </div>

                        <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-success">Lưu thay đổi</button>
                            <button type="button" className="btn btn-secondary" onClick={() => navigate('/admin/students')}>
                                Hủy
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditStudent;