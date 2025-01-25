import { addToCart } from '@/redux/features/carts/cartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

const ProductCard = ({ product }) => {
    const { name, price, image } = product || {}
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
  <figure className="h-48 w-full">
    <Image
      src={image}
      alt={name}
      className="w-full object-cover "
      width={200} height={200}
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-gray-800">{name}</h2>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore eius voluptate, obcaecati nesciunt fugit.
    </p>
    <div className="card-actions justify-end items-center">
      <p className="text-blue-600 font-bold">${price}</p>
      <button onClick={handleAddToCart} className="btn btn-primary bg-blue-500 hover:bg-blue-600">Add to Cart</button>
    </div>
  </div>
</div>

    )
}

export default ProductCard