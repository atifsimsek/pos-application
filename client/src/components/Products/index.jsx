import { useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products";

const Products = ({ categories }) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const navigate = useNavigate();

  const {
    data: products,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const showAddModal = () => {
    setAddModalOpen(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="product-wrapper grid gap-4 grid-cols-card">
        {products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
        <div
          onClick={showAddModal}
          className="product-item border hover:shadow-lg cursor-pointer transition-all flex items-center justify-center bg-red-500 hover:opacity-70 min-h-[180px] "
        >
          <PlusOutlined className="text-white md:text-2xl " />
        </div>
        <div
          onClick={() => {
            navigate("/product");
          }}
          className="product-item border hover:shadow-lg cursor-pointer transition-all flex items-center justify-center bg-yellow-400  hover:opacity-70 min-h-[180px]"
        >
          <EditOutlined className="text-white md:text-2xl " />
        </div>
      </div>
      <Add
        categories={categories}
        addModalOpen={addModalOpen}
        setAddModalOpen={setAddModalOpen}
      />
    </>
  );
};

export default Products;
