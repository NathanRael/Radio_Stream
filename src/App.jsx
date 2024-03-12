import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { GloBalProvider } from "./context/GlobalContext.jsx";
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
import Loader from "./components/Loader.jsx";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage.jsx"));

const App = () => {
  return (
    <>
      <GloBalProvider>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Suspense
                fallback={
                  <div
                    className="
               transition duration-300 z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  >
                    <Loader />
                  </div>
                }
              >
                <LandingPage />
              </Suspense>
            }
          />

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
            <Route path="user/request/:id/edit/" element={<EditRequest />} />

            {/* admin route */}
            <Route element={<AdminLayout />}>
              <Route path="user/requestList" element={<RequestList />} />
              <Route path="user/postList" element={<PostList />} />
              <Route path="user/postList/:id/edit" element={<EditPost />} />
              <Route path="user/profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/forbidden" element={<Forbidden />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </GloBalProvider>
    </>
  );
};

export default App;
