import React from "react";
import NewsSectionButton from "./NewsSectionButton";
import NewsPageModal from "./NewsPageModal";
import { useState } from "react";

const NewsSection = ({
  title,
  shortDescription,
  description,
  smallphoto,
  photo,
  date,
  id,
}) => {
  const [activePopup, setActivePopup] = useState(false);

  const handleDivClick = () => {
    setActivePopup(!activePopup);
  };

  const closeModal = () => {
    setActivePopup(false);
  };

  return (
    <div className="my-4 sm:my-12 md:mt-6 md:mb-0  3xl:h-[34rem] w-full rounded-b-xl object-cover shadow-2xl drop-shadow-2xl">
      <img
        src={photo}
        alt="Image"
        className="h-3/5 w-full rounded-t-xl object-cover cursor-pointer"
        onClick={handleDivClick}
      />
      <div className="items-left flex h-2/5 flex-col flex-wrap gap-y-4 md:gap-y-2">
        <h2 className="ml-2 3xl:ml-4 mt-4 md:mt-1 lg:mt-3 lg:ml-4 text-xl font-bold capitalize">
          {title}
        </h2>
        <p className="-mt-4 ml-2 md:-mt-3 3xl:ml-4 lg:ml-4 text-xs text-green-500">
          {date}
        </p>
        <p className="ml-2 md:mt-1 lg:ml-4 lg:mt-4 3xl:ml-4 3xl:mt-3 text-sm">
          {shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-center">
          <NewsSectionButton
            // id={id}
            activePopup={activePopup}
            setActivePopup={setActivePopup}
            newsContent={{
              id: { id },
              title: { title },
              date: { date },
              shortDescription: { shortDescription },
              description: { description },
              photo: { photo },
              smallphoto: { smallphoto },
            }}
            className=" mb-4 flex h-12 w-36 items-center justify-center rounded-md bg-[#054b28] font-bold text-white transition duration-500 ease-in-out hover:bg-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
