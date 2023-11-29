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
              <p className="p-1 left-0 top-0 absolute sm:p-3 lg:p-4 xl:p-5 3xl:p-3 text-green-500">
                {newsContent.date.date}
              </p>
              <h2 className="pl-1 pt-10 text-2xl sm:px-3 sm:pt-14 lg:px-5 xl:px-7 3xl:pl-8 3xl:pt-16 3xl:text-[3rem]">
                {newsContent.title.title}
              </h2>
              <p className="pl-1 pt-3 sm:px-3 lg:px-5 xl:px-7 3xl:pl-8 3xl:pt-4">
                {newsContent.shortDescription.shortDescription}
              </p>
              <p className="pl-1 pt-3 pb-8 sm:px-3 sm:pb-12 text-sm lg:px-5 xl:px-7 xl:pt-8 3xl:pl-8 3xl:pr-8 3xl:mt-16 3xl:pb-8">
                {newsContent.description.description}
              </p>
              <img
                className="p-1 w-32 sm:p-3 sm:w-48 lg:p-5 lg:w-52 xl:w-60 top-0 right-0 3xl:pr-8 3xl:p-6 3xl:w-[21rem] absolute  "
                src={newsContent.smallphoto.smallphoto}
              />
            </div>
          </ModalContent>,
          document.body
        )}
    </>
  );
}
