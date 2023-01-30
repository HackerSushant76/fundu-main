import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
