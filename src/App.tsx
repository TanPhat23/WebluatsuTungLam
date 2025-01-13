import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-screen justify-center">
        <div className="flex justify-center h-[200px] bg-[#B1BC55] gap-4">
          <img
            src={"../public/logo.png"}
            alt="Logo"
            className="pointer-events-none object-contain h-auto w-auto"
          />
          <div className="flex-col items-center mt-5">
            <h2 className="text-3xl">ĐOÀN LUẬT SƯ THÀNH PHỐ HỒ CHÍ MINH</h2>
            <p className="text-3xl font-bold text-center">
              VĂN PHÒNG LUẬT SƯ TÙNG LÂM
            </p>
          </div>
        </div>
        <hr />
        <NavBar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
