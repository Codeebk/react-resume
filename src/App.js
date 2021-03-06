import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExperienceEntry from "./components/experience-entry";
import VisitorCounter from "./components/visitor-counter";
import Container from "@mui/material/Container";
import TechnicalSkillsList from "./components/technical-skills-list";
import { Chip } from "@mui/material";

let visitorCount = 7;
let technicalSkills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Javascript/Typescript" },
  { name: "Python" },
  { name: "React" },
  { name: "Playwright" },
  { name: "Django" },
  { name: "Git" },
  { name: "GitLab" },
  { name: "Azure" },
  { name: "Jasmine" },
  { name: "PyTest" },
  { name: "Jira" },
  { name: "Kanban" },
];
let experienceEntries = [
  {
    id: 1,
    title: "Quality Engineer II, Automation — Everbridge",
    description:
      "Design and build automation test frameworks and tools; write scripts and execute automation runs -- Write Jenkinsfiles to integrate automated tests in CI/CD pipeline -- Create API test automation -- Provide technical guidance/coaching to Scrum teams on performance testing and UI automation",
  },
  {
    id: 2,
    title: "Software Development Engineer in Test — Mainline",
    description:
      "Work closely with the QA team to vet solutions and find the ones that worked best with Mainline’s esports tournament software -- Responsible for leading the design and implementation of automated test framework with scenario driven real world user tests -- Created test suite that reduced regression testing time and resources from -four days/17 people, to -one day/one person -- Set up parallel execution of tests to reduce automation runtime by 4x",
  },
  {
    id: 3,
    title: "Software Engineer — Trintech",
    description:
      "Using TDD, build Angular 7+ UI for cloud-based financial software suite, used by the majority of the Fortune 100 -- Consume APIs with RESTful Java back end -- Deliver user stories on time with performance and localization requirements in mind while working in Agile teams following Agile + SAFe methodologies -- Contribute to the complete rewrite of the application UI from Flash to Angular -- Ensure accessibility and OWASP standards are met Write unit tests using Jasmine to increase code coverage to a minimum of 90%",
  },
];

function App() {
  const [experienceEntry, setExperienceEntry] = useState([]);
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <VisitorCounter visitorCount={visitorCount} />
        <Typography variant="h2" gutterBottom component="div">
          Codee King
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          Software Engineer
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Technical Skills
        </Typography>
        <TechnicalSkillsList technicalSkills={technicalSkills} />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Experience
        </Typography>
        {experienceEntries.map((experienceEntry) => (
          <ExperienceEntry
            experienceEntry={experienceEntry}
            key={experienceEntry.id}
          />
        ))}
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Projects
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          SnackStalker - full-stack Python application
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Education
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          General Assembly - Software Engineering Certificate - 2019
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Austin Community College — Associate of Arts - Dance
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
