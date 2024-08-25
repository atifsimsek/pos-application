import { useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = ({ categories, products }) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const { search } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const filtredProducts = products.filter((product) =>
    product?.title?.toLowerCase()?.includes(search)
  );

  const showAddModal = () => {
    setAddModalOpen(true);
  };

  return (
    <>
      <div className="product-wrapper grid gap-4 grid-cols-card">
        {filtredProducts.map((product) => (
          <ProductItem product={product} key={product?._id} />
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
