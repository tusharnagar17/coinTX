import { useEffect, useState } from "react";

import NavBar from "./components/section/NavBar";
import { MainSection } from "./components/section/MainSection";
import AboutSection from "./components/section/AboutSection";
import OtherSection from "./components/section/OtherSection";
import Sidebar from "./components/Sidebar";
import TokenomicsSection from "./components/section/Tokenomics";
import SentimentSection from "./components/section/SentimentSection";

function App() {
  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-950">
        <NavBar />
        <div className="px-2 md:px-12 mt-10">
          <MainSection />
          <div className="md:w-2/3">
            <SentimentSection />
            <AboutSection />
            <TokenomicsSection />
            <OtherSection />
          </div>
        </div>
        <div className="sm:hidden">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
