import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import LandingPage from "./pages/landingPage/LandingPage";
import { AppProvider } from "./context/Appcontext";
import AppContext from "./context/Appcontext";
import SignUp from "./pages/_auth/from/SignUp";
import SignUp2 from "./pages/_auth/from/SignUp2";
import Login from "./pages/_auth/from/Login";
import Home from "./pages/app/Home";
import Radio from "./pages/app/Radio";
import SavedPost from "./pages/app/SavedPost";
import Request from "./pages/app/Request";
import RequestList from "./pages/app/RequestList";
import PostList from "./pages/app/PostList";
import EditPost from "./pages/app/EditPost";
import Profile from "./pages/app/Profile";
import AppLayout from "./pages/app/AppLayout";
import AuthLayout from "./pages/_auth/AuthLayout";
import EditRequest from "./pages/app/EditRequest";
import AdminLayout from "./pages/app/AdminLayout";
import NotFound from "./pages/_auth/NotFound";
import Unauthorized from "./pages/_auth/Unauthorized";
import Forbidden from "./pages/_auth/Forbidden";

const App = () => {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route index path="/" element={<LandingPage />} />

          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup-2" element={<SignUp2 />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<AppLayout />}>
            {/* Public route */}
            <Route path="user/home" element={<Home />} />
            <Route path="user/radio" element={<Radio />} />
            <Route path="user/savedPost" element={<SavedPost />} />
            <Route path="user/request" element={<Request />} />
            <Route path="user/request/edit" element={<EditRequest />} />

            {/* admin route */}
            <Route element={<AdminLayout />}>
              <Route path="user/requestList" element={<RequestList />} />
              <Route path="user/postList" element={<PostList />} />
              <Route path="user/postList/edit" element={<EditPost />} />
              <Route path="user/profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/forbidden" element={<Forbidden />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </AppProvider>
    </>
  );
};

export default App;
