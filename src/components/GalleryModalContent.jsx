export default function GalleryModalContent({ closeModal, children }) {
  return (
    <div
      className="z-10 fixed inset-0 m-auto bg-black/70 3xl:p-5 grid place-items-center shadow-2xl cursor-pointer"
      onClick={closeModal}
    >
      <div
        className=" cursor-default"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
