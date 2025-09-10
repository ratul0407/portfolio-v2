import { useEffect, useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollIndicator from "./components/ScrollIndicator";
import Skills from "./components/Skills";
import { AnimatePresence } from "motion/react";
import Preloader from "./components/preloader/PreLoader";
import Footer from "./components/Footer";
import BlogsComponent from "./components/BlogsComponent";

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
            backgroundImage: `radial-gradient(circle 500px at 50% ${
              window.innerHeight / 2 - 50
            }px, rgba(16,185,129,0.35), transparent)`,
          }}
        />
        {/* Your Content/Components */}
        <div className="relative min-h-screen flex flex-col text-white font-poppins">
          {!isLoading && <Hero />}
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <BlogsComponent />
      <Footer />
    </div>
  );
}

export default App;
