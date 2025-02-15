import React from "react";
import ServiceCard from "../../components/generalService/ServiceCard";
import { servicesCard } from "../../utils/services";

const GeneralServices = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className="flex flex-col gap-16 min-h-screen items-center text-center mx-5">
      <div className="flex flex-col items-center gap-4 mt-6 font-semibold">
        <h1 className="font-bold">DỊCH VỤ TỔNG QUÁT</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#0052A2]" />
      </div>
      <div className="flex flex-col items-center text-center gap-4 mt-16">
        <h2> tagline</h2>
        <h1 className="font-bold">Short heading here</h1>
        <div className="w-1/2 h-[2px] rounded-xl bg-[#0052A2] "></div>
        <p>nội dung cần nhập</p>
      </div>
      <div className="flex flex-row gap-4 mt-12">
        <div>images</div>
        <div>
          <p>text</p>
          <h1>title</h1>
          <p>Description</p>
          <button className="transition text-black hover:ease-in duration-200 hover:scale-110  bg-white border-2 border-[#064273]">
            button
          </button>
        </div>
      </div>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center justify-items-center mt-12 ">
        {servicesCard.map((service) => (
          <li key={service.id}>
            <ServiceCard
              title={service.title}
              id={service.id}
            />
          </li>
        ))}
      </ul> 
      <div className="flex flex-col items-center text-center gap-4 font-bold">
        <h1>Short heading here</h1>
        <button className="text-black bg-white border-2 border-[#064273] font-bold">
          ĐẶT LỊCH HẸN
        </button>
      </div>
    </div>
  );
};

export default GeneralServices;
