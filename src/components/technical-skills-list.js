import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function TechnicalSkillsList({ technicalSkills }) {
  return (
    <Box sx={{
      backgroundColor: "primary.light",
    }}>
    <Stack direction="row" spacing={1}>
  
      {technicalSkills.map(skill => 
        <Chip label={skill} />
      )}
    </Stack>
    </Box>
  );
}

export default TechnicalSkillsList;
