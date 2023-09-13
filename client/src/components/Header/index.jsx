import React, { useEffect, useMemo, useState } from "react";
import { Badge, Input } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import useWindowWidth from "../../hooks/useWindowWitdh";

const Header = () => {
  const [isMobile, setIsMobile] = useState(null);
  const { width } = useWindowWidth();

  const windowWidth = useMemo(() => {
    if (width <= 768) return width;
  }, [width]);

  const menuLinks = useMemo(
    () => [
      {
        name: "Anasayfa",
        Icon: <HomeOutlined className="md:text-2xl text-xl" />,
      },
      {
        name: "Sepet",
        Icon: (
          <Badge count={5} offset={[0, 6]}>
            <ShoppingCartOutlined className="md:text-2xl text-xl" />
          </Badge>
        ),
      },
      {
        name: "Fatura",
        Icon: <CopyOutlined className="md:text-2xl text-xl" />,
      },
      {
        name: "Müşteri",
        Icon: <UserOutlined className="md:text-2xl text-xl" />,
      },
      {
        name: "İstatistikler",
        Icon: <BarChartOutlined className="md:text-2xl text-xl" />,
      },
      {
        name: "Çıkış Yap",
        Icon: <LogoutOutlined className="md:text-2xl text-xl text-red-600 " />,
      },
    ],
    []
  );

  useEffect(() => {
    if (windowWidth <= 768) {
      setIsMobile(1);
    } else {
      setIsMobile(null);
    }
  }, [windowWidth]);
  return (
    <div className="header-wrapper border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="uppercase text-2xl font-bold md:text-4xl ">Logo</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center ">
          <Input
            className="rounded-full max-w-[800px]"
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </div>
        <div
          className="menu-links flex justify-between items-center gap-7 md:static fixed z-10 bottom-0 left-0 
        md:w-auto w-screen md:bg-transparent bg-white md:border-t-0 border-t md:px-0 px-4 py-1"
        >
          {menuLinks.map((link, index) =>
            isMobile === index ? null : (
              <a
                key={index}
                href="/"
                className={`menu-link flex flex-col hover:text-[#40a9ff] transition-all`}
              >
                {link.Icon}
                <span className="md:text-[12px] text-[10px]">{link.name}</span>
              </a>
            )
          )}
        </div>
        <a href="/" className="md:hidden flex">
          <Badge count={5} offset={[0, 6]}>
            <ShoppingCartOutlined className="md:text-2xl text-xl" />
          </Badge>
        </a>
      </header>
    </div>
  );
};

export default Header;
