import { Table, Form, Input, Button, message, Modal, Select } from "antd";
import { useEffect, useState } from "react";

const Edit = () => {
  const [form] = Form.useForm();
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const handleOk = () => {
    setAddModalOpen(false);
  };

  const handleCancel = () => {
    setAddModalOpen(false);
  };

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ productId: editingRow._id, ...values }),
        headers: { "content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün Başarıyla Güncellendi");
      setEditingRow(null);
      setProducts((prev) => {
        return prev.map((product) => {
          if (product._id === editingRow._id) {
            return { ...product, ...values };
          }
          return product;
        });
      });
    } catch (error) {
      console.log(error);
      message.error("Ürün Güncellenirken Bir Hata Oluştu");
    }
  };

  const deleteProduct = (id) => {
    try {
      fetch("http://localhost:5000/api/products/delete-product", {
        method: "DELETE",
        body: JSON.stringify({ productId: id }),
        headers: { "content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün Başarıyla Silindi");
      setEditingRow(null);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
      message.error("Ürün Silinirken Bir Hata Oluştu");
    }
  };

  const columns = [
    {
      title: "Ürün Adı",
      dataIndex: "title",
      width: "8%",
      render: (_, data) => {
        return <p>{data.title}</p>;
      },
    },
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      width: "4%",
      render: (_, data) => {
        return (
          <img
            className="w-full h-20 object-cover"
            src={data.img}
            alt={data.title}
          />
        );
      },
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
      render: (_, data) => {
        return (
          <div>
            <Button
              className="pl-0"
              type="link"
              onClick={() => {
                setAddModalOpen(true);
                console.log(data);
                setEditingRow(data);
                form.setFieldsValue(data);
              }}
            >
              Düzenle
            </Button>
            <Button
              type="link"
              danger
              onClick={() => {
                deleteProduct(data._id);
              }}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Table
        bordered
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
      <Modal
        title="Ürün Düzenle"
        open={addModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={editingRow}
        >
          <Form.Item
            name={"title"}
            label="Ürün Adı"
            rules={[
              { required: true, message: "Ürün Adı Alanı Boş Geçilemez" },
            ]}
          >
            <Input placeholder="Ürün adı giriniz" />
          </Form.Item>
          <Form.Item
            name={"img"}
            label="Ürün Görseli"
            rules={[
              { required: true, message: "Ürün Görseli Alanı Boş Geçilemez" },
            ]}
          >
            <Input placeholder="Ürün görseli giriniz" />
          </Form.Item>
          <Form.Item
            name={"price"}
            label="Ürün Fiyatı"
            rules={[
              { required: true, message: "Ürün Fiyatı Alanı Boş Geçilemez" },
            ]}
          >
            <Input placeholder="Ürün fiyatı giriniz" />
          </Form.Item>
          <Form.Item
            name={"category"}
            label="Kategori Seç"
            rules={[
              { required: true, message: "Kategori Alanı Boş Geçilemez" },
            ]}
          >
            <Select
              showSearch
              placeholder="Lütfen bir kategori seçiniz"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.value ?? "")
                  .toLocaleLowerCase()
                  .includes(input.toLowerCase())
              }
              filterSort={(optionA, optionB) => {
                if (optionA.value === "Tümü") return -1;
                if (optionB.value === "Tümü") return 1;
                return optionA.value.localeCompare(optionB.value);
              }}
              options={
                categories &&
                categories.map((category) => ({
                  value: category.title,
                  label: category.title,
                }))
              }
            />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Güncelle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
