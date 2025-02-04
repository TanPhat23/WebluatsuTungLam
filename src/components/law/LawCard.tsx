import { useNavigate } from "react-router-dom";

type Props = {
  tagline: string;
  title: string;
  description: string;
  id: string;
};

const LawCard = (props: Props) => {
  const { title, id } = props;
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-2 border-[#064273] min-w-96">
      <div className="flex m-3 flex-col justify-center items-center h-[225px] cursor-pointer "
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/laws/${id}`);
          }}      
       >
        <h2 className="font-bold text-3xl">{title}</h2>
        <div className="w-1/4 h-[4px] rounded-xl bg-[#0052A2] transition ease-in duration-300 mt-2"></div>
      </div>
    </div>
  );
};

export default LawCard;
