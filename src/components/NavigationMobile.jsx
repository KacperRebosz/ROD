import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  color,
  animate,
  stagger,
} from "framer-motion";
import { NavLink, Link } from "react-router-dom";

const ARRAY_PAGES = [
  {
    label: "Strona główna",
    href: "/",
  },
  {
    label: "Opłaty",
    href: "/Expenses#oplaty",
  },
  {
    label: "Aktualności",
    href: "/AboutUs#ogloszenia",
  },
  {
    label: "Galeria",
    href: "/Gallery#galeria",
  },
  {
    label: "Przepisy prawne",
    href: "/Regulations#przepisy_prawne",
  },
  {
    label: "Dokumenty",
    href: "/Documents#dokumenty",
  },
  {
    label: "Wynajem sali",
    href: "/Renting#wynajem",
  },
  {
    label: "Kontakt",
    href: "/Contact#kontakt",
  },
];

export default function NavigationMobile({ isOpen }) {
  // const li_item = {
  //   open: {
  //     transition: {
  //       staggerChildren: 0.3,
  //     },
  //   },
  //   closed: {
  //     transition: {
  //       staggerChildren: 0.15,
  //       staggerDirection: -1,
  //     },
  //   },
  // };
  // const sidebar = {
  //   open: {
  //     transition: {
  //       type: "spring",
  //       stiffness: 20,
  //     },
  //   },
  //   closed: {
  //     transition: {
  //       delay: 0.4,
  //       type: "spring",
  //       stiffness: 400,
  //       damping: 40,
  //     },
  //   },
  // };
  // const itemVariants = {
  //   open: {
  //     y: 0,
  //     opacity: 1,
  //   },
  //   closed: {
  //     y: 50,
  //     opacity: 0,
  //   },
  // };

  function handleSelect(selectedMenuButton) {
    setSelectedMenu(selectedMenuButton);
    console.log(selectedMenuButton);
  }
  if (isOpen === true) {
    return (
      <motion.nav
        className="fixed inset-0 m-auto bg-white overflow-auto"
        // initial="hidden"
        // animate="visible"
        // variants={sidebar}
        // onClick={(This)=>this.}
      >
        <motion.div>
          <motion.div className="w-full ">
            <motion.ul
              // initial="hidden"
              // animate="visible"
              // variants={list_item}
              // transition={{ duration: 0.5 }}
              className="flex h-screen flex-col items-center justify-center gap-2 "
            >
              {ARRAY_PAGES.map((option) => (
                <motion.li
                  // initial="hidden"
                  // animate="visible"
                  // variants={li_item}
                  // transition={{ duration: 0.5 }}
                  className="text-2xl "
                  key={option.label}
                >
                  <NavLink
                    to={option.href}
                    className={({ isActive }) => (isActive ? "" : undefined)}
                    // variants={itemVariants}
                    onClick={() => {
                      handleSelect(option.label);
                    }}
                  >
                    {option.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.nav>
    );
  }
}
