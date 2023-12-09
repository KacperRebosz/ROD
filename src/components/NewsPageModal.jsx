import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";
import { useEffect, useRef } from "react";

export default function NewsPageModal({
  activePopup,
  setActivePopup,
  newsContent,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActivePopup(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setActivePopup]);

  return (
    <>
      {activePopup &&
        createPortal(
          <ModalContent closeModal={() => setActivePopup(false)}>
            <div className="relative">
              <p className="p-1 left-0 top-0 absolute sm:p-3 lg:p-4 xl:p-5 3xl:p-3 3xl:pl-4 text-green-500">
                {newsContent.date.date}
              </p>
              <h2 className="pl-1 pt-10 text-2xl sm:px-3 sm:pt-14 lg:px-5 xl:px-7 3xl:pl-8 3xl:pt-24 3xl:text-[3rem] capitalize ">
                {newsContent.title.title}
              </h2>
              <img
                src="/close40.svg"
                className="absolute right-0 top-0 cursor-pointer"
                onClick={() => setActivePopup(false)}
              />
              <p className="pl-1 pt-3 pb-8 sm:px-3 sm:pb-12 text-sm lg:px-5 xl:px-7 xl:pt-8 3xl:pl-8 3xl:pr-8 3xl:mt-4 3xl:pb-8">
                {newsContent.description.description}
              </p>
            </div>
          </ModalContent>,
          document.body
        )}
    </>
  );
}
