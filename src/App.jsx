import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Create from "./components/Create.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Read from "./components/Read.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Create></Create>}></Route>
          <Route exact path="/read" element={<Read></Read>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
