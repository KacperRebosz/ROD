import React from "react";
import GalleryModal from "./GalleryModal";
import { useState } from "react";

const GallerySection = ({ title, description, images }) => {
  const [activeModal, setActiveModal] = useState(null);

  const handleClick = (index) => {
    setActiveModal(index);
  };

  return (
    <div className="mx-2 sm:mx-12 md:mx-4 lg:mx-12 2xl:mx-24  3xl:p-4 3xl:pb-0  border-black">
      <h2 className="font-bold mt-8 text-xl sm:mt-16 sm:text-2xl md:pl-1 3xl:text-[2.5rem]">
        {title}
      </h2>
      <p className="text-xs pt-1 pb-1 sm:text-sm sm:pt-2 sm:pb-2 md:pl-3 3xl:pt-4 3xl:pb-8">
        {description}
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-2 lg:gap-3 xl:grid xl:grid-cols-3 xl:gap-4 3xl:grid 3xl:grid-cols-3 3xl:gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="md:rounded-xl h-[26rem] overflow-hidden object-cover rounded cursor-pointer"
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {activeModal !== null && (
        <GalleryModal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          galleryPhoto={images[activeModal]}
        />
      )}
    </div>
  );
};

export default GallerySection;
