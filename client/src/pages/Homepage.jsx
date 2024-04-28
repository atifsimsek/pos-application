import { useEffect, useState } from "react";
import CartTotals from "../components/Cart/CartTotals";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Homepage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <>
      <div className="home px-6 flex flex-col md:flex-row justify-between gap-10 md:pb-0 pb-24">
        <div className="categories  overflow-auto max-h-[calc(100vh-130px)]">
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="products flex-1 max-h-[calc(100vh-130px)] overflow-auto ">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border ">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Homepage;
