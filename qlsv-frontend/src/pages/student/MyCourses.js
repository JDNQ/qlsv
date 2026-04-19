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

    if (loading) return <div className="p-5 text-center">Đang tải môn học...</div>;

    return (
        <div className="p-4">
            <h2>📚 Môn học của tôi</h2>

            <div className="row g-4 mt-3">
                {courses.length === 0 ? (
                    <div className="col-12">
                        <div className="alert alert-info">Bạn chưa đăng ký môn học nào.</div>
                    </div>
                ) : (
                    courses.map((course, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    <h5>{course.courseName}</h5>
                                    <p className="text-muted">Giảng viên: {course.teacherName}</p>
                                    <p><strong>Kỳ học:</strong> {course.semester}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyCourses;