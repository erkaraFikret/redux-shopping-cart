import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/redux/features/carts/cartSlice';
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
    const { id, name, price, image, category, quantity } = item || [];

    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
      dispatch(increaseQuantity(id));
    };
  
    const handleDescreaseQuanity = () => {
      if (quantity > 1) {
        dispatch(decreaseQuantity(id));
      } else {
          handleRemoveFromCart()
      }
    };
  
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
      };
    return (
        <div>
            <div className='rounded-lg'>
                <div className='sm:flex sm:justify-start items-center shadow-md p-6 bg-white rounded-lg mb-6 justify-between '>
                    {/* product img */}
                    <Image
                        src={image}
                        alt="Product Image"
                        width={250}
                        height={250}
                        className="rounded-lg w-full h-28 sm:w-40 object-cover"
                    />
                    <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                        <div>
                            <h3 className='text-lg font-medium'>{name}</h3>
                            <p className='text-sm text-gray-500'>Price: ${price}</p>
                            <p className='text-sm text-gray-600'>Category: {category}</p>
                        </div>
                        <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                            <div className='flex items-center border-gray-100'>
                                <span onClick={handleDescreaseQuanity}  className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white'>-</span>
                                <input type="text" value={quantity} readOnly className='size-8 border bg-white text-center text-sm outline-none' />
                                <span  onClick={handleIncreaseQuantity} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white">+</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <p>${(price * quantity).toFixed(2)}</p>
                                <button onClick={handleRemoveFromCart} className="text-red-500 text-sm font-bold">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem