import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, message } from "antd";
import { useState } from "react";

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            message.success("Kategori Başarıyla Eklendi");
          } else {
            message.error("Kategori Eklenirken Bir Hata Oluştu");
          }
        })
        .finally(() => {
          form.resetFields();
          setIsModalOpen(false);
        });
    } catch (error) {
      console.log(error);
      setIsModalOpen(false);
    }
  };

  const categories = [
    { title: "Tümü" },
    { title: "Yiyecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
  ];

  return (
    <>
      <ul className="flex md:flex-col  gap-4 ">
        {categories.map((category, index) =>
          index === categories.length - 1 ? (
            <li
              className="category-item !bg-purple-800 hover:opacity-90"
              onClick={showModal}
            >
              <PlusOutlined />
            </li>
          ) : (
            <li key={index} className="category-item">
              <span>{category.title}</span>
            </li>
          )
        )}
      </ul>
      <Modal
        title="Yeni Kategori Ekle"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name={"title"}
            label="Kategori Ekle"
            rules={[
              { required: true, message: "Categori Alanı Boş Geçilemez" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Categories;
