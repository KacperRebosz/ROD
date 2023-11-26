import { useState } from "react";
import MenuButton from "./MenuButton.jsx";
import { MENU_CONTENT } from "../data/menus.js";
// import DocumentPage from "../pages/Documents.jsx";
import { NavLink, Link } from "react-router-dom";
import classes from "./Menu.module.css";

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
      <header className="shadow-inner justify-center pt-2">
        <nav>
          <ul className={classes.list}>
            {ARRAY_PAGES.map((option) => (
              <li key={option.label}>
                <NavLink
                  to={option.href}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
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
        className="font-bold text-center items-center justify-center p-12  "
      >
        <h1 className="text-[#054b28] ml-20 mt-10">ROD MAGNOLIA</h1>
      </div>
      <div className="text-center ml-[3vw] mt-[49vh] text-[#054b28] text-[20px]">
        {selectedMenu}
      </div>
    </>
  );
}
