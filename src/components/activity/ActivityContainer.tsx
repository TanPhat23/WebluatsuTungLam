type Props = {
  title: string;
  description: string;
};

const ActivityContainer = (props: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <div className="w-1/4 h-[4px] rounded-xl mt-2 bg-[#0052A2] transition ease-in duration-300"></div>
      <p>{props.description}</p>
    </div>
  );
};

export default ActivityContainer;
