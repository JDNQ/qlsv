import React, { useState, useEffect } from "react";

const ClassManagement = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // 👉 dữ liệu giả (giống các trang khác của bạn)
        setClasses([
            { id: 1, name: "CNTT 1", teacher: "TS. Nguyễn Minh Tuấn", students: 30 },
            { id: 2, name: "CNTT 2", teacher: "ThS. Trần Thu Hà", students: 28 },
            { id: 3, name: "KTPM 1", teacher: "TS. Lê Quang Huy", students: 32 },
            { id: 4, name: "HTTT 1", teacher: "PGS.TS. Hoàng Văn Nam", students: 25 },
            { id: 5, name: "MMT 1", teacher: "TS. Ngô Thanh Bình", students: 27 }
        ]);
    }, []);

    return (
        <div className="container mt-4">
            <div className="card shadow-lg border-0">
                <div className="card-body">

                    <h3 className="fw-bold mb-4 text-center">
                        🏫 Quản lý Lớp học
                    </h3>

                    <table className="table table-hover text-center align-middle">
                        <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Tên lớp</th>
                            <th>Giảng viên</th>
                            <th>Số sinh viên</th>
                        </tr>
                        </thead>

                        <tbody>
                        {classes.map(cls => (
                            <tr key={cls.id}>
                                <td>{cls.id}</td>
                                <td>{cls.name}</td>
                                <td>{cls.teacher}</td>
                                <td>{cls.students}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default ClassManagement;