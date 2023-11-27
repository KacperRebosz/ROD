import { useState } from "react";
import MenuButton from "./MenuButton.jsx";
import { MENU_CONTENT } from "../data/menus.js";
// import DocumentPage from "../pages/Documents.jsx";
import { NavLink, Link } from "react-router-dom";
import classes from "./Menu.module.css";
import AnimatedPage from "./AnimatedPage.jsx";
import { motion } from "framer-motion";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const klasy = `
  relative after:absolute after:w-[0%] after:content-["."] after:text-transparent after:h-px after:m-auto after:bottom-0 after:inset-x-0 hover:after:w-full `;

const ARRAY_PAGES = [
  {
    label: "Strona główna",
    href: "/",
  },
  {
    label: "Opłaty",
    href: "/Expenses",
  },
  {
    label: "Aktualności",
    href: "/AboutUs",
  },
  {
    label: "Galeria",
    href: "/Gallery",
  },
  {
    label: "Przepisy prawne",
    href: "/Regulations",
  },
  {
    label: "Dokumenty",
    href: "/Documents",
  },
  {
    label: "Wynajem sali",
    href: "/Renting",
  },
  {
    label: "Kontakt",
    href: "/Contact",
  },
];

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("Strona główna");

  function handleSelect(selectedMenuButton) {
    setSelectedMenu(selectedMenuButton);
    console.log(selectedMenuButton);
  }

  let currentPageContent = <p>MAIN PAGE !</p>;

  // if (selectedMenu) {
  //   currentPageContent = (
  //     <div id="current-pageContent">
  //       <h3>{MENU_CONTENT[selectedMenu].title}</h3>
  //       <p>{MENU_CONTENT[selectedMenu].description}</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <header className="justify-center pt-2 shadow-inner">
        <nav>
          <ul className={classes.list}>
            {ARRAY_PAGES.map((option) => (
              <li key={option.label}>
                <NavLink
                  to={option.href}
                  className={({ isActive }) =>
                    isActive
                      ? "!transition-all !delay-300 !text-black !border-b-2 !border-black"
                      : undefined
                  }
                  onClick={() => {
                    handleSelect(option.label);
                  }}
                >
                  {option.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        id="logo"
        className="items-center justify-center p-12 text-center font-bold  "
      >
        <h1 className="ml-20 mt-10 text-[#054b28]">ROD MAGNOLIA</h1>
      </div>
      <div className="ml-[3vw] mt-[52vh] text-center text-[32px] text-[#054b28]">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          key={selectedMenu}
        >
          {selectedMenu}
        </motion.div>
      </div>
    </>
  );
}
