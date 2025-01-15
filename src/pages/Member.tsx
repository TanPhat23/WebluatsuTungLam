import { useParams } from "react-router-dom";
import { members } from "../utils/constants";
import NotFound from "../components/NotFound";
import BioContainer from "../components/BioContainer";

const Member = () => {
  const { id } = useParams<{ id: string }>();
  let member = undefined;
  if (id) {
    member = members.find((member) => member.href.match(id));
  }

  if (!member) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col gap-8 min-h-screen mt-16">
      <div className="flex flex-col justify-center items-center">
        <img
          src={member.src}
          alt={member.name}
          className="w-32 h-32 rounded-full"
        />
        <p className="text-lg font-semibold">{member.name}</p>
      </div>
      <div className="mt-8 mx-16 gap-16 ">
        <div>
          <h1 className="font-bold">BIO</h1>
          <div className="h-[2px] w-[120px] bg-[#122B12] rounded-xl "></div>
        </div>
        <BioContainer name={"LĨNH VỰC CHUYÊN MÔN"} content={member.lvhd} />
        <BioContainer name={"TRÌNH ĐỘ HỌC VẤN"} content={member.lvhd} />
        <BioContainer name={"CHỨNG CHỈ HÀNH NGHỀ"} content={member.lvhd} />
        <BioContainer name={"NƠI TỪNG THAM GIA CÔNG TÁC"} content={member.lvhd} />
        <hr className="mt-16"/>
      </div>
    </div>
  );
};

export default Member;
