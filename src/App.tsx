import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Team from "./pages/team/Team";
import Member from "./pages/team/Member";
import ContactInfo from "./pages/ContactInfo";
import Activities from "./pages/activities/Activities";
import Activity from "./pages/activities/Activity";

import Procedures from "./pages/procedures/Procedures";
import GeneralServices from "./pages/generalServices/GeneralServices";
import GeneralService from "./pages/generalServices/GeneralService";
import RetractBar from "./components/RetractBar";
import ContactBar from "./components/ContactBar";


function App() {
  return (
    <>
      <Banner />
      <hr />
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<Activity/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<Member />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/services" element={<GeneralServices/>} />
        <Route path="/services/:id" element={<GeneralService/>}/>
        <Route path="/contact" element={<ContactInfo />} />
      </Routes>
      <RetractBar/>
      <ContactBar/>
      <Footer />
    </>
  );
}

export default App;
