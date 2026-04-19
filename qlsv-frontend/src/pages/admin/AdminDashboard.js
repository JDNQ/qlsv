// src/pages/admin/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axiosClient from '../../services/axiosClient';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalStudents: 0,
        totalTeachers: 0,
        totalCourses: 0
    });

    useEffect(() => {
        // Gọi API lấy thống kê (bạn sẽ thêm sau)
        const fetchStats = async () => {
            try {
                const [studentsRes, teachersRes] = await Promise.all([
                    axiosClient.get('/admin/students/count'),
                    axiosClient.get('/admin/teachers/count')
                ]);
                setStats({
                    totalStudents: studentsRes.data,
                    totalTeachers: teachersRes.data,
                    // totalCourses: ...
                });
            } catch (err) {
                console.error(err);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="p-4">
            <h2 className="mb-4">Dashboard Quản trị viên</h2>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card text-white bg-primary">
                        <div className="card-body">
                            <h5>Tổng số Sinh viên</h5>
                            <h3>{stats.totalStudents}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-success">
                        <div className="card-body">
                            <h5>Tổng số Giáo viên</h5>
                            <h3>{stats.totalTeachers}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-warning">
                        <div className="card-body">
                            <h5>Tổng số Khóa học</h5>
                            <h3>{stats.totalCourses}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;