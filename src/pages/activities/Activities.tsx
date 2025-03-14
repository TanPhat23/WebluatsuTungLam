import { useState } from "react";
import { activitiesButtons, activitiesCard } from "../../utils/constants";
import ActivityCard from "../../components/activity/ActivityCard";

const Activities = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState("tvpl");

  const setActivity = (index: number, activity: string) => {
    setSelectedButton(index);
    setSelectedActivity(activity);
  };
  return (
    <div className="flex flex-col gap-16 min-h-screen items-center text-center m-x-5">
      <div className="flex flex-col items-center text-center gap-4 mt-6 font-semibold">
        <h2> VỀ DỊCH VỤ TẠI</h2>
        <h1 className="font-bold">VĂN PHÒNG LUẬT SƯ TÙNG LÂM</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#0052A2] "></div>
      </div>
      <div className="flex flex-col items-center text-center gap-4 mt-16">
        <h2> tagline</h2>
        <h1 className="font-bold">Short heading here</h1>
        <div className="w-1/2 h-[2px] rounded-xl bg-[#0052A2] "></div>
        <p>nội dung cần nhập</p>
      </div>
      <ul className="flex flex-row gap-4">
        {activitiesButtons.map((activities, index) => (
          <li key={activities.key} className="">
            <button
              className="text-black bg-white border-2 border-[#064273] flex flex-col items-center h-[85px] justify-center text-center font-semibold "
              onClick={() => setActivity(index, activities.key)}
            >
              {activities.name}
              {selectedButton === index ? (
                <div className="w-1/2 h-[2px] rounded-xl bg-[#0052A2] transition ease-linear duration-300"></div>
              ) : (
                <div className="w-1/2 h-[2px] rounded-xl"></div>
              )}
            </button>
          </li>
        ))}
      </ul>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center justify-items-center">
        {activitiesCard
          .filter((activity) => activity.key === selectedActivity)
          .map((activity) => (
            <li key={activity.title} className="flex flex-col items-center">
              <ActivityCard activity={activity} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Activities;
