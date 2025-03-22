import Logo from "../../assets/Logo.png";

const AboutProjectChetna = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="flex items-center">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="w-36 h-48 object-cover" />
        </div>

        {/* Text Section */}
        <div className="ml-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Project Chetna is a dynamic initiative committed to driving
            transformative, holistic development by empowering communities
            across diverse and essential areas. Through comprehensive sex
            education, we aim to foster informed and healthy relationships,
            while our menstrual hygiene programs break taboos and promote
            dignity. Our public speaking and disaster management training
            instill confidence and preparedness, equipping individuals with the
            skills to navigate challenges. Career counseling opens pathways to
            brighter futures, and our focus on financial and digital literacy
            builds the foundation for economic resilience in an increasingly
            digital world.
          </p>
        </div>
      </div>
      <p className="mt-4">
      Together, these initiatives create a lasting impact, shaping empowered, educated, and resilient communities prepared to thrive in every aspect of life. We further enrich community spaces and foster skills like discipline, teamwork, and resilience, ensuring a lasting, multi-faceted impact on individuals and the society as a whole.
      </p>
    </div>
  );
};

export default AboutProjectChetna;
