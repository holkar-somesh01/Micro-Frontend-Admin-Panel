import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Order, User } from "./adminApi";
export interface ApiResponse<T> {
    data: T;
    result: T;
    message: string;
    success: boolean;
}
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://micro-services-auth-server.vercel.app/api/auth", credentials: "include" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            getAllUsers: builder.query<User[], void>({
                query: () => ({
                    url: "/user",
                    method: "GET",
                }),
                providesTags: ["user"],
                transformResponse: (data: ApiResponse<User[]>) => data.data,
            }),
            getUserDetails: builder.query<User, string>({
                query: (id) => ({
                    url: `/user/${id}`,
                    method: "GET",
                }),
                providesTags: ["user"],
                transformResponse: (data: ApiResponse<User>) => data.result,
            }),
            getUserOrders: builder.query<Order[], string>({
                query: (id) => ({
                    url: `/user-order/${id}`,
                    method: "GET",
                }),
                providesTags: ["user"],
                transformResponse: (data: ApiResponse<Order[]>) => data.result,
            }),
            blockUsers: builder.mutation<void, { _id: string }>({
                query: (userData) => ({
                    url: `/deActivate/${userData._id}`,
                    method: "PUT",
                }),
                invalidatesTags: ["user"],
            }),
            unblockUsers: builder.mutation<void, { _id: string }>({
                query: (userData) => ({
                    url: `/activate/${userData._id}`,
                    method: "PUT",
                }),
                invalidatesTags: ["user"],
            }),
        };
    },
});

export const {
    useGetAllUsersQuery,
    useGetUserDetailsQuery,
    useGetUserOrdersQuery,
    useBlockUsersMutation,
    useUnblockUsersMutation,
} = userApi;
