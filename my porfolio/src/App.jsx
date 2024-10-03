import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contect from "./pages/Contect";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Contact" element={<Contect />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
