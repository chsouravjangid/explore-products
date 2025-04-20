import React from "react";

const ProductCard = ({ product }) => {

  return (
    <div className="border rounded-lg p-4 shadow transition transform hover:scale-105 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-green-600 font-bold mb-1">₹{(product.price * 80).toFixed(0)}</p>
      <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        onClick={() => console.log("added")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
