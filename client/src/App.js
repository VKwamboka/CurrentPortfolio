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
import Contact from "./components/Contact";
import Cv from "./components/Cv";

function App() {
  return(
    <div>
  
  <Navbar />
  <Home/>
  <About/>
  <Skills/>
  <Work/>
  <Contact/>
<div>
  <Router>
<Routes>
    <Route exact path='/cv' element={< Cv />}></Route>
</Routes>
</Router>
</div>
  </div>
  )
  
}

export default App;
