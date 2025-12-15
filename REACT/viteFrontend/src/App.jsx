import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar";
import Home from "./components/functionalComponents/Home";
import About from "./components/functionalComponents/About";
import Contact from "./components/functionalComponents/Contact";
import Login from "./components/functionalComponents/Login";
import SignUp from "./components/functionalComponents/SignUp";

/* Hooks Pages */
import UseStatePage from "./components/functionalComponents/Hooks/UseState";
import UseEffectPage from "./components/functionalComponents/Hooks/UseEffect";
import UseMemoPage from "./components/functionalComponents/Hooks/UseMemo";
import UseRefPage from "./components/functionalComponents/Hooks/UseRef";
import UseCallbackPage from "./components/functionalComponents/Hooks/UseCallback";

import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/con" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Learning React Hooks Routes */}
          <Route path="/use-state" element={<UseStatePage />} />
          <Route path="/use-effect" element={<UseEffectPage />} />
          <Route path="/use-memo" element={<UseMemoPage />} />
          <Route path="/use-ref" element={<UseRefPage />} />
          <Route path="/use-callback" element={<UseCallbackPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
