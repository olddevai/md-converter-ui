import React from "react";
import { FaCopy } from "react-icons/fa";

const CopyButton = ({ content, label }) => {
  // Function to handle content copying
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content); // Use the Clipboard API
      alert(`${label} copied to clipboard!`);
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy content. Please try again.");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
      title={`Copy ${label}`}
    >
      <FaCopy /> Copy {label}
    </button>
  );
};

export default CopyButton;
