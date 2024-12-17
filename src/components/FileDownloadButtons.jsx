import React from "react";
import { FaFileDownload, FaFileAlt, FaCopy } from "react-icons/fa";
import CopyButton from "./CopyButton";

const FileDownloadButtons = ({ markdown }) => {
  const downloadFile = (content, fileName, type) => {
    const blob = new Blob([content], { type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  const handleDownloadHTML = () => {
    const htmlContent = `<html><body>${marked(markdown)}</body></html>`;
    downloadFile(htmlContent, "converted.html", "text/html");
  };

  const handleDownloadTXT = () => {
    downloadFile(markdown, "converted.txt", "text/plain");
  };

  const htmlContent = `<html><body>${marked(markdown)}</body></html>`;

  return (
    <div className="flex gap-4 flex-wrap">
      <button
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleDownloadHTML}
      >
        <FaFileAlt /> Download as HTML
      </button>
      <button
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleDownloadTXT}
      >
        <FaFileDownload /> Download as TXT
      </button>
      <CopyButton content={markdown} label="Markdown" />
      <CopyButton content={htmlContent} label="HTML" />
    </div>
  );
};

export default FileDownloadButtons;
