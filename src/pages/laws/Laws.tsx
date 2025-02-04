import React from "react";
import { index, laws } from "../../utils/laws";
import { FaMagnifyingGlass } from "react-icons/fa6";
import LawCard from "../../components/law/LawCard";


const Laws = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const handleIndexClick = (index: number) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setLoading(false);
    }, 300);
  };
  return (
    <div className="flex flex-col gap-16 min-h-screen items-center text-center m-x-5">
      <div className="flex flex-col items-center text-center gap-4 mt-6 font-semibold">
        <h1 className="font-bold">TÌM HIỂU PHÁP LUẬT</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#0052A2] "></div>
      </div>
      <div className="flex flex-col items-center text-center gap-4 mt-16">
        <h2> tagline</h2>
        <h1 className="font-bold">Short heading here</h1>
        <div className="w-1/2 h-[2px] rounded-xl bg-[#0052A2] "></div>
        <p>nội dung cần nhập</p>
      </div>
      <div className="flex flex-row">
        <ul className="flex flex-row gap-2 text-2xl ">
          {index.map((item, index) => (
            <li key={index} className="">
              <button
                onClick={() => handleIndexClick(index)}
                className="bg-white font-bold"
              >
                {item.title}
                {selectedIndex === index && (
                  <div className="w-auto h-[2px] rounded-xl bg-[#0052A2] transition ease-linear duration-300"></div>
                )}
              </button>
            </li>
          ))}
          <div className="flex flex-row gap-4 border-2 border-black rounded-xl ml-2 items-center">
            <FaMagnifyingGlass className="ml-2" />
            <input
              className="bg-white  mr-2 w-[200px]"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm"
            ></input>
          </div>
        </ul>
      </div>
      <div
        className={`grid grid-cols-3 gap-2  transition-all ${
          loading ? "opacity-0" : "opacity-100"
        } duration-300 ease-linear`}
      >
        {laws
          .filter((item) => {
            if (search) {
              return item.title.toLowerCase().includes(search.toLowerCase());
            }
            return (
              parseInt(item.id) <= 9 * (selectedIndex + 1) &&
              parseInt(item.id) > 9 * selectedIndex
            );
          })
          .map((item, index) => (
            <LawCard key={index} {...item} />
          ))}
      </div>
      <div className="flex flex-col items-center text-center gap-4 font-bold">
        <h1>Short heading here</h1>
        <button className="text-black bg-white border-2 border-[#064273] font-bold">ĐẶT LỊCH HẸN</button>
      </div>
    </div>
  );
};

export default Laws;
