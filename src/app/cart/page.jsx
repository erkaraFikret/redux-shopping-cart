"use client"
import Billing from '@/components/Billing'
import CartItem from '@/components/CartItem'
import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {
    const carts = useSelector((state) => state.carts)
    return (
        <div className='py-12 max-w-7xl mx-auto container px-4'>
            <h2 className='text-xl font-bold mb-5'>Shopping Cart</h2>
            <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-8'>
                <div className='md:w-2/3 space-y-6'>
                    {carts.length > 0 ? carts.map((item, index) => <CartItem key={index} item={item} />) : <div>No products in your cart 🛒</div>}
                </div>
                <div className='md:w-1/3'>
                    <Billing />
                </div>
            </div>
        </div>
    )
}

export default CartPage