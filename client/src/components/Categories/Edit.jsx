import { Table, Modal, Form, Input, Button, message } from "antd";
import { useState } from "react";

const Edit = ({
  editModalOpen,
  setEditModalOpen,
  categories,
  setCategories,
}) => {
  const [editingRow, setEditingRow] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleOk = () => {
    setEditModalOpen(false);
  };

  const handleCancel = () => {
    setEditModalOpen(false);
  };

  const onFinish = () => {
    try {
      fetch("http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({ title: inputValue, categoryId: editingRow._id }),
        headers: { "content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori Başarıyla Güncellendi");
      setCategories(
        categories.map((item) => {
          if (item._id === editingRow._id) {
            return { ...item, title: inputValue };
          }
          return item;
        })
      );
      setEditingRow(null);
    } catch (error) {
      console.log(error);
      message.error("Kategori Güncellenirken Bir Hata Oluştu");
    }
  };

  const deleteCategory = (id) => {
    try {
      fetch("http://localhost:5000/api/categories/delete-category", {
        method: "DELETE",
        body: JSON.stringify({ categoryId: id }),
        headers: { "content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori Başarıyla Silindi");
      setCategories(categories.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
      message.error("Kategori Silinirken Bir Hata Oluştu");
    }
  };

  const columns = [
    {
      title: "Kategori Adı",
      dataIndex: "title",
      render: (_, data) => {
        return editingRow && data?._id === editingRow?._id ? (
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          <p>{data.title}</p>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, data) => {
        return (
          <div>
            <Button
              className="pl-0"
              type="link"
              onClick={() => {
                setEditingRow(data);
                setInputValue(data.title);
              }}
            >
              Düzenle
            </Button>
            <Button
              className="text-gray-700"
              type="link"
              htmlType="submit"
              onClick={onFinish}
            >
              Kaydet
            </Button>
            <Button
              type="link"
              danger
              onClick={() => {
                deleteCategory(data._id);
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
    <Modal
      title="Yeni Kategori Ekle"
      open={editModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <Form>
        <Table
          bordered
          dataSource={categories}
          columns={columns}
          rowKey={"_id"}
        />
      </Form>
    </Modal>
  );
};

export default Edit;
