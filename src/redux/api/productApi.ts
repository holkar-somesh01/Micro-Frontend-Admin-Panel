import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    products?: T;
}

export interface IProduct {
    _id: string;
    name: string;
    desc: string;
    price: number;
    stock: number;
    mrp: number;
    hero: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://micro-service-product-server-1jitncfhf.vercel.app/api/products',
        credentials: 'include',
    }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], void>({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
            providesTags: ['product'],
            transformResponse: (data: ApiResponse<IProduct[]>) => data.products ?? [],
        }),
        addProduct: builder.mutation<void, Partial<IProduct>>({
            query: (productData) => ({
                url: '/add-product',
                method: 'POST',
                body: productData,
            }),
            invalidatesTags: ['product'],
        }),
        updateProduct: builder.mutation<void, { form: FormData; _id: string }>({
            query: ({ form, _id }) => ({
                url: `/update-product/${_id}`,
                method: 'PUT',
                body: form,
            }),
            invalidatesTags: ['product'],
        }),
        deleteProduct: builder.mutation<void, { _id: string }>({
            query: ({ _id }) => ({
                url: `/delete-product/${_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['product'],
        }),
        deactivateProduct: builder.mutation<void, { _id: string }>({
            query: ({ _id }) => ({
                url: `/deactivate-product/${_id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['product'],
        }),
        activateProduct: builder.mutation<void, { _id: string }>({
            query: ({ _id }) => ({
                url: `/activate-product/${_id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['product'],
        }),
        getProductDetails: builder.query<IProduct, string>({
            query: (id) => ({
                url: `/product-details/${id}`,
                method: 'GET',
            }),
            providesTags: ['product'],
            transformResponse: (data: ApiResponse<IProduct>) => data.products ?? {
                _id: '',
                name: '',
                desc: '',
                price: 0,
                stock: 0,
                mrp: 0,
                hero: '',
                active: false,
                createdAt: '',
                updatedAt: '',
            }
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useDeactivateProductMutation,
    useActivateProductMutation,
    useGetProductDetailsQuery,
} = productApi;
