

import './App.css';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navs/Navbar';
import AboutMe from './Components/About/AboutMe'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import ContactMe from './Components/Contact/ContactMe';

function App() {
  return (
    <div id="app">
      <Navbar />
      <div id="wholeLanding">
        
        <Landing />
        <AboutMe/>
        <Projects/>
        <Skills/>
        <ContactMe/>


      </div>




    </div>
  );
}

export default App;
