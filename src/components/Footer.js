import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <BiCopyright className="copy-sign" />
      <p>Sven Wacker {date}</p>
    </footer>
  );
};

export default Footer;
