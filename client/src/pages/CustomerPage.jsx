import React from "react";
import { Table } from "antd";
import { getBills } from "../services/bills";
import { useQuery } from "@tanstack/react-query";

const BillPage = () => {
  const {
    data: bills,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bills"],
    queryFn: getBills,
  });

  const uniqueCustomers = bills?.filter(
    (value, index, self) =>
      index ===
      self.findIndex((bill) => bill.customerName === value.customerName)
  );

  const columns = [
    {
      title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
    {
      title: "İşlem Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => new Date(text).toLocaleDateString(),
    },
  ];
  console.log(bills, "bills");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
        <Table
          dataSource={uniqueCustomers}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x: 1000,
            y: 500,
          }}
        />
      </div>
    </>
  );
};

export default BillPage;
