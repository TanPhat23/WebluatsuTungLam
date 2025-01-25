import { useNavigate } from "react-router-dom";

type Props = {
  tagline: string;
  title: string;
  description: string;
  id: string;
};

const LawCard = (props: Props) => {
  const { title, tagline, description, id } = props;
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white min-w-96">
      <div className="flex m-3 flex-col justify-start items-center  ">
        <h3 className="">{tagline}</h3>
        <h2 className="font-bold text-2xl">{title}</h2>
        <div className="w-1/4 h-[4px] rounded-xl bg-[#B1BC55] transition ease-in duration-300"></div>
        <p className="mt-4 min-h-16 text-start">{description}</p>
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/laws/${id}`);
          }}
          className="text-white mt-8 w-[200px] h-[70px] flex items-center justify-center rounded-xl hover:cursor-pointer transition hover:scale-110 duration-200"
        >
          Tìm hiểu thêm
        </button>
      </div>
    </div>
  );
};

export default LawCard;
