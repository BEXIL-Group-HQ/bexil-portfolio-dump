import React from "react";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from "./components/Nav";
import Footer from "./Footer";
// import Contact from "./components/Contact";
import About from "./components/About";
import GetQuote from "./GetQuote";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/getquote" element={<GetQuote />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
