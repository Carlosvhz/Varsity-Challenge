import React from "react";
import Navbar from "../Components/Navbar";
const StandardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default StandardLayout;
