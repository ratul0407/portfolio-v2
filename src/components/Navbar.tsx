import MagneticButton from "./MagneticButton";
import { MobileNavbar } from "./MobileNavbar";
import "./navbar.css";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    path: "home",
  },
  {
    label: "About",
    path: "about",
  },
  {
    label: "Skills",
    path: "skills",
  },
  {
    label: "Projects",
    path: "projects",
  },
  {
    label: "Contact",
    path: "contact",
  },
];
const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.path);
      if (el) observer.observe(el);
    });

    // 👇 manual fix for top of page
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log(window.scrollY, window.innerHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky  top-0 flex justify-between text-white z-50 h-0 ">
      <div className="p-12 flex items-center justify-between min-w-full ">
        <p>Ratul</p>
        {/* mobile nav */}
        <MobileNavbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navItems={navItems}
          active={active}
        />

        <div className="hidden lg:block z-50 ">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <MagneticButton>
                <li className="li">
                  <a
                    href={`#${item.path}`}
                    className={active === item.path ? "active" : ""}
                  >
                    {item.label}
                  </a>
                </li>
              </MagneticButton>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
