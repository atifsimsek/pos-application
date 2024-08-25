import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <Spin
      size="large"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
    />
  );
};

export default Loader;
