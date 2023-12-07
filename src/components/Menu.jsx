import { useState } from "react";
import AnimatedPage from "./AnimatedPage.jsx";
import Navigation from "./Navigation.jsx";

export default function Menu() {
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
    </>
  );
}
