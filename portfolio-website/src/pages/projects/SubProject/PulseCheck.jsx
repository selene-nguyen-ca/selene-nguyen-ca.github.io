import ProjectCarousel from "./ProjectCarousel";
import { Box, Typography } from "@mui/material";

const projects = [
    {
    text: "PULSE CHECK: Demo walkthrough",
    iframeUrl:
      "https://www.youtube.com/embed/epjGjK64WAo?si=BKLUzJRHN0ZNJ5kX",
  },
];


function PulseCheck() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: 6,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: "48px",
          mb: 4,
        }}
      >
        Project #1
      </Typography>

      <ProjectCarousel projects={projects} />
    </Box>
  );
}

export default PulseCheck;