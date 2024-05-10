import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login-Signup/Login";
import Signup from "./pages/Login-Signup/Signup";
import ProfileBlogs from "./pages/BlogDetails/ProfileBlogs";
import Profile from "./pages/Profile/Profile";
import UserBlogs from "./pages/BlogDetails/UserBlogs";
import AddBlog from "./pages/Blog/AddBlog";

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profileblogs' element={<ProfileBlogs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/userblogs' element={<UserBlogs/>}/>
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
