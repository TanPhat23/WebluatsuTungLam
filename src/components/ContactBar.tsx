import React from "react";
import { ContactBarConst } from "../utils/constants";

const ContactBar = () => {
  return (
    <div className="fixed right-4 top-[50vh] flex flex-col gap-2">
      {ContactBarConst.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <img src={item.src} alt="contact icon" className="w-10 h-10" />
        </a>
      ))}
    </div>
  );
};

export default ContactBar;
