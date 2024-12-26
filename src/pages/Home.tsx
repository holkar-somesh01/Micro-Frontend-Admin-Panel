import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100 pb-5">
            <div className="flex-1 bg-gray-50 p-6">
                <header className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800">Home</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Admin</span>
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition">Logout</button>
                    </div>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800">Total Users</h3>
                        <p className="text-4xl font-bold text-teal-600">1,234</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800">Total Orders</h3>
                        <p className="text-4xl font-bold text-teal-600">567</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800">Revenue</h3>
                        <p className="text-4xl font-bold text-teal-600">$45,678</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Recent Activities</h2>
                    <div className="overflow-x-auto mt-4 bg-white rounded-lg shadow-md">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 text-left">Activity</th>
                                    <th className="py-2 px-4 text-left">Date</th>
                                    <th className="py-2 px-4 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="py-2 px-4">User Registered</td>
                                    <td className="py-2 px-4">2024-12-22</td>
                                    <td className="py-2 px-4 text-green-500">Completed</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 px-4">Order Shipped</td>
                                    <td className="py-2 px-4">2024-12-21</td>
                                    <td className="py-2 px-4 text-blue-500">Shipped</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 px-4">Payment Received</td>
                                    <td className="py-2 px-4">2024-12-20</td>
                                    <td className="py-2 px-4 text-green-500">Completed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Sidebar = () => {
    return <>
        <div className="w-64 bg-teal-600 text-white flex flex-col p-4 h-screen">
            <ul className="space-y-4">
                <li>
                    <Link to="/admin/" className="hover:bg-teal-500 p-2 rounded-lg block">Home</Link>
                </li>
                <li>
                    <Link to="/admin/user" className="hover:bg-teal-500 p-2 rounded-lg block">Users</Link>
                </li>
                <li>
                    <Link to="/admin/product" className="hover:bg-teal-500 p-2 rounded-lg block">Products</Link>
                </li>
                <li>
                    <Link to="/admin/order" className="hover:bg-teal-500 p-2 rounded-lg block">Orders</Link>
                </li>
                <li>
                    <Link to="/admin/setting" className="hover:bg-teal-500 p-2 rounded-lg block">Settings</Link>
                </li>
            </ul>
        </div>
    </>

}
export default Home;
