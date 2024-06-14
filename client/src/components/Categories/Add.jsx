import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, message } from "antd";
import { addCategory } from "../../services/categories";

const Add = ({ addModalOpen, setAddModalOpen }) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
      message.success("Kategori Başarıyla Eklendi");
      setAddModalOpen(false);
    },
    onError: () => {
      message.error("Kategori Eklenirken Bir Hata Oluştu");
    },
  });

  const handleOk = () => {
    setAddModalOpen(false);
  };
  const handleCancel = () => {
    setAddModalOpen(false);
  };

  const onFinish = (values) => {
    mutation.mutate(values);
    form.resetFields();
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
