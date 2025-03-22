import { useLocation } from "react-router-dom";
import bc_bground from "../../assets/bc_bground.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AboutProjectChetna from "./AboutProjectChetna";
import OurTeam from "../OurTeam/OurTeam";
import OurPartners from "../OurPartners/OurPartners";

const About = () => {
  const location = useLocation();
  const isAboutProjectChetna = location.pathname === "/about";
  const isOurTeam = location.pathname === "/about/our-team";
  const isOurPartners = location.pathname === "/about/our-partners";

  return (
    <div className="bg-gray-100">
      <div
        style={{
          backgroundImage: `url(${bc_bground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <Navbar />
        <h1 className="text-center text-white mt-20 text-5xl font-title font-medium">
          {isAboutProjectChetna && "About Us"}
          {isOurTeam && "Our Team"}
          {isOurPartners && "Our Partners"}
        </h1>
      </div>

      {isAboutProjectChetna && <AboutProjectChetna />}
      {isOurTeam && <OurTeam />}
      {isOurPartners && <OurPartners />}
      <Footer />
    </div>
  );
};

export default About;
