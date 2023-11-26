import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";

export default function NewsPageModal({
  activePopup,
  setActivePopup,
  newsContent,
}) {
  // const [activePopup, setActivePopup] = useState(false);

  return (
    <>
      {activePopup &&
        createPortal(
          <ModalContent closeModal={() => setActivePopup(false)}>
            <div>
              <h2>{newsContent.title.title}</h2>
              <p>{newsContent.date.date}</p>
              <p>{newsContent.shortDescription.shortDescription}</p>
              <p>{newsContent.description.description}</p>
              <img src={newsContent.smallphoto.smallphoto} />
            </div>
          </ModalContent>,
          document.body
        )}
    </>
  );
}
