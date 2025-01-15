import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

type Props = {
  name: string;
  content: string;
};

const BioContainer = (props: Props) => {
  const [lvhd, setLvhd] = useState(false);

  return (
    <div
      className={`mt-16 border-[2px] border-black overflow-hidden transition-all duration-500 ease-in-out ${
        lvhd ? "max-h-[500px]" : "max-h-[100px]"
      }`}
    >
      <div className="flex flex-row items-center justify-between mr-4">
        <h2 className="text-3xl font-bold m-4">{props.name}</h2>
        {!lvhd ? (
          <FaChevronDown
            className="hover:cursor-pointer"
            onClick={() => setLvhd(true)}
          />
        ) : (
          <FaChevronUp
            className="hover:cursor-pointer"
            onClick={() => setLvhd(false)}
          />
        )}
      </div>
      <div className="m-4">
        <p
          className={`transition-opacity duration-500 ${
            lvhd ? "opacity-100" : "opacity-0"
          }`}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default BioContainer;
