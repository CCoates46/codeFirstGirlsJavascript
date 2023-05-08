import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './pages/AboutMe';
import Stories from './pages/Stories'
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <NavBar name="Coding like a mother"/>
      <div className="container">
      </div>
     
      <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Stories" element={<Stories />} />
          <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
    
  );
}

export default App;
