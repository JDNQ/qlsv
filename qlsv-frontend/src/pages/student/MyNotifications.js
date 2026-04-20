// src/pages/student/MyNotifications.js
import React, { useState, useEffect } from 'react';

const MyNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Data giả thông báo
        setNotifications([
            {
                id: 1,
                title: "Thông báo lịch thi giữa kỳ",
                content: "Lịch thi giữa kỳ môn Lập trình Java sẽ diễn ra vào ngày 15/05/2026.",
                date: "20/04/2026",
                type: "important"
            },
            {
                id: 2,
                title: "Gia hạn nộp học phí",
                content: "Hạn nộp học phí kỳ này được gia hạn đến ngày 30/04/2026.",
                date: "18/04/2026",
                type: "normal"
            },
            {
                id: 3,
                title: "Mở đăng ký học phần kỳ hè",
                content: "Kỳ hè 2026 bắt đầu nhận đăng ký từ ngày 25/04/2026.",
                date: "15/04/2026",
                type: "normal"
            }
        ]);
    }, []);

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                🛎️ Thông báo
            </h2>

            {notifications.length === 0 ? (
                <div className="alert alert-info">Hiện không có thông báo mới.</div>
            ) : (
                <div className="row g-3">
                    {notifications.map(noti => (
                        <div key={noti.id} className="col-12">
                            <div className={`card shadow ${noti.type === 'important' ? 'border-warning' : ''}`} style={{ borderRadius: "12px" }}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h5>{noti.title}</h5>
                                        <small className="text-muted">{noti.date}</small>
                                    </div>
                                    <p className="mt-2">{noti.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyNotifications;