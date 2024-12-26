import React from 'react';
import { useGetUserDetailsQuery } from '../redux/api/userApi';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const { data, isLoading, isSuccess, isError, error } = useGetUserDetailsQuery(id);

    if (isLoading) {
        return <div className="text-center text-lg text-gray-600">Loading...</div>;
    }

    if (isError) {
        return <div className="text-center text-lg text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">User Details</h2>

            {isSuccess && data ? (
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <div className="flex items-center space-x-6 mb-6">
                        <img
                            src={data.profile}
                            alt="User Profile"
                            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
                        />
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-gray-800">{data.name}</h3>
                            <p className="text-gray-600"><strong>Email:</strong> {data.email}</p>
                            <p className="text-gray-600"><strong>Mobile:</strong> {data.mobile}</p>
                            <p className="text-gray-600"><strong>Role:</strong> {data.role}</p>
                            <p className="text-gray-600"><strong>Status:</strong> {data.isActive ? 'Active' : 'Inactive'}</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 pt-4">
                        <p className="text-gray-600"><strong>Account Created:</strong> {new Date(data.createdAt).toLocaleDateString()}</p>
                        <p className="text-gray-600"><strong>Last Updated:</strong> {new Date(data.updatedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            ) : (
                <div className="text-center text-lg text-gray-600">No data available</div>
            )}
        </div>
    );
};

export default UserDetails;
