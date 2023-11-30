import React from "react";
import StatisticsCard from "../components/Statistics/StatisticsCard";
import { useState, useEffect } from "react";
import { Area, Pie } from "@ant-design/plots";

const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

  const data2 = [
    {
      type: "test",
      value: 27,
    },
    {
      type: "test1",
      value: 25,
    },
    {
      type: "test2",
      value: 18,
    },
    {
      type: "test3",
      value: 15,
    },
    {
      type: "test4",
      value: 10,
    },
    {
      type: "test5",
      value: 5,
    },
  ];

  const config2 = {
    appendPadding: 10,
    data: data2,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return (
    <>
      <div className="px-6 md:pb-0 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistikler</h1>
        <section className="statistics-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>
          </h2>
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-col-2 my-10 gap-10">
            <StatisticsCard
              title={"Toplam Müşteri"}
              amount={"10"}
              img={"images/user.png"}
            />
            <StatisticsCard
              title={"Toplam Kazanç"}
              amount={"660.96₺"}
              img={"images/money.png"}
            />
            <StatisticsCard
              title={"Toplam Satış"}
              amount={"6"}
              img={"images/sale.png"}
            />
            <StatisticsCard
              title={"Toplam Ürün"}
              amount={"28"}
              img={"images/product.png"}
            />
          </div>
          <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
            <div className="lg:w-1/2 lg:h-full h-72">
              <Area {...config} />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              <Pie {...config2} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Statistics;
