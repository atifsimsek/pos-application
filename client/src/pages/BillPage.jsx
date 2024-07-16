import React, { useState } from "react";
import { Table, Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getBills } from "../services/bills";
import PrintBill from "../components/Bills/PrintBill";
const BillPage = () => {
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  const {
    data: bills,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bills"],
    queryFn: getBills,
  });

  const printBill = (record) => {
    setSelectedBill(record);
    setShowPrintModal(true);
  };

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
      title: "Oluşturulma Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: "Ödeme Yöntemi",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text) => <span>{text} ₺</span>,
    },
    {
      title: "İşlemler",
      key: "actions",
      render: (text, record) => (
        <Button type="link" size="small" onClick={() => printBill(record)}>
          Yazdır
        </Button>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const dataSource = bills.map((bill) => ({ ...bill, key: bill?._id }));

  return (
    <>
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x: 1000,
            y: 300,
          }}
        />
      </div>
      <PrintBill
        selectedBill={selectedBill}
        showPrintModal={showPrintModal}
        setShowPrintModal={setShowPrintModal}
      />
    </>
  );
};

export default BillPage;
