import { useEffect } from "react";
import aboutBg from "../../assets/about_bg.jpg";
import groupBg from "../..//assets/group.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';

const AboutForHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 text-white md:my-10 px-5 font-title">
      {/* Left Section */}
      <div data-aos="zoom-in"
        className="h-[600px] w-[415px] md:w-[900px] flex items-start justify-center p-6 md:p-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div data-aos="zoom-in" className="text-center md:text-left">
          <p data-aos="zoom-in"  className="text-md font-light mb-4">ABOUT US</p>
          <div className="flex flex-col md:w-[600px]">
            <h1 data-aos="zoom-in"  className="text-3xl md:text-5xl font-medium inline-block">
              Transforming Lives Through Knowledge, Courage, and Action for
            </h1>
            <span className="text-4xl md:text-5xl font-extrabold italic border-b-8 border-yellow-600">
              Nepal&apos;s Progress and Success.
            </span>
          </div>
          <p data-aos="zoom-in"  className="mt-10 font-sans text-xl font-thin">
            Empowering the community through comprehensive sex education,
            menstrual hygiene, public speaking, disaster management, career
            counselling, as well as financial and digital literacy, library
            renovation, and sports training—Project Chetna is dedicated to
            holistic development and impactful change.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        data-aos="zoom-in"
        className="h-[600px] w-[415px] md:w-[400px] flex-col items-center justify-end p-6 md:mb-3"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${groupBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p data-aos="zoom-in" className="text-lg md:text-sm font-sans text-start mt-[230px] mb-3 md:mt-[330px]">
          At Project Chetna, we not only work directly with communities but also
          focus on empowering students and trainers who have a long-term impact
          on learners.
        </p>
        <p data-aos="zoom-in" className="text-lg md:text-sm font-sans text-start">
          Together, we are building educational network dedicated to holistic
          development and national progress, addressing critical areas like
          comprehensive sex education, menstrual hygiene, public speaking,
          disaster management, career counseling, financial and digital
          literacy, and more.
        </p>
      </div>
    </div>
  );
};

export default AboutForHome;
