import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { NavLink } from "react-router-dom";

function InformationInput() {
  // const [professionalSummary, setProfessionalSummary] = useState("");
  // const [experienceEntries, setExperienceEntries] = useState([
  //   { jobTitle: "", companyName: "" },
  // ]);
  // const [educationEntries, setEducationEntries] = useState([
  //   { relevantCourses: "", graduationYear: "", institutionName: "" },
  // ]);
  // const [skills, setSkills] = useState([]);
  // const [githubURL, setGithubURL] = useState("");
  // const [linkedinURL, setLinkedinURL] = useState("");
  // const [twitterURL, setTwitterURL] = useState("");
  const {
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

  function handleClick() {
    console.log({
      professionalSummary,
      setProfessionalSummary,
      experienceEntries,
      setExperienceEntries,
      skills,
      setSkills,
      githubURL,
      setGithubURL,
      twitterURL,
      setTwitterURL,
      linkedinURL,
      setLinkedinURL,
    });
  }
  const handleAddExperience = () => {
    setExperienceEntries([
      ...experienceEntries,
      { jobTitle: "", companyName: "" },
    ]);
  };

  const handleAddEducation = () => {
    setEducationEntries([
      ...educationEntries,
      { relevantCourses: "", graduationYear: "", institutionName: "" },
    ]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-purple-400 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Information Input</h2>
      <label
        htmlFor="professionalSummary"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Professional Summary:
      </label>
      <textarea
        id="professionalSummary"
        value={professionalSummary}
        onChange={(e) => setProfessionalSummary(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-300"
      />

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Experience Entries:</h3>
        {experienceEntries.map((entry, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              placeholder="Job Title"
              value={entry.jobTitle}
              onChange={(e) => {
                const updatedEntries = [...experienceEntries];
                updatedEntries[index].jobTitle = e.target.value;
                setExperienceEntries(updatedEntries);
              }}
              className="w-1/2 p-2 rounded-md border border-gray-300 mr-2"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={entry.companyName}
              onChange={(e) => {
                const updatedEntries = [...experienceEntries];
                updatedEntries[index].companyName = e.target.value;
                setExperienceEntries(updatedEntries);
              }}
              className="w-1/2 p-2 rounded-md border border-gray-300"
            />
          </div>
        ))}
        <button
          onClick={handleAddExperience}
          className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Experience
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Education Entries:</h3>
        {educationEntries.map((entry, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Relevant Courses"
              value={entry.relevantCourses}
              onChange={(e) => {
                const updatedEntries = [...educationEntries];
                updatedEntries[index].relevantCourses = e.target.value;
                setEducationEntries(updatedEntries);
              }}
              className="w-full p-2 rounded-md border border-gray-300 mb-2"
            />
            <input
              type="text"
              placeholder="Graduation Year"
              value={entry.graduationYear}
              onChange={(e) => {
                const updatedEntries = [...educationEntries];
                updatedEntries[index].graduationYear = e.target.value;
                setEducationEntries(updatedEntries);
              }}
              className="w-1/2 p-2 rounded-md border border-gray-300 mr-2"
            />
            <input
              type="text"
              placeholder="Institution Name"
              value={entry.institutionName}
              onChange={(e) => {
                const updatedEntries = [...educationEntries];
                updatedEntries[index].institutionName = e.target.value;
                setEducationEntries(updatedEntries);
              }}
              className="w-1/2 p-2 rounded-md border border-gray-300"
            />
          </div>
        ))}
        <button
          onClick={handleAddEducation}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Education
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Skills:</h3>
        <input
          type="text"
          placeholder="Enter a skill"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 mb-2"
        />
        <button
          onClick={() => setSkills([...skills, skills])}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Skill
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Contact Information:</h3>
        <input
          type="text"
          placeholder="GitHub URL"
          value={githubURL}
          onChange={(e) => setGithubURL(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 mb-2"
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={linkedinURL}
          onChange={(e) => setLinkedinURL(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 mb-2"
        />
        <input
          type="text"
          placeholder="Twitter URL"
          value={twitterURL}
          onChange={(e) => setTwitterURL(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>
      <NavLink to="/input/cutomise">
        {" "}
        {/* Link to the desired route */}
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Go to Next
        </button>
      </NavLink>
    </div>
  );
}

export default InformationInput;
