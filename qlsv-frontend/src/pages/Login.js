import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const accounts = [
            { username: "admin", password: "123456", role: "ADMIN" },

            { username: "teacher1", password: "123456", role: "TEACHER" },
            { username: "teacher2", password: "123456", role: "TEACHER" },

            { username: "student1", password: "123456", role: "STUDENT" },
            { username: "student2", password: "123456", role: "STUDENT" },
        ];

        const user = accounts.find(
            (acc) =>
                acc.username === username && acc.password === password
        );

        if (!user) {
            alert("Sai tài khoản hoặc mật khẩu!");
            return;
        }

        // ✅ lưu login
        localStorage.setItem("user", JSON.stringify(user));

        // ✅ điều hướng đúng
        if (user.role === "ADMIN") {
            navigate("/admin");
        } else if (user.role === "TEACHER") {
            navigate("/teacher");
        } else if (user.role === "STUDENT") {
            navigate("/student");
        }
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