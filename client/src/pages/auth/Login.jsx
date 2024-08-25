import { Button, Carousel, Checkbox, Form, Input, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCarousel from "../../components/Auth/AuthCarousel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/auth";

const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data, "data");
      localStorage.setItem(
        "posUser",
        JSON.stringify({
          username: data?.username,
          email: data?.email,
        })
      );
      queryClient.invalidateQueries("login");
      message.success("Giriş Başarılı");
      navigate("/");
    },
    onError: (error) => {
      if (error.response.status === 404) {
        message.error("Kullanıcı Bulunamadı");
      } else if (error.response.status === 403) {
        message.error("Hatalı Şifre");
      } else {
        message.error("Giriş yaparken bir hata oluştu");
      }
    },
  });

  const onFinish = (values) => {
    addMutation.mutate(values);
  };

  console.log(addMutation, "addMutation");
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:pl-20  px-10 w-full relative flex flex-col h-full justify-center">
          <h1 className="text-center text-5xl font-bold mb-2 ">LOGO</h1>
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              remember: false,
            }}
          >
            <Form.Item
              label="E-mail"
              name={"email"}
              rules={[
                { required: true, message: "E-mail Alanı Boş Bırakılamaz!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name={"password"}
              rules={[
                { required: true, message: "Şifre Alanı Boş Bırakılamaz" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name={"remember"} valuePropName="checked">
              <div className="flex items-center justify-between">
                <Checkbox>Beni Hatırla</Checkbox>
                <Link>Forgot Password ?</Link>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
                loading={addMutation?.isPending}
              >
                Giriş Yap
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center w-full absolute left-0 bottom-10">
            Bir hesabınız var mı ? &nbsp;
            <Link className="text-blue-600 " to={"/register"}>
              {"  "}
              Şimdi Kaydol
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full  flex items-center">
            <div className="w-full">
              <Carousel autoplay className="!h-full px-6">
                <AuthCarousel
                  img={"images/responsive.svg"}
                  title={"Responsive"}
                  desc={"Tüm Cihaz Boyutlarıyla Uyumluluk"}
                />
                <AuthCarousel
                  img={"images/statistic.svg"}
                  title={"Grafikler"}
                  desc={"Geniş Tutulan İstatistikler"}
                />
                <AuthCarousel
                  img={"images/customer.svg"}
                  title={"Müşteri Memnuniyeti"}
                  desc={"Deneyim Sonunda Üründen Memnun Müşteriler"}
                />
                <AuthCarousel
                  img={"images/admin.svg"}
                  title={"Yönetici Paneli"}
                  desc={"Tek Alandan Yönetim"}
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
