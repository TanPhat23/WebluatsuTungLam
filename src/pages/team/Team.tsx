import { members } from "../../utils/constants";

const Team = () => {
  let n = members.length;
  const newmembers = members.slice(1, n);
  return (
    <div className="flex flex-col gap-32 min-h-screen items-center">
      <div className="flex flex-col items-center text-center gap-4 mt-16 font-semibold">
        <h1 className="font-bold">DANH MỤC HÌNH ẢNH</h1>
        <h2> CHÀO MỪNG QUÝ KHÁCH TỚI</h2>
      </div>
      <a href={members[0].href}>
        <img src={members[0].src} alt={members[0].name} className="w-full" />
        <p className="text-center font-bold">{members[0].name}</p>
      </a>
      <div className="grid grid-cols-3 gap-16">
        {newmembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <a href={member.href}>
              <img src={member.src} alt={member.name} className="w-full" />
              <p className="text-center font-bold">{member.name}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center text-center gap-4 font-bold">
        <h1>Short heading here</h1>
        <button className="text-black bg-white border-2 border-[#064273] font-bold">ĐẶT LỊCH HẸN</button>
      </div>
    </div>
  );
};

export default Team;
