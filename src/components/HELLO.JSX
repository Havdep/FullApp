import React, { useState } from "react";

function TemplateSelection() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [headerPosition, setHeaderPosition] = useState("top");
  const [includePhoto, setIncludePhoto] = useState(false);
  const [photoURL, setPhotoURL] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-4 bg-slate-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Template Selection</h2>

      <div className="mb-4">
        <h3 className="text-lg font-bold">Choose a Template Variety:</h3>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="templateVariety"
              value="Professional"
              checked={selectedTemplate === "Professional"}
              onChange={() => setSelectedTemplate("Professional")}
              className="text-blue-500"
            />
            Professional
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="templateVariety"
              value="Creative"
              checked={selectedTemplate === "Creative"}
              onChange={() => setSelectedTemplate("Creative")}
              className="text-blue-500"
            />
            Creative
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="templateVariety"
              value="Academic"
              checked={selectedTemplate === "Academic"}
              onChange={() => setSelectedTemplate("Academic")}
              className="text-blue-500"
            />
            Academic
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold">Select Header Position:</h3>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="headerPosition"
              value="top"
              checked={headerPosition === "top"}
              onChange={() => setHeaderPosition("top")}
              className="text-blue-500"
            />
            Top
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="headerPosition"
              value="side"
              checked={headerPosition === "side"}
              onChange={() => setHeaderPosition("side")}
              className="text-blue-500"
            />
            Side
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-bold mb-2">
          Include Photo in Header:
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={includePhoto}
            onChange={() => setIncludePhoto(!includePhoto)}
            className="text-blue-500"
          />
          Yes
        </label>
      </div>

      {includePhoto && (
        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-lg font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="photoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
          />
        </div>
      )}
    </div>
  );
}

export default TemplateSelection;
