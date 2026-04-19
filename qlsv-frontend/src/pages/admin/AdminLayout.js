import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-950">
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-72">   {/* ml-72 = width của sidebar 288px */}
                {/* Top Navbar (có thể thêm sau) */}
                <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center px-8">
                    <h1 className="text-xl font-semibold text-white">Quản trị hệ thống</h1>
                </header>

                {/* Nội dung trang */}
                <main className="p-8 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;