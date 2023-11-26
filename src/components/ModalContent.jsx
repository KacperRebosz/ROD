export default function ModalContent({ closeModal, children }) {
  return (
    <div
      className="z-10 fixed inset-0 m-auto bg-black/50 p-5 grid place-items-center shadow-2xl"
      onClick={closeModal}
    >
      <div
        className="border border-black bg-white w-2/5 h-3/4  p-5 "
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <p>test</p>
        <div>{children}</div>
        {/* <button onClick={closeModal}>CLOSE MODAL</button> */}
      </div>
    </div>
  );
}
