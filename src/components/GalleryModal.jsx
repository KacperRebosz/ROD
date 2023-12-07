import { createPortal } from "react-dom";
import GalleryModalContent from "./GalleryModalContent";
import { useEffect } from "react";

export default function GalleryModal({
  activeModal,
  setActiveModal,
  galleryPhoto,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setActiveModal]);
  return (
    <>
      {activeModal !== null &&
        createPortal(
          <GalleryModalContent closeModal={() => setActiveModal(null)}>
            <div className="relative">
              <img
                className="object-fill w-[56rem]"
                src={galleryPhoto}
                alt="Some photo"
              />
            </div>
          </GalleryModalContent>,
          document.body
        )}
    </>
  );
}
