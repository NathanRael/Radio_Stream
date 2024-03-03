import Header from "./Header";
import Hero from "./Hero";
import Historique from "./Historique";
import Application from "./Application";
import Footer from "./Footer";
import Loader from "../../components/Loader";
import AppContext from "../../context/Appcontext";
import { useContext, useEffect } from "react";
import RadioSection from "./RadioSection";
const LandingPage = () => {
  const { isLoading, isNavToggled } = useContext(AppContext);

  return (
    <>
      <>
        <div
          className={`${
            !isLoading && "opacity-0 -translate-x-[200rem]"
          } transition duration-300 z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
        >
          <Loader />
        </div>
        <Header isForLanding={true} />
        <section
          className={`transition-transform 
             duration-500 ease-out ${isNavToggled ? "scale-[0.6]" : ""} ${
            isLoading && "-translate-y-[4rem] opacity-0"
          }`}
        >
          <Hero />
          <Historique />
          <RadioSection />
          <Application />
          <Footer />
        </section>
      </>
    </>
  );
};

export default LandingPage;
