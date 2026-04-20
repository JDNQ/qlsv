import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = ({ allowedRoles }) => {
    const rawUser = localStorage.getItem('user');

    console.log("RAW USER:", rawUser);

    let user = null;

    try {
        user = JSON.parse(rawUser);
    } catch (e) {
        console.error("Lỗi parse user:", e);
        return <Navigate to="/login" replace />;
    }

    console.log("PARSED USER:", user);

    // ❌ không có user
    if (!user || !user.role) {
        console.log("❌ Không có role → redirect login");
        return <Navigate to="/login" replace />;
    }

    // ❌ sai role
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        console.log("❌ Sai role:", user.role);
        return <Navigate to="/login" replace />;
    }

    console.log("✅ Được phép truy cập");

    return <Outlet />;
};

export default RequireAuth;