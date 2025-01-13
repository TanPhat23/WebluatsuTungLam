import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex justify-center h-[200px] bg-[#B1BC55] gap-4">
      <img
        src={"../public/logo.png"}
        alt="Logo"
        className="pointer-events-none object-contain h-auto w-auto"
      />
      <div className="flex-col items-center m-11">
        <h2 className="text-3xl">ĐOÀN LUẬT SƯ THÀNH PHỐ HỒ CHÍ MINH</h2>
        <p className="text-3xl font-bold text-center">
          VĂN PHÒNG LUẬT SƯ TÙNG LÂM
        </p>
      </div>
    </div>
  );
};

export default Banner;
