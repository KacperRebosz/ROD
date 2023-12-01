import { useEffect } from "react";

export default function GalleryModalContent({ closeModal, children }) {
  return (
    <div
      className="z-10 fixed inset-0 m-auto bg-black/70 3xl:p-5 grid place-items-center shadow-2xl cursor-pointer"
      onClick={closeModal}
    >
      {/* <div
        className="w-screen h-3/4 md:w-4/5 xl:w-3/5 3xl:w-2/5 3xl:h-3/5 rounded overflow-auto "
        onClick={(event) => {
          event.stopPropagation();
        }}
      > */}
      <div
        className=" cursor-default"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
    // </div>
  );
}
