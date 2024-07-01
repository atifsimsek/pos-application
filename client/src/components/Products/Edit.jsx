import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Table, Form, Input, Button, message, Modal, Select } from "antd";
import { useState } from "react";
import { getCategories } from "../../services/categories";
import {
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../services/products";
import { getProductColums } from "./getProductColums";

const Edit = () => {
  const [form] = Form.useForm();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const queryClient = useQueryClient();

  const { data: categories, isLoading: categoriesIsLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const {
    data:products,
    error: productError,
    isLoading: productIsLoading,
    isError: productIsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      message.success("Ürün başarıyla güncellendi");
    },
    onError: () => {
      message.error("Ürün güncellenirken bir hata oluştu");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      message.success("Ürün başarıyla silindi");
    },
    onError: () => {
      message.error("Ürün silinirken bir hata oluştu");
    },
  });

  const handleOk = () => {
    setAddModalOpen(false);
  };

  const handleCancel = () => {
    setAddModalOpen(false);
  };

  const onFinish = (values) => {
    updateMutation.mutate({ productId: editingRow._id, values });
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const columns = getProductColums(
    setAddModalOpen,
    setEditingRow,
    form,
    handleDelete
  );

  if (productIsLoading) {
    return <div>Loading...</div>;
  }

  if (productIsError) {
    return <div>Error: {productError.message}</div>;
  }
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
              loading={categoriesIsLoading}
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
