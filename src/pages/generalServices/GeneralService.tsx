import { useParams } from "react-router-dom";

const GeneralService = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-16 min-h-screen items-center text-center mx-5 ">
      {id === "education" ? (
        <>
          <div className="flex flex-col items-center gap-4 mt-6 font-semibold">
            <h1 className="font-bold">THƯỜNG THỨC GIÁO DỤC</h1>
            <div className="w-1/2 h-[10px] rounded-xl bg-[#0052A2]" />
          </div>
          <div className="flex flex-col items-center text-center gap-4 mt-16">
            <h2> tagline</h2>
            <h1 className="font-bold">Short heading here</h1>
            <div className="w-1/2 h-[2px] rounded-xl bg-[#0052A2]"></div>
            <p>nội dung cần nhập</p>
          </div>
          <div className="relative w-full flex justify-between items-start mt-12">
            <div className="flex flex-col items-start w-1/3 mt-36">
              <div className="relative w-96 h-96 bg-blue-700 rounded-full ml-40">
                <div className="absolute -top-20 w-0 h-0  right-[-110px]
                    border-l-[150px] border-r-[150px] border-b-[250px] 
                    border-l-transparent border-r-transparent border-b-red-500">
                </div>
              </div>
              <p className="font-bold mt-3 ml-64">LUẬT SƯ LÊ SONG TÙNG</p>
              <div className="w-28 h-1 bg-red-600 mt-1 ml-72"></div>
            </div>
            <div className="w-1/3 h-[48rem] bg-blue-300"></div>
          </div>
          <p className="text-center font-bold ml-auto mr-32">VĂN PHÒNG LUẬT</p>
          <div className="w-full h-64 bg-gray-300"></div>
          <div className="text-center font-semibold my-2">
            SHORT HEADING HERE
          </div>  
          <div className="w-full h-64 bg-gray-300"></div>
          <div className="text-center font-semibold my-2">
            SHORT HEADING HERE
          </div>
          <div className="flex flex-col items-center text-center gap-4 font-bold">
            <h1>
              Short heading here
            </h1>
            <button className="text-black bg-white border-2 border-[#064273] font-bold">
              ĐẶT LỊCH HẸN
          </button>
          </div>
        </>
      ) : (
        <p className="font-bold">Hiển thị dịch vụ khác</p>
      )}
    </div>
  );
};

export default GeneralService;