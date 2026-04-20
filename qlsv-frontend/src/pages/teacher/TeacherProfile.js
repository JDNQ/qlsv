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
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const teacherId = localStorage.getItem('teacherId') || 1;
                const res = await axiosClient.get(`/teachers/${teacherId}`);
                setTeacher(res.data);
            } catch (error) {
                console.error("Lỗi tải thông tin giảng viên:", error);
                // Fallback mock data
                setTeacher({
                    name: "Nguyễn Văn A",
                    email: "nguyenvana@school.edu.vn",
                    phone: "0912345678",
                    department: "Công nghệ Thông tin"
                });
            } finally {
                setLoading(false);
            }
        };
        fetchTeacher();
    }, []);

    const handleChange = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const teacherId = localStorage.getItem('teacherId') || 1;
            await axiosClient.put(`/teachers/${teacherId}`, teacher);
            alert("✅ Cập nhật thông tin thành công!");
        } catch (error) {
            console.error(error);
            alert("❌ Cập nhật thất bại!");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="text-center mt-10">Đang tải thông tin...</div>;
    }

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                👤 Thông tin cá nhân Giáo viên
            </h2>

            <div className="card shadow" style={{ borderRadius: "12px" }}>
                <div className="card-body">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <label className="form-label">Họ và tên</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={teacher.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={teacher.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Số điện thoại</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                value={teacher.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Khoa / Bộ môn</label>
                            <input
                                type="text"
                                name="department"
                                className="form-control"
                                value={teacher.department}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        className="btn btn-success mt-4 px-5"
                        disabled={saving}
                    >
                        {saving ? "Đang lưu..." : "Lưu thay đổi"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeacherProfile;