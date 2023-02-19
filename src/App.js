import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import User from "./User";
import Page404 from "./Page404";
import "./App.css";
import Contact from "./Contact";
import Company from "./Company";
import Channel from "./Channel";
import Other from "./Other";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact/" element={<Contact />}>
            <Route path="Company" element={<Company />} />
            <Route path="Channel" element={<Channel />} />
            <Route path="Other" element={<Other />} />
          </Route>
          <Route path="/User/:name" element={<User />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
