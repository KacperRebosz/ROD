import React from "react";

const GallerySection = ({ title, description, images }) => {
  return (
    <div className="p-4 pb-32 border-black">
      <h2 className="font-bold text-[2.5rem]">{title}</h2>
      <p className="pt-4 pb-8">{description}</p>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="h-full w-full overflow-hidden object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
