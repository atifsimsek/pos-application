import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice";
import { createBill } from "../../services/bills";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Card, Form, Input, message, Modal, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { cartItems, total, tax } = useSelector((state) => state.cart);

  const addBillMutation = useMutation({
    mutationFn: createBill,
    onSuccess: () => {
      queryClient.invalidateQueries("bills");
      message.success("Fatura başarıyla oluşturuldu");
      form.resetFields();
      dispatch(clearCart());
      navigate("/bills");
    },
    onError: () => {
      message.error("Fatura oluşturulurken bir hata oluştu");
    },
  });

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    addBillMutation.mutate({
      ...values,
      cardItems: cartItems,
      subTotal: total,
      tax: total === 0 ? "0" : ((total * tax) / 100).toFixed(2),
      totalAmount: total === 0 ? "0" : (total + (total * tax) / 100).toFixed(2),
    });
  };

  console.log(addBillMutation, "addBillMutation");
  return (
    <>
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name={"customerName"}
            label="Müşteri Adı"
            rules={[
              { required: true, message: "Müşteri Adı Alanı Boş Geçilemez" },
            ]}
          >
            <Input placeholder="Müşteri adı giriniz" />
          </Form.Item>
          <Form.Item
            name={"customerPhoneNumber"}
            label="Tel No"
            rules={[{ required: true, message: "Telefon Alanı Boş Geçilemez" }]}
          >
            <Input placeholder="Telefon giriniz" />
          </Form.Item>
          <Form.Item
            name={"paymentMode"}
            label="Ödeme Yöntemi"
            rules={[
              { required: true, message: "Ödeme Yöntemi Alanı Boş Geçilemez" },
            ]}
          >
            <Select
              showSearch
              placeholder="Lütfen bir ödeme yöntemi seçiniz"
              options={[
                { label: "Nakit", value: "Nakit" },
                { label: "Kredi Kartı", value: "Kredi Kartı" },
              ]}
            />
          </Form.Item>

          <Card className="w-full">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>{total === 0 ? "0" : total.toFixed(2)}₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Kdv %{tax}</span>
              <span className="text-red-600">
                {total === 0 ? "0" : ((total * tax) / 100).toFixed(2)}₺
              </span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>
                {total === 0 ? "0" : (total + (total * tax) / 100).toFixed(2)}₺
              </b>
            </div>
            <div className="flex justify-end">
              <Button
                type="primary"
                size="medium"
                className="mt-2"
                htmlType="submit"
                loading={addBillMutation?.isPending}
              >
                Sipariş Oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBill;
