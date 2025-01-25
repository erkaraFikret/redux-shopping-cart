"use client";
import AddProduct from "@/components/AddProduct";
import ClientProvider from "@/components/ClientProvider";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
            {products.length ? (
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <div>No Product!!!</div>
            )}
          </div>
        </div>
        <div>
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
