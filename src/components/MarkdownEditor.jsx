import React from "react";

const MarkdownEditor = ({ markdown, setMarkdown }) => {
  return (
    <textarea
      className="w-full h-60 p-4 border rounded-md resize-none outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Type your markdown here..."
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
    ></textarea>
  );
};

export default MarkdownEditor;
