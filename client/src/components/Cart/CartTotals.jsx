import { Button } from "antd";
import React from "react";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const CartTotals = () => {
  const products = [
    {
      id: 1,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 2,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
    {
      id: 3,
      name: "Elma",
      price: 12,
      image:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg",
    },
  ];
  return (
    <div className="cart h-full max-h-[calc(100vh-91px)] flex flex-col -mt-[2px]  ">
      <h2
        className="bg-blue-600 text-center py-4 text-white 
    font-bold tracking-wide flex flex-col"
      >
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 overflow-y-auto">
        {products.map((product) => (
          <li className="cart-item flex justify-between">
            <div className="flex items-center">
              <img
                className="w-16 h-16 object-cover pt-2"
                src={product.image}
                alt=""
              />
              <div className="flex flex-col ml-2">
                <b>{product.name}</b>
                <span>{product.price}₺ x 2</span>
              </div>
            </div>
            <div className="flex items-center gap-1 ">
              <Button
                type="primary"
                size="middle"
                className="flex justify-center items-center rounded-full"
                icon={<PlusCircleOutlined />}
              />
              <span className="font-bold">1</span>
              <Button
                type="primary"
                size="middle"
                className="flex justify-center items-center rounded-full"
                icon={<MinusCircleOutlined />}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-totals mt-auto">
        <div>
          <div className="flex justify-between p-2  border-t">
            <b>Ara Toplam</b>
            <span>99₺</span>
          </div>
          <div className="flex justify-between p-2  border-b">
            <b>KDV %8</b>
            <span className="text-red-700"> +7.92₺</span>
          </div>
          <div className="flex justify-between p-2 mt-4 ">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">99₺</span>
          </div>
          <div className="py-4 px-2">
            <Button type="primary" size="large" className="w-full">
              Create Order
            </Button>
            <Button
              type="primary"
              size="large"
              className="w-full mt-2 flex justify-center items-center"
              icon={<ClearOutlined />}
              danger
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
