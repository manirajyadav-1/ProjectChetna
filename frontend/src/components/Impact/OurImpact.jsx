import CountUp from './CountUp'

const OurImpact = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center gap-[5px]">
          <h1 className="text-[40px] sm:text-[50px] font-medium" style={{ color: "#003B4A", lineHeight: 1 }}>Our</h1>
          <span 
            className="text-[40px] sm:text-[50px] font-semibold italic border-b-8 border-yellow-600 mt-[10px]" 
            style={{ color: "#003B4A", lineHeight: 1, paddingBottom: '0', marginBottom: '0' }}
          >
            Impact
          </span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-10">
        <div className="flex flex-col items-center md:border-r-2 border-dotted pr-5 md:pr-20">
          <i aria-hidden="true" className="fas fa-location-arrow mb-3" style={{ color: "#A94E28", fontSize: "80px" }}></i>
          <div className="text-center font-title">
            <span className="block text-4xl text-[#A94E28] font-medium"><CountUp
                from={0}
                to={7}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />+</span>
            <h1 className="text-2xl text-[#A94E28] font-sans">Villages</h1>
            <p>Rural-Nepal Coverage</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:border-r-2 border-dotted pr-5 md:pr-20">
          <i aria-hidden="true" className="fas fa-school mb-3" style={{ color: "#A1A3F9", fontSize: "80px" }}></i>
          <div className="text-center">
            <span className="block text-4xl text-[#A1A3F9] font-medium">
              <CountUp
                  from={0}
                  to={10}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+
            </span>
            <h1 className="text-2xl text-[#A1A3F9] font-sans">Schools</h1>
            <p>Educational Outreach</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:border-r-2 border-dotted pr-5 md:pr-20">
          <i aria-hidden="true" className="fas fa-people-arrows mb-3" style={{ color: "#7851AD", fontSize: "80px" }}></i>
          <div className="text-center">
            <span className="block text-4xl text-[#7851AD] font-medium">
              <CountUp
                  from={0}
                  to={20}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
            </span>
            <h1 className="text-2xl text-[#7851AD] font-sans">Communities</h1>
            <p>Collaboration Projects</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <i aria-hidden="true" className="fas fa-network-wired mb-3" style={{ color: "#ED6B6B", fontSize: "80px" }}></i>
          <div className="text-center">
            <span className="block text-4xl text-[#ED6B6B] font-medium">
              <CountUp
                  from={0}
                  to={15}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
            </span>
            <h1 className="text-2xl text-[#ED6B6B] font-sans">Networks</h1>
            <p>Technology Integration</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurImpact