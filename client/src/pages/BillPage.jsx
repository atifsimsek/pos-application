import React, { useState } from "react";
import { Table, Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getBills } from "../services/bills";
import PrintBill from "../components/Bills/PrintBill";
import useTableFilter from "../hooks/useTableFilter";
import Loader from "../components/Loader";
const BillPage = () => {
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  const { getColumnSearchProps } = useTableFilter();

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
      ...getColumnSearchProps("customerName"),
    },
    {
      title: "Telefon Numarası",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
      ...getColumnSearchProps("customerPhoneNumber"),
    },
    {
      title: "Oluşturulma Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => new Date(text).toLocaleDateString(),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      showSorterTooltip: false,
    },
    {
      title: "Ödeme Yöntemi",
      dataIndex: "paymentMode",
      key: "paymentMode",
      ...getColumnSearchProps("paymentMode"),
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text) => <span>{text} ₺</span>,
      sorter: (a, b) => a.totalAmount - b.totalAmount,
      showSorterTooltip: false,
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
    return <Loader />;
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
          rowKey={"_id"}
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
