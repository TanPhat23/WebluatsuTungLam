import React from "react";
import { activities, procedures } from "../utils/contants";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="h-[350px] bg-[#B1BC55] w-screen mt-20 flex-row ">
      <div className="flex flex-row gap-4 justify-between ml-40 mr-40">
        <div>
          <img src={"../public/logo.png"} alt="Logo" className="h-[120px]" />
          <p>
            <span className="font-semibold">Địa chỉ: </span>
            399 Bình Lợi, phường 13, Quận Bình Thạnh, Thành phố Hồ Chí Minh.
          </p>
          <p>
            <span className="font-semibold">Liên hệ: </span>Luật sư Lê Song Tùng
            - Trưởng văn phòng 0938571549
          </p>
          <p>
            <span className="font-semibold">Liên hệ: </span>
            Bà Lê Thị Liên - 0901373986
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            ls_songtung@yahoo.com
          </p>
          <p>
            <span className="font-semibold">Website: </span>
            <a href="https://www.facebook.com/luatsutunglam">Facebook</a>
          </p>
        </div>
        <div className="mt-10 flex flex-row gap-10 ">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-bold">HOẠT ĐỘNG HÀNH NGHỀ</h3>
            <div className="w-1/2 h-[10px] rounded-xl bg-[#122B12] "></div>
            <ul>
              {activities.map((link) => (
                <li key={link.title}>
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-bold">THỦ TỤC PHÁP LÝ</h3>
            <div className="w-1/2 h-[10px] rounded-xl bg-[#122B12] "></div>
            <ul>
              {procedures.map((link) => (
                <li key={link.title}>
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-4/5 h-[2px] rounded-xl bg-[#122B12] mx-auto mt-4"></div>
      <div className="flex flex-row justify-between ml-40 mr-40 underline mt-2">
        <p>© 2024 Relume. All rights reserved.</p>
        <div className="flex flex-row gap-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
