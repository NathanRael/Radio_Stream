import { ButtonLg, ButtonIcon, ButtonIconLg, Icon } from "./components/Buttons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </Router>
  );
};

export default App;
