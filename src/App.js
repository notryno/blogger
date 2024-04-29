import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login-Signup/Login";
import Signup from "./pages/Login-Signup/Signup";

function App() {
  return (
    <div className="overflow-hidden">

      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;