export default function ModalContent({ closeModal, children }) {
  return (
    <div
      className="z-10 fixed inset-0 m-auto bg-black/70 p-5 grid place-items-center shadow-2xl "
      onClick={closeModal}
    >
      <div
        className="bg-[#faf7ed] w-2/5 h-3/4 rounded overflow-auto"
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
