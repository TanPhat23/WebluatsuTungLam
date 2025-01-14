import "../App.css";

const Home = () => {
  return (
    <div className="flex flex-col gap-32 min-h-screen items-center">
      <div className="flex flex-col items-center text-center gap-4 mt-6 font-semibold">
        <h2> CHÀO MỪNG QUÝ KHÁCH TỚI</h2>
        <h1 className="font-bold">VĂN PHÒNG LUẬT SƯ TÙNG LÂM</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#122B12] "></div>
      </div>
      <div className="flex flex-row gap-4 justify-between">
        <div>images</div>
        <div>
          <p>text</p>
          <h1>title</h1>
          <p>Description</p>
          <button className="text-white">button</button>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div>
          <p>text</p>
          <h1>title</h1>
          <p>Description</p>
          <button className="text-white">button</button>
        </div>
        <div>images</div>
      </div>
      <div className="flex flex-row gap-4">
        <div>images</div>
        <div>
          <p>text</p>
          <h1>title</h1>
          <p>Description</p>
          <button className="text-white">button</button>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-4 font-bold">
        <h1>Short heading here</h1>
        <button className="text-white font-bold">ĐẶT LỊCH HẸN</button>
      </div>
    </div>
  );
};

export default Home;
