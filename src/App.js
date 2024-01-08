import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Certificates/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
