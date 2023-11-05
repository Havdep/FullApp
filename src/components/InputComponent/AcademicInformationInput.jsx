import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

function AcademicInformationInput() {
  const [researchTopic, setResearchTopic] = useState("");
  const [coursesTaken, setCoursesTaken] = useState([]);
  const [thesisURL, setThesisURL] = useState("");

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Academic Information Input</h2>

      <div className="mb-4">
        <label htmlFor="researchTopic" className="block text-lg font-bold mb-2">
          Research Topic:
        </label>
        <input
          type="text"
          id="researchTopic"
          value={researchTopic}
          onChange={(e) => setResearchTopic(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="coursesTaken" className="block text-lg font-bold mb-2">
          Courses Taken:
        </label>
        <textarea
          id="coursesTaken"
          value={coursesTaken}
          onChange={(e) => setCoursesTaken(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="thesisURL" className="block text-lg font-bold mb-2">
          Thesis URL:
        </label>
        <input
          type="text"
          id="thesisURL"
          value={thesisURL}
          onChange={(e) => setThesisURL(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <Link to="/academic/input">
        {" "}
        {/* Link to the desired route */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Go to /academic/input
        </button>
      </Link>
    </div>
  );
}

export default AcademicInformationInput;
