import React from 'react'

const AddProduct = () => {
    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg p-6'>
            <h2 className='text-xl font-semibold text-gray-700 mb-4'>Add New Product</h2>
            <form>
                <div className='space-y-4'>
                    {/* name */}
                    <label className='block text-sm text-gray-600 font-medium'>Product Name:</label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        placeholder='Product 1'
                        className='w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ring-indigo-500'
                    />
                    {/* category */}
                    <label className='block text-sm text-gray-600 font-medium'>Category:</label>
                    <select
                        name="category"
                        id="category"
                        className='w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ring-indigo-500'
                    >
                        <option value="">Choose a Category</option>
                        <option value="cloting">Cloting</option>
                        <option value="gadgets">Gadgets</option>
                        <option value="beauty">Beauty</option>
                    </select>
                    {/* image url */}
                    <label className='block text-sm text-gray-600 font-medium'>Image URL:</label>
                    <input
                        type="text"
                        name='image'
                        id='image'
                        placeholder='paste your url'
                        className='w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ring-indigo-500'
                    />

                    {/* price and date */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm text-gray-600 font-medium'>Price:</label>
                            <input
                                type="text"
                                name='price'
                                id='price'
                                placeholder='100'
                                className='w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ring-indigo-500'
                            />
                        </div>
                        <div>
                            <label className='block text-sm text-gray-600 font-medium'>Upload Date:</label>
                            <input
                                type="date"
                                name='date'
                                id='date'

                                className='w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ring-indigo-500'
                            />
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-400 to-indigo-700 hover:from-indigo-700 hover:to-indigo-400 w-full text-white py-2.5 px-4 rounded-lg mt-5"
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProduct