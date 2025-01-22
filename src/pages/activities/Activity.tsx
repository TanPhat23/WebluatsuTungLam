import { useNavigate, useParams } from "react-router-dom";
import type { Activity } from "../../utils/type";
import { activitiesCard } from "../../utils/constants";
import NotFound from "../../components/NotFound";
import ActivityContainer from "../../components/activity/ActivityContainer";

const Activity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let activity: Activity | undefined;
  let listActivity: Activity[] = [];
  if (id) {
    let index: number;
    index = activitiesCard.findIndex((activity) => activity.href.match(id));
    activity = activitiesCard[index];
    listActivity = activitiesCard
      .slice(Math.max(0, index - 2), Math.min(activitiesCard.length, index + 5))
      .filter((item) => item.href !== id);
  }
  if (!activity) return <NotFound message="Không tìm thấy hoạt động" />;

  return (
    <div className="flex flex-col gap-16 min-h-screen items-center text-center mx-16">
      <div className="flex flex-col items-center text-center gap-4 mt-6 font-semibold">
        <h2>VỀ DỊCH VỤ TẠI</h2>
        <h1 className="font-bold">VĂN PHÒNG LUẬT SƯ TÙNG LÂM</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#122B12]"></div>
      </div>
      <div className="flex flex-col items-start text-start justify-start w-full gap-32 mt-16">
        <ActivityContainer title="TỔNG QUAN" description={activity.summary} />
        <ActivityContainer
          title="*Nội dung mấu chốt*"
          description={activity.keyContent}
        />
        <ActivityContainer
          title="Vấn đề thường gặp"
          description={activity.commonProblem}
        />
        <ActivityContainer
          title="Dịch vụ pháp lý về vấn đề trên"
          description={activity.legalServices}
        />
      </div>
      <div className="flex flex-col items-center text-center gap-4 mt-6 font-semibold">
        <h2 className="text-2xl font-bold">Các dịch vụ khác</h2>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#122B12]"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {listActivity.map((activity) => (
          <a
            onClick={() => navigate(`/activities/${activity.href}`)}
            content={activity.description}
            className="transition ease-in hover:cursor-pointer bg-black text-white min-h-16 min-w-32 flex justify-center text-center items-center rounded-xl px-2 hover:scale-110 duration-500"
          >
            {activity.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Activity;
