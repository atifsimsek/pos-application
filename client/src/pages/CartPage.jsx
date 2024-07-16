import React from "react";
import { Table, Card, Button, Popconfirm } from "antd";
import { useState } from "react";
import CreateBill from "../components/Cart/CreateBill";
import { useDispatch, useSelector } from "react-redux";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { decraseProduct, incraseProduct } from "../redux/cartSlice";
import { deleteProduct } from "../services/products";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems, total, tax } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      key: "img",
      width: "125px",
      render: (text) => (
        <img src={text} alt="" className="w-full h-20 object-cover" />
      ),
    },
    {
      title: "Ürün Adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Ürün Adedi",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, product) => {
        return (
          <div className="flex items-center gap-1">
            <Button
              onClick={() => dispatch(incraseProduct(product))}
              type="primary"
              size="small"
              className="flex justify-center items-center rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="font-bold">{product.quantity}</span>

            {product.quantity === 1 ? (
              <Popconfirm
                title="Ürünü silmek istediğinize emin misiniz?"
                okText="Evet"
                cancelText="Hayır"
                onConfirm={() => dispatch(decraseProduct(product))}
              >
                <Button
                  type="primary"
                  size="small"
                  className="flex bg-red justify-center items-center rounded-full"
                  icon={<MinusCircleOutlined />}
                />
              </Popconfirm>
            ) : (
              <Button
                onClick={() => dispatch(decraseProduct(product))}
                type="primary"
                size="small"
                className="flex bg-red justify-center items-center rounded-full"
                icon={<MinusCircleOutlined />}
              />
            )}
          </div>
        );
      },
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "price",
      key: "price",
      render: (text, product) => (product.price * product.quantity).toFixed(2),
    },
    {
      title: "İşlem",
      dataIndex: "actions",
      key: "actions",
      render: (_, product) => (
        <Popconfirm
          title="Ürünü silmek istediğinize emin misiniz?"
          onConfirm={() => dispatch(deleteProduct(product))}
          okText="Evet"
          cancelText="Hayır"
        >
          <Button type="text" danger>
            Sil
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <div className="px-6">
        <Table
          dataSource={cartItems}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className=" flex justify-end mt-4">
          <Card className="w-72 ">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>{total}₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Kdv %{tax}</span>
              <span className="text-red-600">
                {total === 0 ? "0" : ((total * tax) / 100).toFixed(2)}₺
              </span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>
                {total === 0 ? "0" : (total + (total * tax) / 100).toFixed(2)}₺
              </b>
            </div>
            <Button
              size="large"
              type="primary"
              className="mt-2 w-full"
              disabled={cartItems?.length === 0}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
