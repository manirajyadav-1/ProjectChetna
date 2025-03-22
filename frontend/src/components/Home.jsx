import Hero from "./Hero";
import AboutForHome from "./AboutUs/AboutForHome";
import OurDomains from "./OurDomains";
import TeamImpact from "./Impact/TeamImpact";
import OurImpact from "./Impact/OurImpact";
import OurPartners from "./OurPartners/OurPartners";
import OurTeam from "./OurTeam/OurTeam";
import { useEffect } from "react";
import Footer from "./Footer/Footer";
import Aos from "aos"
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" })
  }, [])
  return (
    <div className="bg-gray-100">
      <Hero />
      <AboutForHome />
      <OurDomains />
      <TeamImpact />
      <OurImpact />
      <OurTeam />
      <OurPartners />
      <Footer />
    </div>
  );
};

export default Home;
