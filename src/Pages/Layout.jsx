import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
