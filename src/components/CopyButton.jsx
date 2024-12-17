import React from "react";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyButton = ({ content, label }) => {
  return (
    <CopyToClipboard text={content}>
      <button
        className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
        title={`Copy ${label}`}
      >
        <FaCopy /> Copy {label}
      </button>
    </CopyToClipboard>
  );
};

export default CopyButton;
