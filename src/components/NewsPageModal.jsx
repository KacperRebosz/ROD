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
            <div className="relative">
              <p className="left-0 top-0 absolute p-3 text-green-500">
                {newsContent.date.date}
              </p>
              <h2 className="pl-8 pt-16 text-[3rem]">
                {newsContent.title.title}
              </h2>
              <p className="pl-8 pt-4">
                {newsContent.shortDescription.shortDescription}
              </p>
              <p className="pl-8 pr-8 mt-16 pb-8">
                {newsContent.description.description}
              </p>
              <img
                className="top-0 right-0 absolute p-3 "
                src={newsContent.smallphoto.smallphoto}
              />
            </div>
          </ModalContent>,
          document.body
        )}
    </>
  );
}
