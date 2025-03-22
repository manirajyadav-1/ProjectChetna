import { useLocation } from "react-router-dom";
import Marquee from "../Marquee/Marquee";
import { upperMarquee, lowerMarquee } from "../Marquee/Marquee";

const OurPartners = () => {
  const allPartners = upperMarquee.concat(lowerMarquee);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    isHome ? (
      <div className="mt-20">
        <div className="flex items-center justify-center gap-[5px]">
          <h1 className="text-[40px] sm:text-[50px] font-medium" style={{ color: "#003B4A", lineHeight: 1 }}>Our</h1>
          <span 
            className="text-[40px] sm:text-[50px] font-semibold italic border-b-8 border-yellow-600 mt-[10px]" 
            style={{ color: "#003B4A", lineHeight: 1, paddingBottom: '0', marginBottom: '0' }}
          >
            Partners
          </span>
        </div>
        <Marquee />
      </div>
    ) : (
      <div className="flex flex-wrap justify-center items-center gap-16 p-6">
        {allPartners.map((image, index) => (
          <img 
            className="h-28 w-52 object-contain mix-blend-multiply" 
            src={image} 
            alt={`Partner ${index}`} 
            key={index}
          />
        ))}
      </div>
    )
  );
}

export default OurPartners;
