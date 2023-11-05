import React, { useState } from "react";

function ProfessionalInformationInput() {
  const [jobExperience, setJobExperience] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [linkedInProfile, setLinkedInProfile] = useState("");

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Professional Information Input
      </h2>

      <div className="mb-4">
        <label htmlFor="jobExperience" className="block text-lg font-bold mb-2">
          Job Experience:
        </label>
        <textarea
          id="jobExperience"
          value={jobExperience}
          onChange={(e) => setJobExperience(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="certifications"
          className="block text-lg font-bold mb-2"
        >
          Certifications:
        </label>
        <textarea
          id="certifications"
          value={certifications}
          onChange={(e) => setCertifications(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="linkedInProfile"
          className="block text-lg font-bold mb-2"
        >
          LinkedIn Profile:
        </label>
        <input
          type="text"
          id="linkedInProfile"
          value={linkedInProfile}
          onChange={(e) => setLinkedInProfile(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>
    </div>
  );
}

export default ProfessionalInformationInput;
