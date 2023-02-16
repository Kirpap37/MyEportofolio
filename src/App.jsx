import "./App.css";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AlienInvasion from "./pages/AlienInvasion";
import VirusAttack from "./pages/VirusAttack";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return(
     <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/AlienInvasion" element={<AlienInvasion />}/>
          <Route path="/projects/VirusAttack" element={<VirusAttack />}/>
          <Route path="/experience" element={<Experience />}/>
        </Routes>
        <Footer />
      </Router> 
     </div>
  );
  } 

 
export default App;

 