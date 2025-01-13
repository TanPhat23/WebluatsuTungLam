import React from "react";
import Carousel from "../components/Carousel";
import { aboutLinkList1, aboutLinkList2 } from "../utils/contants";

type Props = {};

const images = ["../../public/house.jpg", "../../public/house.jpg"];

const About = (props: Props) => {
  return (
    <div className="flex flex-col gap-16 min-h-screen items-center text-center">
      <div className="flex flex-col items-center text-center gap-4 mt-16">
        <h1 className="font-bold">VỀ VĂN PHÒNG LUẬT SƯ TÙNG LÂM</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#122B12] "></div>
      </div>
      <Carousel images={images} />
      <div className="flex flex-col items-center text-center gap-4 mt-6">
        <h2> 10 năm kinh nghiệm hành nghề</h2>
        <h1 className="font-bold">VĂN PHÒNG LUẬT SƯ TÙNG LÂM</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#122B12] "></div>
        <p>Văn phòng luật sư Tùng Lâm......</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1>Long heading is what you see here in this feature section</h1>
        <img
          src="../../public/groupimageDemo.jpg"
          className="w-[600px] h-[400px] object-cover"
          alt="Group image"
        />
      </div>
      <div className="flex flex-row gap-20 ">
        <div className="flex flex-col text-start">
          <h2 className="text-4xl font-bold">PHƯƠNG PHÁP CỦA CHÚNG TÔI</h2>
          <div className="w-1/4 h-[5px] rounded-xl bg-[#122B12] "></div>
          <ul className="flex flex-col gap-2 mt-6">
            {aboutLinkList1.map((link) => (
              <li key={link.title}>
                <button className="w-5/6 text-white">
                  <a href={link.path}>{link.title}</a>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[5px] h-auto rounded-xl bg-[#122B12] mt-16"></div>
        <div>
          <h2 className="text-4xl font-bold">VẤN ĐỀ CHÚNG TÔI ĐẢM NHẬN</h2>
          <div className="w-1/4 h-[5px] rounded-xl bg-[#122B12] "></div>
          <ul className="flex flex-col gap-2 mt-6">
            {aboutLinkList2.map((link) => (
              <li key={link.title}>
                <button className="w-5/6 text-white">
                  <a href={link.path}>{link.title}</a>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
