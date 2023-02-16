import "./App.css";
import { Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AlienInvasion from "./pages/AlienInvasion";
import VirusAttack from "./pages/VirusAttack";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { HashRouter } from 'react-router-dom';

function App() {
  return(
     <div className="App">
      <HashRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/AlienInvasion" element={<AlienInvasion />}/>
          <Route path="/projects/VirusAttack" element={<VirusAttack />}/>
          <Route path="/experience" element={<Experience />}/>
        </Routes>
        <Footer />
      </HashRouter> 
     </div>
  );
  } 

 
export default App;

 