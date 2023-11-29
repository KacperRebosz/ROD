export default function ModalContent({ closeModal, children }) {
  return (
    <div
      className="z-10 fixed inset-0 m-auto bg-black/70 3xl:p-5 grid place-items-center shadow-2xl "
      onClick={closeModal}
    >
      <div
        className="bg-[#faf7ed] w-screen h-3/4 md:w-4/5 xl:w-3/5 3xl:w-2/5 3xl:h-3/4 rounded overflow-auto"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div>{children}</div>
        {/* <button onClick={closeModal}>CLOSE MODAL</button> */}
      </div>
    </div>
  );
}
