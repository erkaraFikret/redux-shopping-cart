import React from 'react'

const ProductCard = ({ product }) => {
    const { name, price, image, date } = product || {}
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-gray-800 ">{name}</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore eius voluptate, obcaecati nesciunt fugit.</p>
                <div className="card-actions justify-end items-center">
                    <p className='text-blue-600 font-bold'>${price}</p>
                    
                    <button className="btn btn-primary bg-blue-500 hover:bg-blue-600">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard