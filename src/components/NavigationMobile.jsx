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
  function handleSelect(selectedMenuButton) {
    setSelectedMenu(selectedMenuButton);
    console.log(selectedMenuButton);
  }
  if (isOpen === true) {
    return (
      <motion.nav className="fixed inset-0 m-auto bg-white overflow-auto">
        <motion.div>
          <motion.div className="w-full ">
            <motion.ul className="flex h-screen flex-col items-center justify-center gap-2 ">
              {ARRAY_PAGES.map((option) => (
                <motion.li className="text-2xl " key={option.label}>
                  <NavLink
                    to={option.href}
                    className={({ isActive }) => (isActive ? "" : undefined)}
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
