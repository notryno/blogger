import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login-Signup/Login";
import Signup from "./pages/Login-Signup/Signup";
import Profile from "./pages/Profile/Profile";
import UserBlogs from "./pages/BlogDetails/UserBlogs";
import AddBlog from "./pages/Blog/AddBlog";
import EditProfile from "./pages/Profile/EditProfile";
import ResetPassword from "./pages/Login-Signup/ResetPassword";
import Chat from "./components/Chat";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import UserProfile from "./pages/UserProfile/UserProfile";
function App() {

  const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AuthContext);
    

    if (!token) {
      return <Navigate to="/" />;
    }

    return children;

  };
  
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<UserBlogs />} />

          <Route path="/add-blog" element={<ProtectedRoute><AddBlog /></ProtectedRoute>} />
          <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path='/user/:id' element={<UserProfile/>}/>
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* <Route path="/chat" element={<Chat />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
