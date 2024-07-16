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
import { useSelector } from "react-redux";
import useWindowWidth from "../../hooks/useWindowWitdh";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [isMobile, setIsMobile] = useState(null);
  const { width } = useWindowWidth();
  const location = useLocation();

  const windowWidth = useMemo(() => {
    if (width <= 768) return width;
  }, [width]);

  const menuLinks = useMemo(
    () => [
      {
        name: "Anasayfa",
        to: "/",
        Icon: <HomeOutlined className="md:text-2xl text-xl" />,
      },
      {
        name: "Sepet",
        to: "/cart",
        Icon: (
          <Badge count={cartItems.length} offset={[0, 6]}>
            <ShoppingCartOutlined
              className={`${
                location.pathname === "/cart" && "text-[#40a9ff]"
              } hover:text-[#40a9ff] transition-all md:text-2xl text-xl `}
            />
          </Badge>
        ),
      },
      {
        name: "Fatura",
        to: "/bills",
        Icon: <CopyOutlined className="md:text-2xl text-xl" />,
      },
      {
        name: "Müşteri",
        to: "/customers",
        Icon: <UserOutlined className="md:text-2xl text-xl" />,
      },
      {
        name: "İstatistikler",
        to: "/statistics",
        Icon: <BarChartOutlined className="md:text-2xl text-xl" />,
      },
      {
        name: "Çıkış Yap",
        to: "/logout",
        Icon: <LogoutOutlined className="md:text-2xl text-xl text-red-600 " />,
      },
    ],
    [location.pathname, cartItems.length]
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
          <Link to="/">
            <h2 className="uppercase text-2xl font-bold md:text-4xl ">Logo</h2>
          </Link>
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
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  ` menu-link flex justify-center items-center flex-col hover:text-[#40a9ff] transition-all ${
                    isActive && "text-[#40a9ff]"
                  }`
                }
                //className={`()=> menu-link flex flex-col hover:text-[#40a9ff] transition-all`}
              >
                {link.Icon}
                <span className="md:text-[12px] text-[10px]">{link.name}</span>
              </NavLink>
            )
          )}
        </div>
        <NavLink to="/cart" className="md:hidden flex">
          <Badge count={cartItems.length} offset={[0, 6]}>
            <ShoppingCartOutlined
              className={`${
                location.pathname === "/cart" && "text-[#40a9ff]"
              } hover:text-[#40a9ff] transition-all text-2xl `}
            />
          </Badge>
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
