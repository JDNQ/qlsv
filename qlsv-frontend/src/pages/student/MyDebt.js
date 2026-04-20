// src/pages/student/MyDebt.js
import React from 'react';

const MyDebt = () => {
    const debtInfo = {
        totalDebt: 0,
        semester: "Kỳ Xuân 2026",
        details: [
            { item: "Học phí 4 môn học", amount: "8.400.000 VNĐ", status: "Đã thanh toán" },
            { item: "Phí thư viện", amount: "300.000 VNĐ", status: "Đã thanh toán" },
            { item: "Phí bảo hiểm y tế", amount: "150.000 VNĐ", status: "Chưa thanh toán" }
        ]
    };

    return (
        <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
                💰 Công nợ học phí
            </h2>

            <div className="card shadow" style={{ borderRadius: "12px" }}>
                <div className="card-body">
                    <h4>Kỳ học: {debtInfo.semester}</h4>

                    {debtInfo.totalDebt === 0 ? (
                        <div className="alert alert-success mt-4">
                            <h5>✅ Bạn không có công nợ nào!</h5>
                            <p>Tất cả học phí kỳ này đã được thanh toán đầy đủ.</p>
                        </div>
                    ) : (
                        <div className="mt-4">
                            <h5>Công nợ hiện tại: <span className="text-danger">{debtInfo.totalDebt.toLocaleString()} VNĐ</span></h5>
                        </div>
                    )}

                    <table className="table table-bordered mt-4">
                        <thead className="table-light">
                        <tr>
                            <th>Nội dung</th>
                            <th>Số tiền</th>
                            <th>Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        {debtInfo.details.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.item}</td>
                                <td>{item.amount}</td>
                                <td>
                                        <span className={`badge ${item.status === 'Đã thanh toán' ? 'bg-success' : 'bg-warning'}`}>
                                            {item.status}
                                        </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyDebt;