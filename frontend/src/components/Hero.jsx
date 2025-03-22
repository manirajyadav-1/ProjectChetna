import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import bgImage from "../assets/homepage-img.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${bgImage})`,
        opacity: 1,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        animation: "zoomEffect 20s ease-in forwardsw",
      }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20 gap-1 font-title">
        <h1 className="text-white text-5xl md:text-6xl sm:text-4xl font-medium text-center">
          Building a Future
        </h1>
        <h1 className="text-white text-5xl md:text-6xl sm:text-4xl font-medium text-center">
          Where
        </h1>
        <h1 className="text-white text-5xl md:text-6xl sm:text-4xl font-medium text-center">
          Capability Meets Prosperity.
        </h1>

        <div className="text-white text-xl md:text-xl sm:text-lg m-10 text-center font-mono">
          <h1>
            Health Education | Livelihood Enhancement | Career Counselling
          </h1>
        </div>

        <div
          className="text-white mt-12 font-thin border px-6 py-3 cursor-pointer hover:bg-[#D54400] transition duration-300 ease-in hover:border-none"
          onClick={() => navigate("/getinvolved")}
        >
          <button>GET INVOLVED</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
