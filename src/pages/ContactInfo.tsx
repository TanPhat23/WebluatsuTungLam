import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const ContactInfo = () => {
  const [sendingMail, setSendingMail] = useState(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    setSendingMail(true);
    if (!CheckInput) return;

    const form = {
      from_name: name,
      email: email,
      phone: phone,
      message: message,
    };
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast("Gửi mail thành công ", {
            theme: "dark",
            type: "success",
          });
          setName("");
          setEmail("");
          setMessage("");
          setPhone(0);
        },
        (error) => {
          toast("Gửi mail không thành công " + error, {
            theme: "dark",
            type: "error",
          });
        }
      );
  };

  const CheckInput = (): boolean => {
    if (
      name === "" ||
      phone === 0 ||
      email === "" ||
      message === "" ||
      phone.toString().length !== 10
    ) {
      toast("Vui lòng nhập đầy đủ thông tin", {
        theme: "dark",
        type: "error",
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast("Địa chỉ email không hợp lệ", {
        theme: "dark",
        type: "error",
      });
      return false;
    }
    return true;
  };
  
  useEffect(() => {
    if (sendingMail) {
      setTimeout(() => setSendingMail(false), 2000);
    }
  }, [sendingMail]);

  return (
    <>
      <ToastContainer closeButton position="top-center" />
      <div className="flex flex-col gap-16 min-h-screen items-center text-center ml-5">
        <div className="flex flex-col items-center text-center gap-4 mt-16">
          <h1 className="font-bold text-4xl">Liên Hệ </h1>
          <p className="text-xl">
            Hãy liên hệ ngay với chúng tôi để được hỗ trợ tốt nhất.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-7xl">
          <div className="bg-white p-6 rounded-lg  w-full shadow-md md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.735247634073!2d106.6205873148001!3d10.755341992334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s399%20B%C3%ACnh%20L%E1%BB%A3i%2C%20Ph%C6%B0%E1%BB%9Dng%2013%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Thông tin liên hệ</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-bold mb-2 text-left"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  className=" w-full px-3 py-2 border rounded-lg bg-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4 flex md:flex-row gap-4 ">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-lg font-bold mb-2 text-left"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className=" w-full px-3 py-2 border rounded-lg bg-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="phone"
                    className="block text-lg font-bold mb-2 text-left"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="w-full px-3 py-2 border rounded-lg bg-white"
                    value={phone === 0 ? "" : phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPhone(value ? parseInt(e.target.value, 10) : 0);
                    }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-bold mb-2 text-left"
                >
                  Nội dung liên hệ
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded-lg bg-white"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {sendingMail ? (
                <div className="w-full bg-lime-300 text-xl text-black py-2 rounded-lg flex justify-center gap-4">
                  <AiOutlineLoading className="animate-spin h-auto w-auto " />
                  <p>Đang gửi mail</p>
                </div>
              ) : (
                <button
                  className="w-full bg-lime-300 text-xl text-black py-2 rounded-lg"
                  onClick={handleSendMail}
                >
                  Gửi tin nhắn
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
