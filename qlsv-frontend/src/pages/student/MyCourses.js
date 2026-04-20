// src/pages/student/MyCourses.js
import React, { useState, useEffect } from 'react';
import axiosClient from '../../services/axiosClient';

const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const studentId = localStorage.getItem('studentId') || 1;
                const res = await axiosClient.get(`/students/${studentId}/courses`);
                setCourses(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    if (loading) {
        return <div className="text-center mt-10">Đang tải môn học...</div>;
    }

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                📚 Môn học của tôi
            </h2>

            {courses.length === 0 ? (
                <div className="alert alert-info">
                    Bạn chưa đăng ký môn học nào trong kỳ này.
                </div>
            ) : (
                <div className="row g-4">
                    {courses.map((course, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card shadow h-100" style={{ borderRadius: "12px" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{course.courseName}</h5>
                                    <p className="text-muted">Giảng viên: <strong>{course.teacherName}</strong></p>
                                    <p><strong>Kỳ học:</strong> {course.semester || "2026 Spring"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyCourses;