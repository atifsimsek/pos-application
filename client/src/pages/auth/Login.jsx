import { Button, Carousel, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/Auth/AuthCarousel";

const Login = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:pl-20  px-10 w-full relative flex flex-col h-full justify-center">
          <h1 className="text-center text-5xl font-bold mb-2 ">LOGO</h1>
          <Form layout="vertical">
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
                  title={"Responsive"}
                  desc={"Geniş Tutulan İstatistikler"}
                />
                <AuthCarousel
                  img={"images/customer.svg"}
                  title={"Responsive"}
                  desc={"Ürün Memnuniyeti"}
                />
                <AuthCarousel
                  img={"images/admin.svg"}
                  title={"Responsive"}
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
