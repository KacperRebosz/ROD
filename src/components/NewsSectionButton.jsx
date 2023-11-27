import NewsPageModal from "./NewsPageModal";
import { useState } from "react";
import React from "react";

export default function NewsSectionButton({
  id,
  isSelected,
  newsContent,
  ...props
}) {
  const [activePopup, setActivePopup] = useState(false);

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
        READ MORE
        <NewsPageModal
          newsContent={newsContent}
          activePopup={activePopup}
          setActivePopup={setActivePopup}
        />
      </button>
    </>
  );
}
