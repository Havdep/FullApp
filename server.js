import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

const apiKey = "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"; // Replace with your actual OpenAI API key

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
// Existing code...
const name = "John Doe";
const professionalSummary =
  "Experienced software engineer with a passion for creating efficient and scalable web applications.";
const experience =
  "- Senior Developer, ABC Tech Solutions\n- Frontend Engineer, XYZ Web Services";
const education =
  "- Relevant Courses: Advanced Web Development, Data Structures and Algorithms\n- Graduation Year: 2020\n- Institution Name: University of Techville";
const skills = "JavaScript, React, Node.js, HTML, CSS, MongoDB";
const github = "https://github.com/johndoe";
const linkedin = "https://www.linkedin.com/in/johndoe";
const twitter = "https://twitter.com/johndoe";

app.post("/generate-portfolio", async (req, res) => {
  try {
    // const { name, professionalSummary, experience, education, skills, github, linkedin, twitter } = req.body;

    // const prompt = `Name: ${name}\n\nProfessional Summary:\n${professionalSummary}\n\nExperience:\n${experience}\n\nEducation:\n${education}\n\nSkills:\n${skills}\n\nGitHub: ${github}\nLinkedIn: ${linkedin}\nTwitter: ${twitter}`;

    const prompt = `Create a portfolio website with the following sections:

1. Name: ${name}
2. Professional Summary: ${professionalSummary}
3. Experience:
   - ${experience}
4. Education:
   - ${education}
5. Skills: ${skills}
6. Contact:
   - GitHub URL: ${github}
   - LinkedIn URL: ${linkedin}
   - Twitter URL: ${twitter}
   with primary color blue , secondary color green and background color as pink
Please generate HTML and CSS code for this   website.`;

    console.log("Prompt Sent to OpenAI API:", prompt); // Log the prompt

    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt,
        temperature: 0.3,
        max_tokens: 1000, // Adjust as needed
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const generatedPortfolio = response.data.choices[0].text;
    res.send(generatedPortfolio);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
app.js;
