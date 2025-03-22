import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import OurImpact from "../Impact/OurImpact"
import bc_bground from "../../assets/bc_bground.png";
import impactImage from "../../assets/community.jpg";

const Impact = () => {

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
        <h1 className="text-center text-white mt-20 text-5xl font-title font-medium">Impact</h1>
      </div>

      <div className="max-w-6xl mx-auto py-0 px-6">
          <OurImpact />
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row items-center gap-8">
        <img
          src={impactImage}
          alt="Impact"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="md:w-1/2 text-gray-700">
          <p>
            Project Chetna has been dedicated to organizing awareness programs in rural areas, schools, and
            colleges. Our mission is to empower communities through knowledge and resources.
          </p>
          <p className="mt-4">
            With the help of dedicated volunteers and educators, we have impacted thousands of lives by addressing
            crucial topics such as health awareness, digital literacy, and environmental conservation.
          </p>
          <p className="mt-4">
            Join us in making a difference! Whether you're a volunteer, donor, or organization, your support can
            create lasting change.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impact;
