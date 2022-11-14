import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return(
    <div>
    <Router>
  <Navbar />
  <Home/>
  <About/>
  <Skills/>
  <Work/>
</Router>
  </div>
  )
  
}

export default App;
