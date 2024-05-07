import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item border hover:shadow-lg cursor-pointer transition-all">
      <div className="product-img">
        <img
          className="h-28 object-cover w-full border-b"
          src={product.img}
          alt=""
        />
      </div>
      <div className="product-info flex flex-col p-3">
        <span className="font-bold">{product.title}</span>
        <span>{product.price}₺</span>
      </div>
    </div>
  );
};

export default ProductItem;
