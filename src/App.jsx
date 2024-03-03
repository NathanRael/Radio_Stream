import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import LandingPage from "./pages/landingPage/LandingPage";
import { AppProvider } from "./context/Appcontext";
import AppContext from "./context/Appcontext";
import SignUp from "./pages/app/SignUp";
import SignUp2 from "./pages/app/SignUp2";
import Login from "./pages/app/Login";
import Home from "./pages/app/Home";
import Feed from "./pages/app/Feed";
import Radio from "./pages/app/Radio";
import SavedPost from "./pages/app/SavedPost";
import Request from "./pages/app/Request";
import RequestList from "./pages/app/RequestList";
import PostList from "./pages/app/PostList";
import PorfilePopup from "./components/PorfilePopup";
import Profile from "./pages/app/Profile";

const App = () => {
  return (
    <>
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup-2" element={<SignUp2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/*" element={<UserRoute />} />
          </Routes>
        </AppProvider>
      </Router>
    </>
  );
};

export default App;

const UserRoute = () => {
  return (
    <Feed>
      <Routes>
        <Route  path="/home" element={<Home />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/savedPost" element={<SavedPost />} />
        <Route path="/request" element={<Request />} />
        <Route path="/requestList" element={<RequestList />} />
        <Route path="/postList" element={<PostList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Feed>
  );
};
