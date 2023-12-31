import { useEffect, useRef, useState } from "react";
import classes from "./Menu.module.css";
import { NavLink, Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, color } from "framer-motion";
import MediaQuery from "react-responsive";
import NavigationMobile from "./NavigationMobile";

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
let currentPageContent = <p>MAIN PAGE !</p>;

export const Navigation = () => {
  const [selectedMenu, setSelectedMenu] = useState("Strona główna");

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function handleSelect(selectedMenuButton) {
    setSelectedMenu(selectedMenuButton);
    console.log(selectedMenuButton);
  }

  const variants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();
  const containerRef = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    const setOpacity =
      0.2 + 0.8 * Math.min(1, Math.max(0, (latest - 150) / 350));
    containerRef.current.style.background = `rgba(255, 255, 255, ${setOpacity})`;
  });

  const [width, setWidth] = useState(window.innerWidth);
  const useCheckMobileScreen = () => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    return width;
  };
  return (
    <>
      <MediaQuery maxWidth={1023}>
        <motion.div className="fixed z-[6] flex w-full h-24 items-center justify-center bg-white/80">
          <motion.nav className="fixed mr-4 mt-[0.3rem] text-3xl text-[#054b28]">
            <NavLink to="/" end reloadDocument className=" text-deco">
              <p className="ml-10">ROD</p>
              <p>MAGNOLIA</p>
            </NavLink>
          </motion.nav>
          <img
            className="fixed top-8 right-8 cursor-pointer z-[9]"
            src="/menu_40.svg"
            alt="menu_icon"
            onClick={() => setHamburgerOpen((prev) => !prev)}
          />
          <NavigationMobile isOpen={hamburgerOpen} />
        </motion.div>
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <motion.nav
          variants={variants}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="justify-center shadow-inner z-[2] fixed w-full "
        >
          <motion.div className="w-full bg-white/20" ref={containerRef}>
            <ul className={classes.list}>
              {ARRAY_PAGES.map((option) => (
                <li key={option.label}>
                  <NavLink
                    to={option.href}
                    className={({ isActive }) =>
                      isActive
                        ? "!transition-all !text-black !border-b-2 !border-black"
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
          </motion.div>
        </motion.nav>
      </MediaQuery>
    </>
  );
};
// };

export default Navigation;
