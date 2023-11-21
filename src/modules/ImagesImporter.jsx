const importImages = () => {
  const numberOfImages = 7; // Adjust this based on the number of images you have
  const imagePaths = [];

  for (let i = 1; i <= numberOfImages; i++) {
    const imagePath = `/Images/image-${i}.jpg`;
    imagePaths.push(import(imagePath).then((module) => module.default));
  }

  return Promise.all(imagePaths);
};

const galleryImages = importImages();

export default galleryImages;

// const importImages = () => {
//   const images = import.meta.globEager("./images/*.{png,jpg,jpeg,gif}");
//   console.log(images);
//   return Object.values(images).map((image) => image.default);
// };

// const galleryImages = importImages();

// export default galleryImages;

// const images = ImportGlobFunction("../Gallery", false, /\.(png|jpg|jpeg|gif)$/);

// const galleryImages = Object.keys(images).map((key) => images[key]);

// export default galleryImages;
