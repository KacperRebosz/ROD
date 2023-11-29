import React from "react";

const GallerySection = ({ title, description, images }) => {
  return (
    <div className="mx-2 sm:mx-12 md:mx-4 md:mb-16 lg:mx-12 2xl:mx-24  3xl:p-4 3xl:pb-24  border-black">
      <h2 className="font-bold mt-8 text-xl sm:mt-16 sm:text-2xl md:pl-1 3xl:text-[2.5rem]">
        {title}
      </h2>
      <p className="text-xs pt-1 pb-1 sm:text-sm sm:pt-2 sm:pb-2 md:pl-1 3xl:pt-4 3xl:pb-8">
        {description}
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-2 lg:gap-3 xl:grid xl:grid-cols-3 xl:gap-4 3xl:grid 3xl:grid-cols-3 3xl:gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="my-2 sm:my-4 md:rounded-xl h-full w-full overflow-hidden object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
