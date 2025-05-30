import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/homestyle.css";
import "../assets/css/footerstyle.css";

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PopularCoursesSection from "../components/PopularCoursesSection";
import RegistrationSection from "../components/RegistrationSection";

function Home({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* PHẦN CHÍNH CÓ KHẢ NĂNG SCROLL */}
      <main style={{ paddingTop: "0px" }}>
        <HeroSection />
        <FeaturesSection />
        <PopularCoursesSection />
        <RegistrationSection authToken={authToken} />
      </main>

      <Footer />
    </>
  );
}

export default Home;
