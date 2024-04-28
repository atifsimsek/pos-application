import { Button, Form, Input, Modal, message } from "antd";

const Add = ({ categories, setCategories, addModalOpen, setAddModalOpen }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    setAddModalOpen(false);
  };
  const handleCancel = () => {
    setAddModalOpen(false);
  };

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
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
          setAddModalOpen(false);
          setCategories([
            ...categories,
            {
              _id: Math.random(),
              title: values.title,
            },
          ]);
        });
    } catch (error) {
      console.log(error);
      setAddModalOpen(false);
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
          label="Kategori Ekle"
          rules={[{ required: true, message: "Categori Alanı Boş Geçilemez" }]}
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
  );
};

export default Add;
