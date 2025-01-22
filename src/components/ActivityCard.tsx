type Props = {
  name: string;
  content: string;
};

const ActivityCard = (props: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black text-white min-w-96">
      <div className="flex m-3 flex-col justify-start items-start  ">
        <h2 className="font-bold text-2xl">{props.name}</h2>
        <div className="w-1/4 h-[4px] rounded-xl bg-[#B1BC55] transition ease-in duration-300"></div>
        <p className="mt-4 min-h-16 text-start">{props.content}</p>
        <button className="bg-white text-black mt-8">Tìm hiểu thêm</button>
      </div>
    </div>
  );
};

export default ActivityCard;
