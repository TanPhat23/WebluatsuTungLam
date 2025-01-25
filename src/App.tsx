import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Team from "./pages/team/Team";
import Member from "./pages/team/Member";
import ContactInfo from "./pages/ContactInfo";
import Activities from "./pages/activities/Activities";
import Activity from "./pages/activities/Activity";
import Law from "./pages/laws/Law";
import Laws from "./pages/laws/Laws";

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
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<Activity/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<Member />} />
        <Route path="/laws" element={<Laws />} />
        <Route path="/laws/:id" element={<Law />} />
        <Route path="/contact" element={<ContactInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
