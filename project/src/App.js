
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import SocialFollow from './components/Footer/SocialFollow';
import ScrollToTop from './components/ScrollUp/ScrollToTop';

function App() {
  return (
    <div>
      <NavBar name="Coding like a mother"/>
      <div className="container">
      </div>
      <Hero />
      <Intro />
      <SocialFollow />
      <ScrollToTop />
    </div>
    
  );
}

export default App;
