import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Components/Profile";
import Home from "./Home";
import Login from "./Login";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
