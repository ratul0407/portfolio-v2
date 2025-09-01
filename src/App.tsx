import { useEffect, useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollIndicator from "./components/ScrollIndicator";
import Skills from "./components/Skills";
import { AnimatePresence } from "motion/react";
import Preloader from "./components/preloader/PreLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      <ScrollIndicator />
      <Navbar />
      <div className="min-h-screen w-full bg-black relative">
        {/* Vercel Grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
          radial-gradient(circle at 50% 50%, 
            rgba(58, 123, 255, 0.25) 0%, 
            rgba(100, 149, 237, 0.15) 25%, 
            rgba(123, 104, 238, 0.07) 35%, 
            transparent 50%
          )
        `,
          }}
        />
        {/* Your Content/Components */}
        <div className="relative min-h-screen flex flex-col text-white font-poppins">
          <Hero />
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
