import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ujjwalPic from "../../assets/ujjwal.png";
import shruPic from "../../assets/shru.png";
import shubhamPic from "../../assets/shubham.png";
import luckyPic from "../../assets/lucky.png";
import ichhuPic from "../../assets/ichhu.png";
import { useLocation } from "react-router-dom";

const OurTeam = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    slidesToShow: 2,
    speed: 400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return isHome ? (
    <div>
      <div className="mt-20 bg-white">
        <div className="flex items-center justify-center gap-[5px]">
          <h1
            className="text-[40px] sm:text-[50px] font-medium"
            style={{ color: "#003B4A", lineHeight: 1 }}
          >
            Our
          </h1>
          <span
            className="text-[40px] sm:text-[50px] font-semibold italic border-b-8 border-yellow-600 mt-[10px]"
            style={{
              color: "#003B4A",
              lineHeight: 1,
              paddingBottom: "0",
              marginBottom: "0",
            }}
          >
            Team
          </span>
        </div>

        {/* Slider */}
        <div className="w-[80%] m-auto bg-white">
          <div className="mt-10">
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div key={index} className="relative text-black">
                  <div className="flex justify-center items-center">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-[400px] w-[400px] object-cover rounded-lg zoom"
                    />
                    <p className="absolute w-[400px] bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black text-xl font-semibold p-2 text-center">
                      {member.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-8">
        <p className="text-lg font-medium text-gray-600">
          With members spread across program geographies, roles, and capacities
          - Project Chetna is definitely a team that is growing as well as
          dynamic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative text-black">
            <div className="flex justify-center items-center">
              <img
                src={member.img}
                alt={member.name}
                className="h-[400px] w-[350px] object-cover rounded-t-lg zoom"
              />
              <p className="absolute w-[350px] bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-300 text-black text-xl font-semibold p-2 text-center rounded-t-lg">
                {member.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Ujjwal Soni",
    img: ujjwalPic,
  },
  {
    name: "Shru G",
    img: shruPic,
  },
  {
    name: "Shubham",
    img: shubhamPic,
  },
  {
    name: "Lucky Agarwal",
    img: luckyPic,
  },
  {
    name: "Ichhu",
    img: ichhuPic,
  },
];

export default OurTeam;
