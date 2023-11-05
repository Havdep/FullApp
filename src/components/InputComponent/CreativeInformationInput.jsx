import React, { useState } from "react";

function CreativeInformationInput() {
  const [artisticSkills, setArtisticSkills] = useState([]);
  const [creativeProjects, setCreativeProjects] = useState([]);
  const [portfolioURL, setPortfolioURL] = useState("");

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Creative Information Input</h2>

      <div className="mb-4">
        <label
          htmlFor="artisticSkills"
          className="block text-lg font-bold mb-2"
        >
          Artistic Skills:
        </label>
        <textarea
          id="artisticSkills"
          value={artisticSkills}
          onChange={(e) => setArtisticSkills(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="creativeProjects"
          className="block text-lg font-bold mb-2"
        >
          Creative Projects:
        </label>
        <textarea
          id="creativeProjects"
          value={creativeProjects}
          onChange={(e) => setCreativeProjects(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="portfolioURL" className="block text-lg font-bold mb-2">
          Portfolio URL:
        </label>
        <input
          type="text"
          id="portfolioURL"
          value={portfolioURL}
          onChange={(e) => setPortfolioURL(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>
    </div>
  );
}

export default CreativeInformationInput;
