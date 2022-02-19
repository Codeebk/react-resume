import { useState } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import ExperienceEntry from './components/experience-entry';

function App() {
  const [experienceEntry, setExperienceEntry] = useState([]);
  return (
    <div className='App'>
    <Box sx={{
      backgroundColor: 'primary.dark', }}>
      <Typography variant="h2" gutterBottom component="div">
        Codee King
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        Software Engineer
      </Typography>
    </Box>
    <Box sx={{
      backgroundColor: 'primary.dark', }}>
    <Typography variant="h5" gutterBottom component="div">
        Technical Skills
      </Typography>
    </Box>
    <Box sx={{
      backgroundColor: 'primary.dark', }}>
    <Typography variant="h5" gutterBottom component="div">
        Experience
      </Typography>
      <ExperienceEntry experienceEntry={experienceEntry}/>

    </Box>
    <Box sx={{
      backgroundColor: 'primary.dark', }}>
    <Typography variant="h5" gutterBottom component="div">
        Projects
      </Typography>
    </Box>
    <Box sx={{
      backgroundColor: 'primary.dark', }}>
    <Typography variant="h5" gutterBottom component="div">
        Education
      </Typography>
    </Box>
    </div>
  );
}

export default App;
