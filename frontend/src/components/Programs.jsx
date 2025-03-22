import Navbar from "./Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import bc_bground from "../assets/bc_bground.png";
import image1 from "../assets/college-1.jpg";
import healthAwareness from "../assets/health-awareness.png";
import menstrualHygiene from "../assets/menstrual-hygiene.png";
import publicSpeaking from "../assets/public-speaking.png";
import libraryRenovation from "../assets/library-renovation.png";
import sports from "../assets/sports.png";

const programs = [
  {
    id: 1,
    title: "Comprehensive Sex Education",
    highlightedText: "Health & Awareness",
    description: [
      "Educating students and communities about reproductive health, consent, and safe practices to promote informed decision-making.",
      "Workshops and discussions help break taboos and encourage open conversations about sexual health.",
    ],
    image: healthAwareness,
  },
  {
    id: 2,
    title: "Menstrual Hygiene Awareness",
    highlightedText: "Health & Hygiene",
    description: [
      "Providing essential knowledge on menstrual health, breaking stigma, and ensuring access to hygiene products.",
      "Sessions include interactive discussions, distribution drives, and advocacy for better menstrual hygiene management.",
    ],
    image: menstrualHygiene,
  },
  {
    id: 3,
    title: "Public Speaking & Leadership",
    highlightedText: "Skill Development",
    description: [
      "Training students and young professionals to build confidence, articulate thoughts effectively, and lead with impact.",
      "Workshops include debate sessions, speech training, and leadership exercises to foster communication skills.",
    ],
    image: publicSpeaking,
  },
  {
    id: 4,
    title: "Library ",
    highlightedText: "Renovation & Infrastructure",
    description: [
      "Transforming underutilized libraries into vibrant learning spaces equipped with diverse resources.",
      "Encouraging a reading culture through book drives, storytelling sessions, and literacy programs.",
    ],
    image: libraryRenovation,
  },
  {
    id: 5,
    title: "Sports Training & Well-being",
    highlightedText: "Physical & Mental Health",
    description: [
      "Promoting physical fitness and teamwork through structured sports training and tournaments.",
      "Encouraging students to develop discipline, leadership, and resilience through sports engagement.",
    ],
    image: sports,
  },
];

const Programs = () => {
  return (
    <>
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
            Our Programs
          </h1>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-6">
          {programs.map((program) => (
            <div key={program.id} className="py-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {program.id}. {program.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="italic relative">
                  {program.highlightedText}
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400"></span>
                </span>
              </h1>

              <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-[50vh] md:w-3/4 rounded-lg shadow-lg object-cover"
                />
                <div className="md:w-1/2 text-gray-900">
                  {program.description.map((paragraph, index) => (
                    <p key={index} className="text-lg mt-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
