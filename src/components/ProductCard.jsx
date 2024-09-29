import React from "react";

export const ProductCard = ( {product} ) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
        <p className="text-lg font-semibold mb-4">
          Rs. {product.price.toFixed(2)}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
