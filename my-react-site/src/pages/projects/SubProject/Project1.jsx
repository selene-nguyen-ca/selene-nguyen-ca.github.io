import ProjectCarousel from "./ProjectCarousel";
import { Box, Typography } from "@mui/material";
import ALSSPart1aImage from "../../../assets/ALSS1a.png";
import ALSSPart1bImage from "../../../assets/ALSS1b.png";
import ALSSPart3Image from "../../../assets/ALSS3.png";


const projects = [
  {
    image: ALSSPart1aImage,
    text: "ALSS: Part 1a - The Business Scenario",
  },
  {
    image: ALSSPart1bImage,
    text: "ALSS: Part 1b - The First Pulse",
  },
  {
    image: ALSSPart3Image,
    text: "ALSS: Part 2 - Glitter in the Air: the Approval",
  }
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