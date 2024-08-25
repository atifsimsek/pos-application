import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Products from "../components/Products";
import Categories from "../components/Categories";
import CartTotals from "../components/Cart/CartTotals";
import { getCategories } from "../services/categories";
import { getProducts } from "../services/products";
import Loader from "../components/Loader";

const Homepage = () => {
  const [filtredProducts, setFiltredProducts] = useState([]);

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const {
    data: products,
    isLoading: productsIsLoading,
    isError: productsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (categoriesLoading || productsIsLoading) {
    return <Loader />;
  }

  if (categoriesError || productsError) {
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <div className="home px-4 md:px-6 flex flex-col md:flex-row justify-between gap-10 max-h-max  overflow-auto  md:overflow-visible">
        <div className="categories  overflow-auto max-h-[calc(100vh-130px)]">
          <Categories
            categories={categories}
            products={products}
            setFiltredProducts={setFiltredProducts}
          />
        </div>
        <div className="products flex-1 max-h-72  md:max-h-[calc(100vh-130px)] overflow-auto ">
          <Products categories={categories} products={filtredProducts} />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border md:min-h-[calc(100vh-83px)] mb-16 md:mb-0 ">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Homepage;
