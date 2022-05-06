import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Babysisterdetail from "./Babysisterdetail.js";
import Home from "./Components/Home";

import Efecto from "./Components/Efecto";
import Section from "./Section.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">                
        <Home />
        <Section />
      </div>
      <Routes>
        <Route path="/babysisterdetail/:id" element={<Babysisterdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
