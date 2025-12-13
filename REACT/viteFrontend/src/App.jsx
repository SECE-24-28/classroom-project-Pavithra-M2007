import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar";
import Home from "./components/functionalComponents/Home";
import About from "./components/functionalComponents/About";
import LearningReact from "./components/functionalComponents/LearningReact";
import Contact from "./components/functionalComponents/Contact";
import Login from "./components/functionalComponents/Login"; 
import SignUp from "./components/functionalComponents/SignUp";
import './css/App.css';

function App() {

  return (
    <header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn-react" element={<LearningReact />}/>
          <Route path="/con" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </header>
  );
}
export default App;