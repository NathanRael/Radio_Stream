import Header from "./Header";
// import Hero from "./Hero";
import Historique from "./Historique";
import Application from "./Application";
import Footer from "./Footer";
import { Suspense, lazy, useEffect } from "react";
import RadioSection from "./RadioSection";
import useIntersection from "../../hook/UseIntersection";
import { useLocation } from "react-router-dom";
import useAppContext from "../../hook/useAppContext";
const Hero = lazy(() => import("./Hero"));

const LandingPage = () => {
  const { isLoading, isNavToggled } = useAppContext();
  const [heroRef, isHeroVisible] = useIntersection(
    {
      root: null,
      rootMargin: "120px",
      threshold: 1.0,
    },
    true
  );

  useEffect(() => {
    if (isHeroVisible) {
      document.body.classList = "bg-primary body-trans";
    } else {
      document.body.classList = "bg-white dark:bg-black body-trans";
    }
  }, [isHeroVisible]);
  return (
    <>
      <Header isHeroVisible={isHeroVisible} isForLanding={true} />
      <section
        className={`transition-transform 
             duration-500 ease-out ${isNavToggled ? "scale-[0.6]" : ""} ${
          isLoading && "-translate-y-[4rem] opacity-0"
        }`}
      >
        <div className="" ref={heroRef}>
          <Suspense fallback={<p>Loading ...</p>}>
            <Hero isHeroVisible={isHeroVisible} />
          </Suspense>
        </div>
        <Historique />
        <RadioSection />
        <Application />
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
