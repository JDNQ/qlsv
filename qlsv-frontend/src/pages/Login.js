import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // 👉 Fake tài khoản
        const accounts = [
            { username: "admin", password: "123456", role: "admin" },
            { username: "teacher", password: "123456", role: "teacher" },
            { username: "student", password: "123456", role: "student" },
        ];

        const user = accounts.find(
            (acc) =>
                acc.username === username && acc.password === password
        );

        if (!user) {
            alert("Sai tài khoản hoặc mật khẩu!");
            return;
        }

        // 🔥 QUAN TRỌNG: lưu vào localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // 👉 chuyển trang
        navigate("/admin");
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <div className="logo">🎓</div>
                    <h1>QLSV</h1>
                    <p>Đăng nhập hệ thống</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="inputbox">
                        <span className="input-icon">👤</span>
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Tài khoản</label>
                    </div>

                    <div className="inputbox">
                        <span className="input-icon">🔒</span>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Mật khẩu</label>
                    </div>

                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};

export default Login;