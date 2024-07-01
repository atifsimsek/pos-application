import { addProduct } from "../../services/products";
import { Button, Form, Input, Modal, Select, message } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Add = ({ addModalOpen, setAddModalOpen, categories }) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      message.success("Ürün başarıyla eklendi");
    },
    onError: () => {
      message.error("Ürün eklenirken bir hata oluştu");
    },
  });

  const handleOk = () => {
    setAddModalOpen(false);
  };
  const handleCancel = () => {
    setAddModalOpen(false);
  };

  const onFinish = (values) => {
    addMutation.mutate(values);
  };

  return (
    <Modal
      title="Yeni Kategori Ekle"
      open={addModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          name={"title"}
          label="Ürün Adı"
          rules={[{ required: true, message: "Ürün Adı Alanı Boş Geçilemez" }]}
        >
          <Input allowClear placeholder="Ürün adı giriniz" />
        </Form.Item>
        <Form.Item
          name={"img"}
          label="Ürün Görseli"
          rules={[
            { required: true, message: "Ürün Görseli Alanı Boş Geçilemez" },
          ]}
        >
          <Input allowClear placeholder="Ürün görseli giriniz" />
        </Form.Item>
        <Form.Item
          name={"price"}
          label="Ürün Fiyatı"
          rules={[
            { required: true, message: "Ürün Fiyatı Alanı Boş Geçilemez" },
          ]}
        >
          <Input allowClear placeholder="Ürün fiyatı giriniz" />
        </Form.Item>
        <Form.Item
          name={"category"}
          label="Kategori Seç"
          rules={[{ required: true, message: "Kategori Alanı Boş Geçilemez" }]}
        >
          <Select
            allowClear
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
            options={categories.map((category) => ({
              value: category.title,
              label: category.title,
            }))}
          />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit">
            Oluştur
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Add;
