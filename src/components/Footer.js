import React from "react";
import { FaCopyright, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-5 md:gap-7 w-full bg-gray-300 py-7">
      <FaCopyright className="text-orange-500 text-[28px]" />
      <h3 className="text-2xl">
        Best <span className="text-bold text-orange-500">Eats</span>
      </h3>

      <FaTwitter className="text-gray-500 text-[20px]" />
      <FaFacebook className="text-gray-500 text-[20px]" />
      <FaLinkedin className="text-gray-500 text-[20px]" />
    </div>
  );
};

export default Footer;
