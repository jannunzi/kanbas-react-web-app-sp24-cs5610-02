import React from "react";
import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Labs2 from "./Labs/labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/hello";
import { HashRouter, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import NestedList from "./components/NestedList";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/list" element={<NestedList />} />
          <Route path="/" element={<Navigate to="/Labs/a3" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
