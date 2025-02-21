import "../App.css";
import Carousel from "../components/Carousel";

const images = ["./house.jpg", "./house.jpg"];

const Home = () => {
  return (
    <div className="flex flex-col gap-16 min-h-screen items-center text-center m-x-5">
      <div className="flex flex-col items-center text-center gap-4 mt-6 font-semibold">
        <h2> CHÀO MỪNG QUÝ KHÁCH TỚI</h2>
        <h1 className="font-bold">VĂN PHÒNG LUẬT SƯ TÙNG LÂM</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#0052A2] "></div>
      </div>
      <Carousel images={images} />
      <div className="flex flex-col items-center text-center gap-4 mt-6">
        <h2> 10 năm kinh nghiệm hành nghề</h2>
        <h1 className="font-bold">VĂN PHÒNG LUẬT SƯ TÙNG LÂM</h1>
        <div className="w-1/2 h-[10px] rounded-xl bg-[#0052A2] "></div>
        <p>Văn phòng luật sư Tùng Lâm......</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1>Long heading is what you see here in this feature section</h1>
        <img
          src="./groupimageDemo.jpg"
          className="w-[600px] h-[400px] object-cover"
          alt="Group image"
        />
      </div>
      <div className="flex flex-row gap-4 justify-between">
        <div>images</div>
        <div>
          <p>text</p>
          <h1>title</h1>
          <p>Description</p>
          <button className="transition text-black hover:ease-in duration-200 hover:scale-110 bg-white border-2 border-[#064273] ">
            button
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div>
          <p>text</p>
          <h1>title</h1>
          <p>Description</p>
          <button className="transition text-black hover:ease-in duration-200 hover:scale-110  bg-white border-2 border-[#064273]">
            button
          </button>
        </div>
        <div>images</div>
      </div>
      <div className="flex flex-row gap-4">
        <div>images</div>
        <div>
          <p>text</p>
          <h1>title</h1>
          <p>Description</p>
          <button className="transition text-black hover:ease-in duration-200 hover:scale-110  bg-white border-2 border-[#064273]">
            button
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-4 font-bold">
        <h1>Short heading here</h1>
        <button className="text-black bg-white border-2 border-[#064273] font-bold">
          ĐẶT LỊCH HẸN
        </button>
      </div>
    </div>
  );
};

export default Home;
