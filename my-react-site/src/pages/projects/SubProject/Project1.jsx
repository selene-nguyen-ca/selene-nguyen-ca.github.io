import ProjectCarousel from "./ProjectCarousel";
import { Box, Typography } from "@mui/material";
import ALSSPart1aImage from "../../../assets/ALSS1a.png";
import ALSSPart1bImage from "../../../assets/ALSS1b.png";
import ALSSPart3Image from "../../../assets/ALSS3.png";
import WorkSnapshotImage from "../../../assets/WS.png";
import PULSECHECKDOCUMENT from "../../../assets/documents/PULSE_CHECK_REPORT.pdf";

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
    image: WorkSnapshotImage,
    text: "Work Snapshot Screenshot - for detailed documentation of the PULSE CHECK, check PULSE CHECK project tab",
  },
  {
    text: "Sample of the tableu visualization of the data collected from ALSS activities. Presented by Ricky Mahl, AV Lead prepared by me",
    iframeUrl: "https://public.tableau.com/views/Book2_17606364963960/Story1?:showVizHome=no&:embed=true"

  },
  {
     text: "Sample of the report generated from the data collected from ALSS activities. Presented by Ricky Mahl, AV Lead prepared by me",
      iframeUrl: PULSECHECKDOCUMENT
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