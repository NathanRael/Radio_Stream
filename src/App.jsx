import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/landingPage/Header";
import Hero from "./pages/landingPage/Hero";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

const LandingPage = () => {
  return (
    <html>
      <Header />
      <Hero/>
    </html>
  );
};
