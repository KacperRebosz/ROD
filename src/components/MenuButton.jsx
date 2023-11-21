export default function MenuButton({ children, isSelected, ...props }) {
  return (
    <>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </>
  );
}
