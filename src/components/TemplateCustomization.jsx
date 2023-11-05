import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { NavLink } from "react-router-dom";
import axios from "axios"; // Import Axios

function TemplateCustomization() {
  const {
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    backgroundColor,
    setBackgroundColor,
    selectedFont,
    setSelectedFont,
    fontSize,
    setFontSize,
    selectedTemplate,
    setSelectedTemplate,
    headerPosition,
    setHeaderPosition,
    includePhoto,
    setIncludePhoto,
    photoURL,
    setPhotoURL,
    professionalSummary,
    setProfessionalSummary,
    experienceEntries,
    setExperienceEntries,
    educationEntries,
    setEducationEntries,
    skills,
    setSkills,
    githubURL,
    setGithubURL,
    twitterURL,
    setTwitterURL,
    linkedinURL,
    setLinkedinURL,
  } = useContext(GlobalContext);

  const handleGeneratePortfolio = async () => {
    try {
      const response = await axios.post("/generate-portfolio", {
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        backgroundColor,
        setBackgroundColor,
        selectedFont,
        setSelectedFont,
        fontSize,
        setFontSize,
        selectedTemplate,
        setSelectedTemplate,
        headerPosition,
        setHeaderPosition,
        includePhoto,
        setIncludePhoto,
        photoURL,
        setPhotoURL,
        professionalSummary,
        setProfessionalSummary,
        experienceEntries,
        setExperienceEntries,
        educationEntries,
        setEducationEntries,
        skills,
        setSkills,
        githubURL,
        setGithubURL,
        twitterURL,
        setTwitterURL,
        linkedinURL,
        setLinkedinURL,
      });

      const generatedPortfolio = response.data;
      console.log(generatedPortfolio);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-purple-400 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Template Customization</h2>

      <div className="mb-4">
        <label htmlFor="primaryColor" className="block text-lg font-bold mb-2">
          Primary Color:
        </label>
        <input
          type="color"
          id="primaryColor"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="secondaryColor"
          className="block text-lg font-bold mb-2"
        >
          Secondary Color:
        </label>
        <input
          type="color"
          id="secondaryColor"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="backgroundColor"
          className="block text-lg font-bold mb-2"
        >
          Background Color:
        </label>
        <input
          type="color"
          id="backgroundColor"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="selectedFont" className="block text-lg font-bold mb-2">
          Font Selection:
        </label>
        <select
          id="selectedFont"
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Helvetica, sans-serif">Helvetica</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Times New Roman, serif">Times New Roman</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="fontSize" className="block text-lg font-bold mb-2">
          Font Size (px):
        </label>
        <input
          type="number"
          id="fontSize"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>
      <NavLink>
        {" "}
        {/* Link to the desired route */}
        <button
          onClick={handleGeneratePortfolio}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Generate Portfolio
        </button>
      </NavLink>
    </div>
  );
}

export default TemplateCustomization;
