import { useNavigate } from "react-router-dom";
import type { Activity } from "../../utils/type";

type Props = {
  activity: Activity;
};

const ActivityCard = ({ activity }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white text-black min-w-96 border-2 border-[#064273] cursor-pointer transition hover:shadow-xl"
      onClick={() => {
        window.scrollTo(0, 0);
        navigate(`/activities/${activity.href}`);
      }}
    >
      <div className="flex m-3 flex-col justify-center items-center h-[170px] group ">
        <h2 className="font-bold text-3xl ">{activity.title}</h2>
        <div className="w-1/4 h-[4px] mt-2 rounded-xl bg-[#0052A2] transition ease-in duration-300 opacity-0 group-hover:opacity-100 "></div>
        {/* <p className="mt-4 min-h-16 text-start">{activity.description}</p>  */}
      </div>
    </div>
  );
};

export default ActivityCard;
