import { useState } from "react";

import NavBar from "./components/section/NavBar";
import { MainSection } from "./components/section/MainSection";
import { Space } from "lucide-react";
import AboutSection from "./components/section/AboutSection";
import OtherSection from "./components/section/OtherSection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-gray-200">
      <NavBar />
      <div className="px-2 md:px-12 mt-10">
        {/* <MainSection /> */}
        <div className="md:w-2/3">
          {/* <AboutSection /> */}
          <OtherSection />
        </div>
      </div>
      <div className="sm:hidden">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
