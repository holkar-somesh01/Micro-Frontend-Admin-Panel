import React from 'react';
import { useBlockUsersMutation, useGetAllUsersQuery, useUnblockUsersMutation } from '../redux/api/userApi';
import { Link } from 'react-router-dom';

const Users = () => {
    const { data, isLoading } = useGetAllUsersQuery();
    const [Block] = useBlockUsersMutation();
    const [unBlock] = useUnblockUsersMutation();

    return (
        <div className="container mx-auto p-6">
            <div className="mt-10">
                <h1 className="text-3xl font-semibold text-gray-800">All Users</h1>
            </div>
            {isLoading && <div className="text-center mt-5"><div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div> Loading...</div>}
            <div className="mt-6">
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
                    {data && data.length > 0 ? (
                        <table className="min-w-full table-auto text-left">
                            <thead className="bg-teal-500 text-white">
                                <tr>
                                    <th className="px-6 py-3 text-center">SR No.</th>
                                    <th className="px-6 py-3 text-center">Name</th>
                                    <th className="px-6 py-3 text-center">Email</th>
                                    <th className="px-6 py-3 text-center">Mobile</th>
                                    <th className="px-6 py-3 text-center">Role</th>
                                    <th className="px-6 py-3 text-center">Profile</th>
                                    <th className="px-6 py-3 text-center">Status</th>
                                    <th className="px-6 py-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.map((item: any, i: number) => (
                                        <tr key={item._id} className="border-t">
                                            <td className="px-6 py-4 text-center">{i + 1}</td>
                                            <td className="px-6 py-4 text-center">{item.name}</td>
                                            <td className="px-6 py-4 text-center">{item.email}</td>
                                            <td className="px-6 py-4 text-center">{item.mobile}</td>
                                            <td className="px-6 py-4 text-center">{item.role === "admin" ? "" : item.role}</td>
                                            <td className="px-6 py-4 text-center">
                                                <img className='h-20 w-20' src={item.profile} alt={item.name} />
                                            </td>
                                            <td>{item.isActive ? "Active" : "De-Active  "}
                                            </td>
                                            <td className="px-6 py-4 text-center space-x-4">
                                                {item.isActive ? (
                                                    <button
                                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                                                        onClick={() => Block(item)}
                                                    >
                                                        Block
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                                                        onClick={() => unBlock(item)}
                                                    >
                                                        UnBlock
                                                    </button>
                                                )}
                                                <Link
                                                    to={`/userDetails/${item._id}`}
                                                    className="text-teal-500 hover:text-teal-600 transition duration-300"
                                                >
                                                    See Details
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-center  text-gray-500">No User's found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Users;
