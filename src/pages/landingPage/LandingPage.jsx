import Header from "./Header";
import Hero from "./Hero";
import Historique from "./Historique";
import Radio from "./Radio";
import Application from "./Application";
import Footer from "./Footer";
import Loader from "../../components/Loader";
import AppContext from "../../context/Appcontext";
import { useContext } from "react";
const LandingPage = () => {
  const { isLoading } = useContext(AppContext);
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
            <Header />
            <Hero />
            <Historique />
            <Radio />
            <Application />
            <Footer />
        </>
      )}
    </>
  );
};

export default LandingPage;
