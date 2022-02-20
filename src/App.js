import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExperienceEntry from "./components/experience-entry";
import VisitorCounter from "./components/visitor-counter";
import Container from '@mui/material/Container';

let visitorCount = 7;
let experienceEntries = [
  {
    title: "Quality Engineer II, Automation — Everbridge",
    description:
      "Design and build automation test frameworks and tools; write scripts and execute automation runs -- Write Jenkinsfiles to integrate automated tests in CI/CD pipeline -- Create API test automation -- Provide technical guidance/coaching to Scrum teams on performance testing and UI automation",
  },
  {
    title: "Software Development Engineer in Test — Mainline",
    description:
      "Work closely with the QA team to vet solutions and find the ones that worked best with Mainline’s esports tournament software -- Responsible for leading the design and implementation of automated test framework with scenario driven real world user tests -- Created test suite that reduced regression testing time and resources from -four days/17 people, to -one day/one person -- Set up parallel execution of tests to reduce automation runtime by 4x",
  },
  {
    title: "Software Engineer — Trintech",
    description:
      "Using TDD, build Angular 7+ UI for cloud-based financial software suite, used by the majority of the Fortune 100 -- Consume APIs with RESTful Java back end -- Deliver user stories on time with performance and localization requirements in mind while working in Agile teams following Agile + SAFe methodologies -- Contribute to the complete rewrite of the application UI from Flash to Angular -- Ensure accessibility and OWASP standards are met Write unit tests using Jasmine to increase code coverage to a minimum of 90%",
  },
];

function App() {
  const [experienceEntry, setExperienceEntry] = useState([]);
  return (
    <Container maxWidth="md">
      <VisitorCounter visitorCount={visitorCount} />
      <Box
        sx={{
          backgroundColor: "primary.dark"
        }}
      >
        
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
          <ExperienceEntry experienceEntry={experienceEntry} />
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
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Education
        </Typography>
      </Box>
      </Container>
  );
}

export default App;
