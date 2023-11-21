import React from "react";

const GallerySection = ({ title, description, images }) => {
  return (
    <div className="m-4">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full overflow-hidden object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
