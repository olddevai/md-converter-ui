import React, { useState } from "react";
import { FaCode, FaFileDownload, FaClipboardList, FaLightbulb } from "react-icons/fa";
import MarkdownEditor from "./components/MarkdownEditor";
import PreviewPane from "./components/PreviewPane";
import FileDownloadButtons from "./components/FileDownloadButtons";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <h1 className="text-4xl font-bold text-center">Markdown Converter</h1>
        <p className="text-center mt-2 text-lg">
          Convert your Markdown to HTML and TXT effortlessly.
        </p>
      </header>

      {/* Main Tool Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Markdown Editor</h2>
          <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Live Preview:</h3>
            <PreviewPane markdown={markdown} />
          </div>
          <div className="mt-6">
            <FileDownloadButtons markdown={markdown} />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About</h2>
          <p className="text-gray-600 text-lg">
            Our Markdown Converter is a powerful tool for developers, writers, and content creators
            to seamlessly convert Markdown into HTML and plain text. It includes live previews,
            code syntax highlighting, and file downloads.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <FaCode className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Code Highlighting</h3>
              <p className="text-gray-600">
                Syntax highlighting for your Markdown code blocks.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <FaFileDownload className="text-green-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Download Files</h3>
              <p className="text-gray-600">
                Export Markdown as HTML or plain text files.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <FaClipboardList className="text-orange-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
              <p className="text-gray-600">
                Instantly see how your Markdown renders into HTML.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <FaLightbulb className="text-yellow-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                User-friendly interface for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Developers</h3>
              <p className="text-gray-600">
                Convert code documentation to clean, highlighted HTML.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Content Writers</h3>
              <p className="text-gray-600">
                Create and preview content before publishing it online.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Bloggers</h3>
              <p className="text-gray-600">
                Write blogs in Markdown and download the HTML for CMS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Markdown Converter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
