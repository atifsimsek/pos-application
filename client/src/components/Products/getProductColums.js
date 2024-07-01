import { Button } from "antd";
import React from "react";

export const getProductColums = (
  setAddModalOpen,
  setEditingRow,
  form,
  handleDelete
) => [
  {
    title: "Ürün Adı",
    dataIndex: "title",
    width: "8%",
    render: (_, data) => <p>{data.title}</p>,
  },
  {
    title: "Ürün Görseli",
    dataIndex: "img",
    width: "4%",
    render: (_, data) => (
      <img
        className="w-full h-20 object-cover"
        src={data.img}
        alt={data.title}
      />
    ),
  },
  {
    title: "Ürün Fiyatı",
    dataIndex: "price",
    width: "8%",
  },
  {
    title: "Kategori",
    dataIndex: "category",
    width: "8%",
  },
  {
    title: "Action",
    dataIndex: "action",
    width: "8%",
    render: (_, data) => (
      <div>
        <Button
          className="pl-0"
          type="link"
          onClick={() => {
            setAddModalOpen(true);
            setEditingRow(data);
            form.setFieldsValue(data);
          }}
        >
          Düzenle
        </Button>
        <Button type="link" danger onClick={() => handleDelete(data._id)}>
          Sil
        </Button>
      </div>
    ),
  },
];
