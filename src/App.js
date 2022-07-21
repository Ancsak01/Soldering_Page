import logo from "./logo.svg";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Services from "./components/Services";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
