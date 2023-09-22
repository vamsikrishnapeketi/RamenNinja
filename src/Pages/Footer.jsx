import React from "react";
import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <div className="flex w-full bg-black text-white p-3 justify-between">
      <span>Contact us on</span>
      <Contact />
    </div>
  );
};
