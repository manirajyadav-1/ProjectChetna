import { useEffect } from "react";
import TeamImpactImg from "../../assets/team-impact.png";
import AOS from "aos";
import 'aos/dist/aos.css';

const TeamImpact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
        <div className="w-[100%] md:w-[50%]">
            <img src={TeamImpactImg} alt="Team Impact" style={{width: "800px", height: "500px"}}/>
        </div>
        <div className="h-[500px] md:w-[50%] font-title flex items-center justify-center" style={{backgroundColor: "#222222"}}>
            <div className="flex flex-col items-start text-left space-y-4 p-16">
                <h1 data-aos="zoom-in" className="text-[#D54400] text-lg font-medium">TEAM IMPACT</h1>
                <h1 data-aos="zoom-in" className="text-white font-medium text-5xl">Inculcating innovation throughout Nepal</h1>
                <h2 data-aos="zoom-in" className="text-white">Project Chetna helps students learn about social awareness and the importance of contributing to their communities. Through interactive programs, workshops, and real-world engagement, it educates students on societal issues, empowering them to become responsible and proactive citizens.</h2>
            </div>
        </div>
    </div>
  )
}

export default TeamImpact