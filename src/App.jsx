import React, { useState } from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import PreviewPane from "./components/PreviewPane";
import FileDownloadButtons from "./components/FileDownloadButtons";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Markdown Converter with Code Highlighting
        </h1>
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Preview:</h2>
          <PreviewPane markdown={markdown} />
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Actions:</h2>
          <FileDownloadButtons markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default App;
