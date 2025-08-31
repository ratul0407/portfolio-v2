import MagneticButton from "./MagneticButton";
import "./navbar.css";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [active, setActive] = useState("home");
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.path);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="sticky top-0 flex justify-between text-white z-10 h-0 ">
      <div className="p-12 flex items-center justify-between min-w-full">
        <p>Ratul</p>
        <div className="block lg:hidden">
          <IoMenu />
        </div>
        <div className="hidden lg:block">
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
