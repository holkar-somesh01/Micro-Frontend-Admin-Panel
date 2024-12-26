import React from 'react'
import { useGetReturnRequestedOrderQuery, useReturnRequestedOrderUpdateMutation } from '../redux/api/adminApi';

const ReturnRequested = () => {
    const { data } = useGetReturnRequestedOrderQuery();
    const [ReturnRequestedOrderUpdate] = useReturnRequestedOrderUpdateMutation();

    return (
        <>
            <div className="mt-6 mx-5">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Return Request</h2>
                {data && data.length > 0 ? (
                    <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
                        <table className="min-w-full table-auto border-collapse">
                            <thead className="bg-blue-600 text-white rounded-t-lg">
                                <tr>
                                    <th className="px-6 py-3 text-left">Order ID</th>
                                    <th className="px-6 py-3 text-left">User Name</th>
                                    <th className="px-6 py-3 text-left">Email</th>
                                    <th className="px-6 py-3 text-left">Product Name</th>
                                    <th className="px-6 py-3 text-left">Description</th>
                                    <th className="px-6 py-3 text-left">Price</th>
                                    <th className="px-6 py-3 text-left">Quantity</th>
                                    <th className="px-6 py-3 text-left">Image</th>
                                    <th className="px-6 py-3 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {data && data.map((order: any) => (
                                    <tr key={order._id} className={`${order.returnAccepted ? "bg-red-100" : "bg-yellow-100"} hover:bg-gray-50`}>
                                        <td className="px-6 py-4">{order._id}</td>
                                        <td className="px-6 py-4">{order.user.name}</td>
                                        <td className="px-6 py-4">{order.user.email}</td>
                                        <td className="px-6 py-4">{order.products?.map((product: any) => product.product.name).join(", ")}</td>
                                        <td className="px-6 py-4">{order.products?.map((product: any) => product.product.desc).join(", ")}</td>
                                        <td className="px-6 py-4">₹{order.products?.map((product: any) => product.product.price).join(", ")}</td>
                                        <td className="px-6 py-4">{order.products?.map((product: any) => product.qty).join(", ")}</td>
                                        <td className="px-6 py-4">
                                            {order.products?.map((product: any) => (
                                                <div key={product._id}>
                                                    <img
                                                        src={product.product.images}
                                                        alt={product.product.name}
                                                        className="h-16 w-16 object-cover rounded-md"
                                                    />
                                                </div>
                                            ))}
                                        </td>
                                        <td className="px-6 py-4">
                                            {!order.returnAccepted ? (
                                                <button
                                                    onClick={() => ReturnRequestedOrderUpdate(order)}
                                                    className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
                                                >
                                                    Accept
                                                </button>
                                            ) : (
                                                <span className="text-green-500 font-semibold">Already Accepted</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No return requests found.</p>
                )}
            </div>
        </>
    )
}

export default ReturnRequested