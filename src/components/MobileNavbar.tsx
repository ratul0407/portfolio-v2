/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "motion/react";
import { IoMenu } from "react-icons/io5";

interface IProps {
  isOpen: boolean;
  setIsOpen: any;
  navItems: any;
  active: string;
}
export const MobileNavbar = ({
  isOpen,
  setIsOpen,
  navItems,
  active,
}: IProps) => {
  return (
    <div className="block lg:hidden z-50">
      {/* Menu Button */}
      <button onClick={() => setIsOpen(true)} className="text-2xl">
        <IoMenu />
      </button>

      {/* Sidebar Animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full w-1/2 bg-black text-white flex flex-col p-6 z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl self-start mb-8"
              >
                ✕
              </button>

              {/* Nav Links */}
              <ul className="flex flex-col gap-6 text-lg">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a
                      href={`#${item.path}`}
                      className={`hover:text-gray-300 transition ${
                        active === item.path
                          ? "text-blue-400 font-semibold"
                          : ""
                      }`}
                      onClick={() => setIsOpen(false)} // close on click
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
