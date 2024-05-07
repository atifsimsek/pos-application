import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";

const Products = ({ categories }) => {
  const [products, setProducts] = useState();
  const [addModalOpen, setAddModalOpen] = useState(false);

  const showAddModal = () => {
    setAddModalOpen(true);
  };

  // const showEditModal = () => {
  //   setEditModalOpen(true);
  // };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="product-wrapper grid gap-4 grid-cols-card">
        {products &&
          products.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
        <div
          onClick={showAddModal}
          className="product-item border hover:shadow-lg cursor-pointer transition-all flex items-center justify-center bg-red-500 hover:opacity-70 min-h-[180px] "
        >
          <PlusOutlined className="text-white md:text-2xl " />
        </div>
        <div className="product-item border hover:shadow-lg cursor-pointer transition-all flex items-center justify-center bg-yellow-400  hover:opacity-70 min-h-[180px]">
          <EditOutlined className="text-white md:text-2xl " />
        </div>
      </div>
      <Add
        categories={categories}
        addModalOpen={addModalOpen}
        setAddModalOpen={setAddModalOpen}
        products={products}
        setProducts={setProducts}
      />
    </>
  );
};

export default Products;
