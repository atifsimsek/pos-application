import React from "react";

const products = [
  {
    id: 1,
    name: "Elma",
    price: 12,
    image:
      "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
  },
];

const Products = () => {
  return (
    <div className="product-wrapper grid gap-4 grid-cols-card">
      {products.map((product) => (
        <div className="product-item border hover:shadow-lg cursor-pointer transition-all">
          <div className="product-img">
            <img
              className="h-28 object-cover w-full border-b"
              src={product.image}
              alt=""
            />
          </div>
          <div className="product-info flex flex-col p-3">
            <span className="font-bold">{product.name}</span>
            <span>{product.price}₺</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
