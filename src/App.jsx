import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./pages/landingPage/LandingPage";
import { AppProvider } from "./context/Appcontext";

const App = () => {
  return (
    <>
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </AppProvider>
      </Router>
    </>
  );
};

export default App;
