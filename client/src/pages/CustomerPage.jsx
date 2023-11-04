import React from "react";
import { Table, Card, Button } from "antd";
import { useState } from "react";
import PrintBill from "../components/Bills/PrintBill";
const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className=" flex justify-end mt-4">
          <Card className="w-72 ">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Kdv Toplam %8</span>
              <span className="text-red-600">549.00₺</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>549.00₺</b>
            </div>
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="mt-2 w-full"
              type="primary"
              size="large"
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default BillPage;
