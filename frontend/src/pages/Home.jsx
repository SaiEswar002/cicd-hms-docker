import * as React from "react";
// import Header from "./HOME/Header";
// import Navbar from "./HOME/Navbar";
import MainVisual from "./HOME/MainVisual";
import InfoSection from "./HOME/InfoSection";
import AboutSection from "./HOME/AboutSection";
import ServicesSection from "./HOME/ServicesSection";

import DoctorsSection from "./HOME/DoctorsSection";
/* import NewsSection from "./NewsSection"; */
import Footer from "./HOME/Footer";

function Home() {
  return (
    <>
      <div className="home">
        {/* <Header /> */}
        {/* <Navbar /> */}
        <MainVisual />
        <InfoSection />
        <AboutSection />
        <ServicesSection />
    
        <DoctorsSection />
        {/* <NewsSection /> */}
        <Footer />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--white,rgb(255, 250, 250));
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}

export default Home;
