import React from "react";
import Edit from "../components/Products/Edit";

const ProductPage = () => {
  return (
    <div className="px-6 max-h-screen overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-4">Ürünler</h1>
      <Edit />
    </div>
  );
};

export default ProductPage;
