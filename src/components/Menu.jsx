import { useState } from "react";
import MenuButton from "./MenuButton.jsx";
import { MENU_CONTENT } from "../data/menus.js";
import DocumentPage from "../pages/Documents.jsx";
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
    label: "O nas",
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
  const [selectedMenu, setSelectedMenu] = useState("");

  function handleSelect(selectedMenuButton) {
    setSelectedMenu(selectedMenuButton);
    console.log(selectedMenuButton);
  }

  let currentPageContent = <p>MAIN PAGE !</p>;

  if (selectedMenu) {
    currentPageContent = (
      <div id="current-pageContent">
        <h3>{MENU_CONTENT[selectedMenu].title}</h3>
        <p>{MENU_CONTENT[selectedMenu].description}</p>
      </div>
    );
  }

  //   return (
  //     <>
  //       <MenuButton
  //         isSelected={selectedMenu === "MainPage"}
  //         onClick={() => handleSelect("MainPage")}
  //       >
  //         <Link to="/">Strona glowna</Link>
  //       </MenuButton>
  //       <MenuButton
  //         isSelected={selectedMenu === "Expenses"}
  //         onClick={() => handleSelect("Expenses")}
  //       >
  //         <Link to="/Expenses">Oplaty</Link>
  //       </MenuButton>
  //       <MenuButton
  //         isSelected={selectedMenu === "AboutUs"}
  //         onClick={() => handleSelect("AboutUs")}
  //       >
  //         <Link to="/AboutUs">O nas</Link>
  //       </MenuButton>
  //       <MenuButton
  //         isSelected={selectedMenu === "Gallery"}
  //         onClick={() => handleSelect("Gallery")}
  //       >
  //         <Link to="/Gallery">Galeria</Link>
  //       </MenuButton>
  //       <MenuButton
  //         isSelected={selectedMenu === "Regulations"}
  //         onClick={() => handleSelect("Regulations")}
  //       >
  //         <Link to="/Regulations">Przepisy prawne</Link>
  //       </MenuButton>
  //       <MenuButton
  //         isSelected={selectedMenu === "Documents"}
  //         onClick={() => handleSelect("Documents")}
  //       >
  //         <Link to="/Documents">Dokumenty</Link>
  //       </MenuButton>
  //       <MenuButton
  //         isSelected={selectedMenu === "Renting"}
  //         onClick={() => handleSelect("Renting")}
  //       >
  //         <Link to="/Renting">Wynajem sali</Link>
  //       </MenuButton>
  //       <MenuButton
  //         isSelected={selectedMenu === "Contact"}
  //         onClick={() => handleSelect("Contact")}
  //       >
  //         <Link to="/Contact">Kontakt</Link>
  //       </MenuButton>
  //       {currentPageContent}
  //     </>
  //   );
  // }

  return (
    <>
      <div
        id="logo"
        className="font-bold text-center items-center justify-center m-12 text-fuchsia-900"
      >
        <h1>Rodzinny ogród działkowy magnolia kielce</h1>
      </div>
      <header className="bg-white shadow-inner justify-center">
        <nav>
          <ul className={classes.list}>
            {ARRAY_PAGES.map((option) => (
              <li key={option.label}>
                <NavLink
                  to={option.href}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {option.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
