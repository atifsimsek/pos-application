import "./style.css";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Add from "./Add";
import Edit from "./Edit";

const Categories = ({ categories, products, setFiltredProducts }) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("Tümü");

  const showAddModal = () => {
    setAddModalOpen(true);
  };

  const showEditModal = () => {
    setEditModalOpen(true);
  };

  useEffect(() => {
    if (categoryTitle === "Tümü") {
      setFiltredProducts(products);
    } else {
      const filtredProducts = products.filter(
        (product) => product?.category === categoryTitle
      );
      setFiltredProducts(filtredProducts);
    }
  }, [categoryTitle, products, setFiltredProducts]);

  return (
    <>
      <ul className="flex md:flex-col  gap-4 ">
        {categories.map((category, index) => (
          <li
            onClick={() => {
              setCategoryTitle(category?.title);
            }}
            key={index}
            className={`category-item ${
              categoryTitle === category?.title && "!bg-pink-600"
            }`}
          >
            <span>{category?.title}</span>
          </li>
        ))}
        <li
          className="category-item !bg-red-500 hover:opacity-70"
          onClick={showAddModal}
        >
          <PlusOutlined />
        </li>
        <li
          className="category-item !bg-yellow-400 hover:opacity-70"
          onClick={showEditModal}
        >
          <EditOutlined />
        </li>
        <Add addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} />
        <Edit
          editModalOpen={editModalOpen}
          setEditModalOpen={setEditModalOpen}
          categories={categories}
        />
      </ul>
    </>
  );
};

export default Categories;
