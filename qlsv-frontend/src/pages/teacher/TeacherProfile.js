// src/pages/teacher/TeacherProfile.js
import React, { useState, useEffect } from 'react';
import axiosClient from '../../services/axiosClient';

const TeacherProfile = () => {
    const [teacher, setTeacher] = useState({
        name: '',
        email: '',
        phone: '',
        department: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Tạm thời dùng dữ liệu giả (sau thay bằng API thật)
        setTimeout(() => {
            setTeacher({
                name: "Nguyễn Văn A",
                email: "nguyenvana@school.edu.vn",
                phone: "0912345678",
                department: "Công nghệ Thông tin"
            });
            setLoading(false);
        }, 800);
    }, []);

    const handleChange = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            // await axiosClient.put('/teachers/profile', teacher);
            alert("✅ Cập nhật thông tin thành công!");
        } catch (error) {
            alert("Cập nhật thất bại!");
        }
    };

    if (loading) return <div className="p-5 text-center">Đang tải thông tin...</div>;

    return (
        <div className="p-4">
            <h2>👤 Thông tin cá nhân Giáo viên</h2>
            <div className="card shadow mt-4">
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Họ và tên</label>
                        <input type="text" name="name" className="form-control" value={teacher.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" value={teacher.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Số điện thoại</label>
                        <input type="text" name="phone" className="form-control" value={teacher.phone} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Khoa / Bộ môn</label>
                        <input type="text" name="department" className="form-control" value={teacher.department} onChange={handleChange} />
                    </div>

                    <button onClick={handleSave} className="btn btn-success mt-3">
                        Lưu thay đổi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeacherProfile;