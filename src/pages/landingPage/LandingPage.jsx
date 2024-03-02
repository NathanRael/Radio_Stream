import Header from "./Header";
import Hero from "./Hero";
import Historique from "./Historique";
import Application from "./Application";
import Footer from "./Footer";
import Loader from "../../components/Loader";
import AppContext from "../../context/Appcontext";
import { useContext } from "react";
import RadioSection from "./RadioSection";
const LandingPage = () => {
  const { isLoading, isNavToggled } = useContext(AppContext);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header isForLanding={true}/>
          <section
            className={`transition-transform duration-500 ease-out ${
              isNavToggled ? "scale-[0.6]" : ""
            }`}
          >
            <Hero />
            <Historique />
            <RadioSection />
            <Application />
            <Footer />
          </section>
        </>
      )}
    </>
  );
};

export default LandingPage;
