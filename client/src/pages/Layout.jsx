import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
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
