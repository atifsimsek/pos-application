import { Button, Form, Input, Modal, Select, message } from "antd";

const Add = ({
  addModalOpen,
  setAddModalOpen,
  categories,
  products,
  setProducts,
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    setAddModalOpen(false);
  };
  const handleCancel = () => {
    setAddModalOpen(false);
  };

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            message.success("Kategori Başarıyla Eklendi");
          } else {
            message.error("Kategori Eklenirken Bir Hata Oluştu");
          }
        })
        .finally(() => {
          form.resetFields();
          setProducts([
            ...products,
            {
              ...values,
              id: Math.random(),
              price: Number(values.price),
            },
          ]);
        });
    } catch (error) {
      console.log(error);
    }
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
          rules={[{ required: true, message: "Kategori Alanı Boş Geçilemez" }]}
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
