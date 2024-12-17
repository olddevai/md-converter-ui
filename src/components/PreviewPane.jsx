import React from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Highlight theme
import DOMPurify from "dompurify"; // Sanitizes HTML
import { FaCode, FaFileAlt } from "react-icons/fa";

// Custom renderer for Marked.js
const renderer = new marked.Renderer();

marked.setOptions({
  renderer,
  highlight: (code) => {
    return hljs.highlightAuto(code).value; // Auto-detect code language
  },
  breaks: true,
  gfm: true,
});

const stripHtml = (html) => {
  // Converts HTML to plain text (removes tags)
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const PreviewPane = ({ markdown, format }) => {
  let content = "";

  if (format === "html") {
    // Render sanitized HTML content
    content = DOMPurify.sanitize(marked(markdown));
  } else if (format === "txt") {
    // Strip HTML and provide plain text
    const rawHtml = marked(markdown);
    content = stripHtml(rawHtml);
  } else {
    // Default Markdown rendering with HTML
    content = DOMPurify.sanitize(marked(markdown));
  }

  return (
    <div className="p-4 border rounded-md bg-gray-50 overflow-auto">
      <div>
        {format === "txt" ? (
          <pre className="whitespace-pre-wrap text-gray-700">{content}</pre>
        ) : (
          <div
            className="prose max-w-full"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default PreviewPane;
