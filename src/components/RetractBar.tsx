import React from "react";
import { RetractBarConst } from "../utils/constants";

const RetractBar = () => {
  const [isRetract, setIsRetract] = React.useState(false);

  return (
    <div className="fixed top-[500px] border-2 rounded lg border-black">
      <div className="m-2">
        {RetractBarConst.map((item, index) => (
          <div
            key={index}
            className="flex items-end justify-end rounded-full cursor-pointer"
            onMouseEnter={() => setIsRetract(true)}
            onMouseLeave={() => setIsRetract(false)}
          >
            <div
              className={`retract-content ${
                isRetract ? "expanded" : ""
              } overflow-hidden transition-all duration-300 ease-in-out transform justify-end text-end font-bold delay-500`}
            >
              {isRetract && (
                <>
                  <div>{item.title}</div>
                  <a href={item.href}>{item.href}</a>
                </>
              )}
            </div>
            <img src={item.src} alt={item.title} className="h-12 w-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetractBar;
