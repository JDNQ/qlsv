// src/pages/student/StudentProfile.js
import React, { useState, useEffect } from 'react';
import axiosClient from '../../services/axiosClient';

const StudentProfile = () => {
    const [profile, setProfile] = useState({
        name: '', email: '', phone: '', address: '', dateOfBirth: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const studentId = localStorage.getItem('studentId') || 1;
                const res = await axiosClient.get(`/students/${studentId}`);
                setProfile(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

    const handleSave = async () => {
        setSaving(true);
        try {
            const studentId = localStorage.getItem('studentId') || 1;
            await axiosClient.put(`/students/${studentId}`, profile);
            alert("✅ Cập nhật thông tin thành công!");
        } catch (error) {
            alert("❌ Cập nhật thất bại!");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="text-center mt-10">Đang tải hồ sơ...</div>;

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                👤 Hồ sơ cá nhân
            </h2>

            <div className="card shadow" style={{ borderRadius: "12px" }}>
                <div className="card-body">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <label className="form-label">Họ và tên</label>
                            <input type="text" name="name" className="form-control" value={profile.name} onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" value={profile.email} onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Số điện thoại</label>
                            <input type="text" name="phone" className="form-control" value={profile.phone} onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Ngày sinh</label>
                            <input type="date" name="dateOfBirth" className="form-control" value={profile.dateOfBirth} onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Địa chỉ</label>
                            <input type="text" name="address" className="form-control" value={profile.address} onChange={handleChange} />
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

export default StudentProfile;