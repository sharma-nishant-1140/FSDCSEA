import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Registration from "./components/registration";
import Home from "./components/home";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
