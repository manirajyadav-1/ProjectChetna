import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs/About";
import Programs from "./components/Programs";
import Impact from "./components/Impact/Impact";
import GetInvolved from "./components/GetInvolved";
import Contact from "./components/Contact";
import OurTeam from "./components/OurTeam/OurTeam";
import OurPartners from "./components/OurPartners/OurPartners";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />}>
          <Route path="our-team" element={<OurTeam />} />
          <Route path="our-partners" element={<OurPartners/>} />
        </Route>
        <Route path="/programs" element={<Programs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
