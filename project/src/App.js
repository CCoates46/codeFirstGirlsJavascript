
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div>
      <NavBar name="Clare Coates"/>
      <div className="container">
      </div>
      <Hero />
      <Intro />
    </div>
    
  );
}

export default App;
