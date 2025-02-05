import React from "react";
import { procedureButtons, procedures } from "../../utils/procedures";

const Procedures = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(false);
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
        <h1 className="font-bold">THỦ TỤC PHÁP LÝ</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#0052A2] "></div>
      </div>
      <div className="flex flex-col items-center text-center gap-4 mt-16">
        <h2> tagline</h2>
        <h1 className="font-bold">Short heading here</h1>
        <div className="w-1/2 h-[2px] rounded-xl bg-[#0052A2] "></div>
        <p>nội dung cần nhập</p>
      </div>
      <div>
        <ul className="flex flex-row gap-4">
          {procedureButtons.map((procedure, index) => (
            <li key={index} className="">
              <button
                className={`text-black bg-white border-2 border-[#064273] items-center h-[85px] justify-center text-center font-semibold w-[300px] ${
                  selectedIndex === index ? "bg-[#0052A2]" : ""
                }`}
                onClick={() => {
                  handleIndexClick(index);
                }}
              >
                {procedure.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul
          className={`${
            procedures.filter((procedure) => selectedIndex === procedure.id - 1)
              .length > 1
              ? "grid grid-cols-2 "
              : ""
          }${
            loading ? "opacity-0" : "opacity-100"
          } transition-all ease-linear gap-12`}
        >
          {procedures
            .filter((procedure) => selectedIndex === procedure.id - 1)
            .map((procedure, index) => (
              <li key={procedure.title} className="">
                <button
                  className="bg-white rounded-xl border-[#0052A2] w-[420px] h-[200px] text-xl font-bold shadow-2xl hover:text-blue-400 flex flex-col justify-center items-center"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {procedure.title}
                  {hoverIndex === index && (
                    <div className="w-1/4 h-[4px] rounded-xl bg-[#0052A2] "></div>
                  )}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Procedures;
