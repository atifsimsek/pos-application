import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Table, Modal, Form, Input, Button, message } from "antd";
import { useState } from "react";
import { deleteCategory, updateCategory } from "../../services/categories";

const Edit = ({ categories, editModalOpen, setEditModalOpen }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
      message.success("Kategori Başarıyla Güncellendi");
      setEditingRow(null);
      setInputValue("");
    },
    onError: () => {
      message.error("Kategori Güncellenirken Bir Hata Oluştu");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
      message.success("Kategori Başarıyla Silindi");
    },
    onError: () => {
      message.error("Kategori Silinirken Bir Hata Oluştu");
    },
  });

  const handleOk = () => {
    setEditModalOpen(false);
  };

  const handleCancel = () => {
    setEditModalOpen(false);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const onFinish = () => {
    updateMutation.mutate({ categoryId: editingRow._id, title: inputValue });
    form.resetFields();
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
            allowClear
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
                handleDelete(data._id);
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
      title="Kategori Düzenle"
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
