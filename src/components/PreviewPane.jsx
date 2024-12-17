import React, { useEffect } from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Import a highlight theme

const PreviewPane = ({ markdown }) => {
  // Configure Marked to use Highlight.js
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
    breaks: true,
  });

  const htmlContent = marked(markdown);

  // Apply syntax highlighting after rendering
  useEffect(() => {
    hljs.highlightAll();
  }, [markdown]);

  return (
    <div
      className="p-4 border rounded-md bg-gray-50 overflow-auto"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></div>
  );
};

export default PreviewPane;
