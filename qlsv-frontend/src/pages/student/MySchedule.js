// src/pages/student/MySchedule.js
import React from 'react';

const MySchedule = () => {
    const schedule = [
        { day: "Thứ 2", time: "07:30 - 09:00", subject: "Lập trình Java", room: "Phòng A.301" },
        { day: "Thứ 2", time: "13:00 - 15:00", subject: "Cơ sở dữ liệu", room: "Phòng B.205" },
        { day: "Thứ 3", time: "09:30 - 11:00", subject: "Mạng máy tính", room: "Phòng A.105" },
        { day: "Thứ 4", time: "07:30 - 09:00", subject: "Lập trình Java", room: "Phòng A.301" },
        { day: "Thứ 5", time: "13:00 - 15:00", subject: "Cơ sở dữ liệu", room: "Phòng B.205" },
        { day: "Thứ 6", time: "09:30 - 11:00", subject: "Trí tuệ nhân tạo", room: "Phòng C.401" },
    ];

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                🗓️ Lịch học kỳ Xuân 2026
            </h2>

            <div className="card shadow" style={{ borderRadius: "12px" }}>
                <div className="card-body p-0">
                    <table className="table table-bordered table-hover mb-0">
                        <thead className="table-dark">
                        <tr>
                            <th>Thứ</th>
                            <th>Thời gian</th>
                            <th>Môn học</th>
                            <th>Phòng học</th>
                        </tr>
                        </thead>
                        <tbody>
                        {schedule.map((item, index) => (
                            <tr key={index}>
                                <td><strong>{item.day}</strong></td>
                                <td>{item.time}</td>
                                <td>{item.subject}</td>
                                <td>{item.room}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-4 alert alert-info">
                <strong>Lưu ý:</strong> Lịch học có thể thay đổi. Vui lòng kiểm tra lại trước khi đến lớp.
            </div>
        </div>
    );
};

export default MySchedule;