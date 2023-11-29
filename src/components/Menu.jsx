import { useState } from "react";
import AnimatedPage from "./AnimatedPage.jsx";
import Navigation from "./Navigation.jsx";

const klasy = `
  relative after:absolute after:w-[0%] after:content-["."] after:text-transparent after:h-px after:m-auto after:bottom-0 after:inset-x-0 hover:after:w-full `;

export default function Menu() {
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
      <Navigation />
      <div
        id="logo"
        className="items-center justify-center pt-48 sm:pt-72 md:pt-96 3xl:pt-20 p-8 text-center font-bold  "
      >
        <h1 className="hidden 3xl:block text-4xl 3xl:ml-20 3xl:mt-28 text-[#054b28]">
          ROD MAGNOLIA
        </h1>
      </div>
      {/* <div className="3xl:mx-auto text-center 3xl:text-[32px] text-[#054b28]"> */}
      {/* <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          key={selectedMenu}
        >
          {selectedMenu}
        </motion.div> */}
      {/* </div> */}
    </>
  );
}
