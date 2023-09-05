
import './App.css';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navs/Navbar';
import AboutMe from './Components/About/AboutMe'

function App() {
  return (
    <div id="app">
      <Navbar />
      <div id="wholeLanding">
        <Landing />
        <AboutMe/>


      </div>




    </div>
  );
}

export default App;
