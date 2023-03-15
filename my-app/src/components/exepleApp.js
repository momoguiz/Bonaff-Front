
import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login.js";
import Register from "./components/Register";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
  
  
      {/* <Navbar /> */}
   <h1> Hello React</h1>
      {/* <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes> */}
    </>
  );
};

export default App;
