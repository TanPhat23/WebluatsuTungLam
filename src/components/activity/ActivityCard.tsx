import { useNavigate } from "react-router-dom";
import type { Activity } from "../../utils/type";

type Props = {
  activity: Activity;
};

const ActivityCard = ({ activity }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black text-white min-w-96">
      <div className="flex m-3 flex-col justify-start items-start  ">
        <h2 className="font-bold text-2xl">{activity.title}</h2>
        <div className="w-1/4 h-[4px] rounded-xl bg-[#B1BC55] transition ease-in duration-300"></div>
        <p className="mt-4 min-h-16 text-start">{activity.description}</p>
        <a
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/activities/${activity.href}`);
          }}
          className="bg-white text-black mt-8 w-[150px] h-[70px] flex items-center justify-center rounded-xl hover:cursor-pointer"
        >
          Tìm hiểu thêm
        </a>
      </div>
    </div>
  );
};

export default ActivityCard;
