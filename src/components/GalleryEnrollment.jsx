export default function GalleryEnrollment() {
  const numberOfImages = 7;
  const imageArray = Array.from(
    { length: numberOfImages },
    (_, index) => index + 1
  );
  return (
    <>
      <div
        id="galleryWraper"
        className="col-span-3"
        // className="flex flex-wrap justify-center gap-3 flex-row"
      >
        {imageArray.map((index) => (
          <img
            key={index}
            src={`/Images/image${index}.jpg`}
            alt={`Image ${index}`}
            // className="block m-2 max-w-xs h-auto object-cover basis-80 overflow-hidden"
          />
        ))}
      </div>
    </>
  );
}
