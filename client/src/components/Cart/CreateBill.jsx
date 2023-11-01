import { Button, Card, Form, Input, Modal, Select } from "antd";
import React from "react";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <>
      <Modal
        title="Sipariş Oluştur"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        onFinish={onFinish}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Müşteri Adı"
            name={"customerName"}
            rules={[
              {
                required: true,
                message: "Lütfen bir müşteri adı giriniz",
              },
            ]}
          >
            <Input placeholder="Bir müşteri adı giriniz" />
          </Form.Item>
          <Form.Item
            className="py-2"
            label="Tel No"
            name={"phoneNumber"}
            maxLength={11}
            rules={[
              {
                required: true,
                message: "Lütfen bir telefon numarası giriniz",
              },
            ]}
          >
            <Input placeholder="Bir telefon numarası giriniz." />
          </Form.Item>
          <Form.Item
            label="Ödeme Yöntemi"
            name={"paymentMode"}
            rules={[
              {
                required: true,
                message: "Lütfen bir telefon numarası giriniz.",
              },
            ]}
          >
            <Select placeholder="Lütfen bir ödeme yöntemi seçiniz">
              <Select.Option value="nakit">Nakit</Select.Option>
              <Select.Option value="kredi kartı">Kredi Kartı</Select.Option>
            </Select>
          </Form.Item>
          <Card className="">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Kdv Toplam %8</span>
              <span className="text-red-600">549.00₺</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>549.00₺</b>
            </div>
            <div className="flex justify-end">
              <Button
                htmlType="submit"
                className="mt-2 "
                type="primary"
                size="large"
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
