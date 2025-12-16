import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar";
import Home from "./components/functionalComponents/Home";
import About from "./components/functionalComponents/About";
import LearningReact from "./components/functionalComponents/LearningReact";
import Contact from "./components/functionalComponents/Contact";
import Login from "./components/functionalComponents/Login"; 
import SignUp from "./components/functionalComponents/SignUp";
import Props from "./components/functionalComponents/Props";
import State from "./components/functionalComponents/State";
import UseState from "./components/functionalComponents/Hooks/UseState";
import UseEffect from "./components/functionalComponents/Hooks/UseEffect";
import UseEffectAPI from "./components/functionalComponents/Hooks/UseEffectAPI";
import FakeImgAPI from "./components/functionalComponents/Hooks/FakeImgAPI";
import UseRef from "./components/functionalComponents/Hooks/UseRef";
import UseMemo from "./components/functionalComponents/Hooks/UseMemo";
import UseCallback from "./components/functionalComponents/Hooks/UseCallback";
import { AuthProvider } from "./context/AuthContext";
import './css/App.css';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn-react" element={<LearningReact />}/>
          <Route path="/props" element={<Props />}/>
          <Route path="/state" element={<State />}/>
          <Route path="/use-state" element={<UseState />}/>
          <Route path="/use-effect" element={<UseEffect />}/>
          <Route path="/use-effect-api" element={<UseEffectAPI />}/>
          <Route path="/fake-img-api" element={<FakeImgAPI />}/>
          <Route path="/use-ref" element={<UseRef />}/>
          <Route path="/use-memo" element={<UseMemo />}/>
          <Route path="/use-callback" element={<UseCallback />}/>
          <Route path="/con" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;