import { useQuery } from "@tanstack/react-query";
import Products from "../components/Products";
import Categories from "../components/Categories";
import CartTotals from "../components/Cart/CartTotals";
import { getCategories } from "../services/categories";

const Homepage = () => {
  const {
    data: categories,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="home px-6 flex flex-col md:flex-row justify-between gap-10 md:pb-0 pb-24">
        <div className="categories  overflow-auto max-h-[calc(100vh-130px)]">
          <Categories categories={categories} />
        </div>
        <div className="products flex-1 max-h-[calc(100vh-130px)] overflow-auto ">
          <Products categories={categories} />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border ">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Homepage;
