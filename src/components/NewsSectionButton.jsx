import NewsPageModal from "./NewsPageModal";
import React from "react";

export default function NewsSectionButton({
  id,
  isSelected,
  newsContent,
  activePopup,
  setActivePopup,
  ...props
}) {
  const handleDivClick = () => {
    setActivePopup(!activePopup);
  };

  return (
    <>
      <button
        className={isSelected ? "active" : undefined}
        {...props}
        id={id}
        onClick={handleDivClick}
      >
        pokaż więcej...
        <NewsPageModal
          newsContent={newsContent}
          activePopup={activePopup}
          setActivePopup={setActivePopup}
        />
      </button>
    </>
  );
}
