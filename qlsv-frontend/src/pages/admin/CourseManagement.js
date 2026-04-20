import React, { useState, useEffect } from 'react';

const CourseManagement = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCourses([
                { id: 1, name: "Lập trình Java", teacher: "TS. Nguyễn Minh Tuấn", credits: 3 },
                { id: 2, name: "Cơ sở dữ liệu", teacher: "ThS. Trần Thu Hà", credits: 3 },
                { id: 3, name: "Lập trình Web", teacher: "TS. Lê Quang Huy", credits: 3 },
                { id: 4, name: "Trí tuệ nhân tạo", teacher: "PGS.TS. Hoàng Văn Nam", credits: 4 },
                { id: 5, name: "Mạng máy tính", teacher: "TS. Ngô Thanh Bình", credits: 3 },
                { id: 6, name: "Hệ điều hành", teacher: "ThS. Bùi Đức Long", credits: 3 },
                { id: 7, name: "Cấu trúc dữ liệu", teacher: "TS. Đặng Thị Lan", credits: 4 },
                { id: 8, name: "Phân tích thiết kế hệ thống", teacher: "ThS. Phạm Ngọc Anh", credits: 3 }
            ]);
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <div className="text-center mt-5">Đang tải...</div>;

    return (
        <div className="container mt-4">

            <div className="card shadow-lg border-0">
                <div className="card-body">

                    <h3 className="fw-bold mb-4 text-center">📚 Quản lý Khóa học</h3>

                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-dark text-center">
                            <tr>
                                <th>ID</th>
                                <th>Tên khóa học</th>
                                <th>Giảng viên</th>
                                <th>Số tín chỉ</th>
                            </tr>
                            </thead>

                            <tbody>
                            {courses.map(course => (
                                <tr key={course.id}>
                                    <td className="text-center">{course.id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.teacher}</td>
                                    <td className="text-center">{course.credits}</td>
                                </tr>
                            ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CourseManagement;