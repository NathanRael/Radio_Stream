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
  const { isLoading, isNavToggled } = useContext(AppContext);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <section
            className={`transition-transform duration-500 ease-out ${
              isNavToggled ? "scale-[0.6]" : ""
            }`}
          >
            <Hero />
            <Historique />
            <Radio />
            <Application />
            <Footer />
          </section>
        </>
      )}
    </>
  );
};

export default LandingPage;
