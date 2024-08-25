import React, { useEffect } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  return (
    <>
      {location.pathname === "/register" ||
      location.pathname === "/login" ? null : (
        <Header />
      )}
      {children}
    </>
  );
};

export default Layout;
