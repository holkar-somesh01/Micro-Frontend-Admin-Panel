import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../redux/api/productApi';

interface AddProductInputs {
    name: string;
    desc: string;
    price: number;
    stock: number;
    mrp: number;
    hero: FileList;
    images: FileList;
}
const AddProduct: React.FC = () => {
    const navigate = useNavigate();
    const [AddProduct, { isSuccess, isLoading, isError, error }] = useAddProductMutation();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddProductInputs>();
    const onSubmit: SubmitHandler<AddProductInputs> = (data: AddProductInputs) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('desc', data.desc);
        formData.append('price', data.price.toString());
        formData.append('stock', data.stock.toString());
        formData.append('mrp', data.mrp.toString());
        if (data.hero.length > 0) {
            formData.append('hero', data.hero[0]);
        }
        AddProduct(formData as any);
    }
    return (
        <div className="mx-auto px-4">
            <div className="flex justify-end mb-4 relative top-14">
                <button
                    onClick={() => navigate("/product")}
                    className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                    Product's
                </button>
            </div>
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-center mb-6">Add Product</h3>
                {isSuccess && (
                    <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
                        Product added successfully!
                    </div>
                )}
                {isError && error && (
                    <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
                        {typeof error === 'string'
                            ? error
                            : (error as any)?.data?.message || 'An error occurred. Please try again.'}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className={`form-control w-full mt-2 p-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="desc"
                                className={`form-control w-full mt-2 p-3 border rounded-md ${errors.desc ? 'border-red-500' : 'border-gray-300'}`}
                                {...register('desc', { required: 'Description is required' })}
                            ></textarea>
                            {errors.desc && <p className="text-red-500 text-sm mt-1">{errors.desc.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="form-group">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                            <input
                                type="number"
                                id="price"
                                className={`form-control w-full mt-2 p-3 border rounded-md ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                                {...register('price', {
                                    required: 'Price is required',
                                    valueAsNumber: true,
                                    min: { value: 1, message: 'Price must be at least 1' }
                                })}
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
                            <input
                                type="number"
                                id="stock"
                                className={`form-control w-full mt-2 p-3 border rounded-md ${errors.stock ? 'border-red-500' : 'border-gray-300'}`}
                                {...register('stock', {
                                    required: 'Stock is required',
                                    valueAsNumber: true,
                                    min: { value: 0, message: 'Stock cannot be negative' }
                                })}
                            />
                            {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="form-group">
                            <label htmlFor="mrp" className="block text-sm font-medium text-gray-700">MRP</label>
                            <input
                                type="number"
                                id="mrp"
                                className={`form-control w-full mt-2 p-3 border rounded-md ${errors.mrp ? 'border-red-500' : 'border-gray-300'}`}
                                {...register('mrp', {
                                    required: 'MRP is required',
                                    valueAsNumber: true,
                                    min: { value: 1, message: 'MRP must be at least 1' }
                                })}
                            />
                            {errors.mrp && <p className="text-red-500 text-sm mt-1">{errors.mrp.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="hero" className="block text-sm font-medium text-gray-700">Hero Image</label>
                            <input
                                type="file"
                                id="hero"
                                className={`form-control w-full mt-2 p-3 border rounded-md ${errors.hero ? 'border-red-500' : 'border-gray-300'}`}
                                {...register('hero', { required: 'Hero image is required' })}
                            />
                            {errors.hero && <p className="text-red-500 text-sm mt-1">{errors.hero.message}</p>}
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        {isLoading ? (
                            <div className="spinner-border text-blue-500" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            <div className="flex justify-center gap-4">
                                <button
                                    type="submit"
                                    className="w-1/3 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    disabled={isLoading}>
                                    {isLoading ? 'Submitting...' : 'Add Product'}
                                </button>
                                <button
                                    type="button"
                                    className="w-1/3 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    onClick={() => reset()}
                                    disabled={isLoading}>
                                    Reset
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
