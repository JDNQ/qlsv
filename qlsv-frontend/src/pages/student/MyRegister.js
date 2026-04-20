// src/pages/student/MyRegister.js
import React, { useState, useEffect } from 'react';
import axiosClient from '../../services/axiosClient';

const MyRegister = () => {
    const [availableCourses, setAvailableCourses] = useState([]);
    const [registeredCourses, setRegisteredCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [registering, setRegistering] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Data giả cho môn học có thể đăng ký
            setAvailableCourses([
                {
                    id: 101,
                    courseName: "Trí tuệ nhân tạo",
                    teacherName: "Hoàng Văn T5",
                    credits: 3,
                    schedule: "Thứ 3, 5 (7:30 - 9:00)"
                },
                {
                    id: 102,
                    courseName: "Hệ điều hành",
                    teacherName: "Phạm Văn T9",
                    credits: 3,
                    schedule: "Thứ 2, 4 (13:00 - 15:00)"
                },
                {
                    id: 103,
                    courseName: "Mạng máy tính nâng cao",
                    teacherName: "Lê Văn T3",
                    credits: 4,
                    schedule: "Thứ 3, 5 (9:30 - 11:00)"
                },
            ]);

            // Môn đã đăng ký
            setRegisteredCourses([
                {
                    id: 1,
                    courseName: "Lập trình Java",
                    teacherName: "Nguyễn Văn T1",
                    credits: 4
                },
                {
                    id: 2,
                    courseName: "Cơ sở dữ liệu",
                    teacherName: "Trần Thị T2",
                    credits: 3
                },
            ]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (course) => {
        setRegistering(true);
        try {
            alert(`✅ Đăng ký thành công môn: ${course.courseName}`);

            // Cập nhật danh sách
            setRegisteredCourses([...registeredCourses, course]);
            setAvailableCourses(availableCourses.filter(c => c.id !== course.id));
        } catch (error) {
            alert("❌ Đăng ký thất bại!");
        } finally {
            setRegistering(false);
        }
    };

    if (loading) {
        return <div className="text-center mt-10">Đang tải dữ liệu...</div>;
    }

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                📝 Đăng ký học phần
            </h2>

            {/* Môn học đã đăng ký */}
            <div style={{ marginBottom: "30px" }}>
                <h4 style={{
                    color: "#1e3a8a",
                    fontWeight: "600",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    📚 Môn học đã đăng ký
                </h4>

                <div className="row g-4">
                    {registeredCourses.map((course, index) => (
                        <div key={index} className="col-md-6">
                            <div className="card shadow h-100" style={{
                                borderRadius: "12px",
                                background: "#f0fdf4",
                                border: "1px solid #86efac"
                            }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#166534" }}>
                                        {course.courseName}
                                    </h5>
                                    <p style={{ margin: "8px 0" }}>
                                        Giảng viên: <strong>{course.teacherName}</strong>
                                    </p>
                                    <p>
                                        Số tín chỉ: <strong>{course.credits}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Môn học có thể đăng ký */}
            <div>
                <h4 style={{
                    color: "#b45309",
                    fontWeight: "600",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    📌 Môn học có thể đăng ký kỳ này
                </h4>

                <div className="row g-4">
                    {availableCourses.map((course) => (
                        <div key={course.id} className="col-md-6 col-lg-4">
                            <div className="card shadow h-100" style={{ borderRadius: "12px" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{course.courseName}</h5>
                                    <p style={{ margin: "8px 0" }}>
                                        Giảng viên: <strong>{course.teacherName}</strong>
                                    </p>
                                    <p>Số tín chỉ: <strong>{course.credits}</strong></p>
                                    <p className="text-muted small" style={{ marginTop: "10px" }}>
                                        {course.schedule}
                                    </p>
                                </div>
                                <div className="card-footer bg-light" style={{ borderRadius: "0 0 12px 12px" }}>
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => handleRegister(course)}
                                        disabled={registering}
                                    >
                                        {registering ? "Đang xử lý..." : "Đăng ký môn này"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyRegister;