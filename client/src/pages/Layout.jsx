import React from "react";
import Header from "../components/Header";
import { useLocation, useParams } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {location.pathname === "/register" || location === "/login" ? null : (
        <Header />
      )}
      {children}
    </>
  );
};

export default Layout;
