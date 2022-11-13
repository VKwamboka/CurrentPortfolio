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

function App() {
  return(
    <div>
    <Router>
  <Navbar />
  <Home/>
  <About/>
</Router>
  </div>
  )
  
}

export default App;
