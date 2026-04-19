// src/pages/teacher/TeacherDashboard.js
import React, { useState, useEffect } from 'react';
import axiosClient from '../../services/axiosClient';

const TeacherDashboard = () => {
    const [teacherInfo, setTeacherInfo] = useState(null);
    const [classes, setClasses] = useState([]);
    const [recentGrades, setRecentGrades] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeacherData = async () => {
            try {
                const teacherId = localStorage.getItem('teacherId') || 1; // tạm thời

                const [profileRes, classesRes, gradesRes] = await Promise.all([
                    axiosClient.get(`/teachers/${teacherId}`),
                    axiosClient.get(`/teachers/${teacherId}/classes`),
                    axiosClient.get(`/teachers/${teacherId}/recent-grades`)
                ]);

                setTeacherInfo(profileRes.data);
                setClasses(classesRes.data);
                setRecentGrades(gradesRes.data);
            } catch (error) {
                console.error("Lỗi tải dữ liệu giáo viên:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeacherData();
    }, []);

    if (loading) {
        return <div className="p-5 text-center">Đang tải thông tin...</div>;
    }

    return (
        <div className="p-4">
            <h2 className="mb-4">👋 Xin chào, Thầy/Cô {teacherInfo?.name}!</h2>

            <div className="row g-4">
                {/* Thông tin cá nhân */}
                <div className="col-md-4">
                    <div className="card shadow h-100">
                        <div className="card-body">
                            <h5 className="card-title">Thông tin Giáo viên</h5>
                            <p><strong>Mã GV:</strong> {teacherInfo?.id}</p>
                            <p><strong>Họ tên:</strong> {teacherInfo?.name}</p>
                            <p><strong>Email:</strong> {teacherInfo?.email}</p>
                            <p><strong>SĐT:</strong> {teacherInfo?.phone || 'Chưa cập nhật'}</p>
                            <p><strong>Khoa:</strong> {teacherInfo?.department || 'Chưa có'}</p>
                        </div>
                    </div>
                </div>

                {/* Lớp đang giảng dạy */}
                <div className="col-md-4">
                    <div className="card shadow h-100">
                        <div className="card-header bg-primary text-white">
                            <h5>Lớp đang giảng dạy</h5>
                        </div>
                        <div className="card-body">
                            {classes.length > 0 ? (
                                <ul className="list-group list-group-flush">
                                    {classes.map((cls, index) => (
                                        <li key={index} className="list-group-item">
                                            {cls.className} - {cls.subject}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted">Hiện chưa có lớp nào.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Điểm số gần đây */}
                <div className="col-md-4">
                    <div className="card shadow h-100">
                        <div className="card-header bg-success text-white">
                            <h5>Nhập điểm gần đây</h5>
                        </div>
                        <div className="card-body">
                            {recentGrades.length > 0 ? (
                                <ul className="list-group">
                                    {recentGrades.map((grade, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between">
                                            <span>{grade.studentName}</span>
                                            <strong>{grade.score}</strong>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted">Chưa có hoạt động nhập điểm nào.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Các nút chức năng nhanh */}
            <div className="row mt-5">
                <div className="col-md-4">
                    <a href="/teacher/classes" className="btn btn-outline-primary w-100 py-3">
                        📋 Quản lý Lớp học
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/teacher/grade" className="btn btn-outline-success w-100 py-3">
                        ✍️ Nhập / Sửa điểm
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/teacher/profile" className="btn btn-outline-info w-100 py-3">
                        👤 Thông tin cá nhân
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;