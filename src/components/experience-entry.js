import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ExperienceEntry({ experienceEntry }) {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "primary.light",
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          {experienceEntry.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {experienceEntry.description}
        </Typography>
      </Box>
    </div>
  );
}

export default ExperienceEntry;
