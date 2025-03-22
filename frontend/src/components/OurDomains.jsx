import schoolImg from "../assets/school-1.jpg";
import collegeImg from "../assets/college-1.jpg";
import vocationalImg from "../assets/vocational.jpg";
import communityImg from "../assets/community.jpg";

const OurDomains = () => {
  return (
  <div className="font-title min-h-[100vh] md:h-[660px] mb-20 bg-white" >
    <div className="flex items-center justify-center gap-[5px]">
      <h1 className="text-[40px] sm:text-[50px] font-medium" style={{ color: "#003B4A", lineHeight: 1 }}>Our</h1>
      <span 
        className="text-[40px] sm:text-[50px] font-semibold italic border-b-8 border-yellow-600 mt-[10px]" 
        style={{ color: "#003B4A", lineHeight: 1, paddingBottom: '0', marginBottom: '0' }}
      >
        Domains
      </span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-8">
      {/* Card 1 */}
      <div className="relative min-h-[500px] h-full bg-cover bg-center" style={{ backgroundImage: `url(${schoolImg})` }}>
        <h1 className="text-center text-white font-title font-medium text-4xl mt-[420px]">Schools</h1>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-white text-lg sm:text-xl font-semibold">Shaping Aware and Responsible Students!</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative min-h-[500px] h-full bg-cover bg-center" style={{ backgroundImage: `url(${collegeImg})` }}>
        <h1 className="text-center text-white font-title font-medium text-4xl mt-[420px]">Colleges</h1>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-white text-lg sm:text-xl font-semibold">Empowering Students for a Brighter Future!</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative min-h-[500px] h-full bg-cover bg-center" style={{ backgroundImage: `url(${vocationalImg})` }}>
        <h1 className="text-center text-white font-title font-medium text-4xl mt-[420px]">Vocationals</h1>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-white text-lg sm:text-xl font-semibold">Awareness for All, Skills for Life!</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative min-h-[500px] h-full bg-cover bg-center" style={{ backgroundImage: `url(${communityImg})` }}>
        <h1 className="text-center text-white font-title font-medium text-4xl mt-[420px]">Community</h1>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-white text-lg sm:text-xl font-semibold">Building Responsible Citizens & Skilled Professionals!</p>
        </div>
      </div>
    </div>
  </div>

  );
};

export default OurDomains;
