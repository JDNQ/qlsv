import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [masv, setMasv] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        setTimeout(() => {
            if (masv && password) {
                localStorage.setItem('token', 'fake-token');
                localStorage.setItem('role', 'STUDENT');
                navigate('/student/dashboard');
            } else {
                setError('Vui lòng nhập đầy đủ thông tin!');
            }
            setLoading(false);
        }, 900);
    };

    return (
        <div className="login-container">
            {/* Header với logo */}
            <div className="login-header">
                <div className="logo">📘</div>
                <h1>ĐĂNG NHẬP</h1>
                <p>Cổng thông tin sinh viên</p>
            </div>

            {error && (
                <div className="bg-red-500/30 border border-red-400 text-white p-3 rounded-xl text-sm mb-6 text-center">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="inputbox">
                    <span className="input-icon">👤</span>
                    <input
                        type="text"
                        value={masv}
                        onChange={(e) => setMasv(e.target.value)}
                        required
                    />
                    <label>Mã sinh viên</label>
                </div>

                <div className="inputbox">
                    <span className="input-icon">🔒</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>Mật khẩu</label>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'ĐANG ĐĂNG NHẬP...' : 'ĐĂNG NHẬP'}
                </button>
            </form>

            <div className="forgot">
                <a href="#">Quên mật khẩu?</a>
            </div>

            {/* SSO Button */}
            <button type="button" className="sso-btn">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
                    alt="Microsoft"
                    className="h-5"
                />
                Đăng nhập bằng Office 365
            </button>
        </div>
    );
};

export default Login;