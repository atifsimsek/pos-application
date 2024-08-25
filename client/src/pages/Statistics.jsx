import React from "react";
import StatisticCard from "../components/Statistics/StatisticCard";
import DoughnutChart from "../components/Statistics/DoughnutChart";
import CustumAreaChart from "../components/Statistics/CustumAreaChart";
import { getBills } from "../services/bills";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products";
import Loader from "../components/Loader";

const Statistics = () => {
  const {
    data: bills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bills"],
    queryFn: getBills,
  });

  const {
    data: products,
    isLoading: productIsLoading,
    isError: productIsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const totalAmount = () => {
    if (!bills) return "0₺";
    const amount = bills.reduce((total, item) => item.totalAmount + total, 0);
    return `${amount.toFixed(2)}₺`;
  };
  if (isLoading || productIsLoading) {
    return <Loader />;
  }

  if (isError || productIsError) {
    return <div>Error loading data.</div>;
  }
  return (
    <>
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistikler</h1>
        <section className="statistics-section overflow-hidden md:overflow-y-scroll mb-16 md:mb-0">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>
          </h2>
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-col-2 my-10 gap-10">
            <StatisticCard
              title={"Toplam Alışveriş"}
              amount={bills?.length}
              img={"images/user.png"}
            />
            <StatisticCard
              title={"Toplam Kazanç"}
              amount={totalAmount()}
              img={"images/money.png"}
            />
            <StatisticCard
              title={"Toplam Satış"}
              amount={bills?.length}
              img={"images/sale.png"}
            />
            <StatisticCard
              title={"Toplam Ürün"}
              amount={products?.length}
              img={"images/product.png"}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div className=" flex items-center justify-center w-full lg:h-[50vh] h-auto ">
              <CustumAreaChart bills={bills} />
            </div>
            <div className="  flex items-center justify-center w-full lg:h-[50vh] h-auto">
              <DoughnutChart bills={bills} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Statistics;
