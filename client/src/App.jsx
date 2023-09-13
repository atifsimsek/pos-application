import CartTotals from "./components/Cart";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex flex-col md:flex-row justify-between gap-10 md:pb-0 pb-24">
        <div className="categories  overflow-auto max-h-[calc(100vh-130px)]">
          <Categories />
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
}

export default App;
