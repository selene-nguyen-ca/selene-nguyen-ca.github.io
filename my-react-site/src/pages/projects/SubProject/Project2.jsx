import ProjectCarousel from "./ProjectCarousel";
import { Box, Typography } from "@mui/material";

const projects = [
  {
    image: "https://picsum.photos/800/500?random=1",
    text: "This is the first project description. This can contain information about the project.",
  },
  {
    image: "https://picsum.photos/800/500?random=2",
    text: "This is the second project description. You can talk about your role, tools, and results here.",
  },
  {
    image: "https://picsum.photos/800/500?random=3",
    text: "This is the third project description. Eventually, we can replace this with your actual project content.",
  },
];


function Project1() {
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

export default Project1;