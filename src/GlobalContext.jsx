import React from "react";
import { createContext, useState } from "react";

export const GlobalContext = createContext();
const Context = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState("#3498db");
  const [secondaryColor, setSecondaryColor] = useState("#e74c3c");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [selectedFont, setSelectedFont] = useState("Arial, sans-serif");
  const [fontSize, setFontSize] = useState("16");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [headerPosition, setHeaderPosition] = useState("top");
  const [includePhoto, setIncludePhoto] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [professionalSummary, setProfessionalSummary] = useState("");
  const [experienceEntries, setExperienceEntries] = useState([
    { jobTitle: "", companyName: "" },
  ]);
  const [educationEntries, setEducationEntries] = useState([
    { relevantCourses: "", graduationYear: "", institutionName: "" },
  ]);
  const [skills, setSkills] = useState([]);
  const [githubURL, setGithubURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");

  const value = {
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
  };
  return (
    <GlobalContext.Provider value={value}> {children} </GlobalContext.Provider>
  );
};
export default Context;
