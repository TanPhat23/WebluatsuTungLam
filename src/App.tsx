import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Team from "./pages/Team";
import Member from "./pages/Member";
import ContactInfo from "./pages/ContactInfo";

function App() {
  return (
    <>
      <Banner />
      <hr />
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<Member />} />
        <Route path="/contact" element={<ContactInfo/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
