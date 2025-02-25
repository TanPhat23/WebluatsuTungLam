import { activities, procedures } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="h-[350px] md:h-[400px] bg-[#82C8E5] w-screen mt-20 flex-row ">
      <div className="flex flex-row gap-4 justify-between ml-40 mr-48 ">
        <div>
          <img src={"/logo.png"} alt="Logo" className="h-[100px] m-2" />
          <p>
            <span className="font-semibold">Địa chỉ: </span>
            399 Bình Lợi, phường 13, Quận Bình Thạnh, Thành phố Hồ Chí Minh.
          </p>
          <p>
            <span className="font-semibold">Liên hệ: </span>Luật sư Lê Song Tùng
            - Trưởng văn phòng 0938571549
          </p>
          <p>
            <span className="font-semibold">Liên hệ: </span>
            Bà Lê Thị Liên - Quản lí văn phòng 0901373986
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            ls_songtung@yahoo.com
          </p>
          <p>
            <span className="font-semibold">Website: </span>
            <a href="https://LIENTUNG.com">LIENTUNG.com</a>
          </p>
        </div>
        <div className="mt-10 flex flex-row gap-10 ">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-lg font-bold">HOẠT ĐỘNG HÀNH NGHỀ</h3>
            <div className="w-1/2 h-[10px] rounded-xl bg-[#0052a2] "></div>
            <ul className="text-sm font-semibold text-center">
              {activities.map((link) => (
                <li key={link.title} className="mt-3">
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-lg  font-bold">THỦ TỤC PHÁP LÝ</h3>
            <div className="w-1/2 h-[10px] rounded-xl bg-[#0052a2] "></div>
            <ul className="text-sm font-semibold text-center">
              {procedures.map((link) => (
                <li key={link.title} className="mt-3">
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-4/5 h-[2px] rounded-xl bg-[#122B12] mx-auto mt-12"></div>
      <div className="flex flex-row justify-between ml-40 mr-40 underline mt-10">
        <p>© 2025 Relume. All rights reserved.</p>
        <div className="flex flex-row gap-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
