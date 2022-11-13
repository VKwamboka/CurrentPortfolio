import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return(
    <div>
    <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Router>
  </div>
  )
  
}

export default App;
