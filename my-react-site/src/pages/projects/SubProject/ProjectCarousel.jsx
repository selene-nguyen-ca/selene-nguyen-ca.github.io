import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


function ProjectCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % projects.length
    );
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "900px",
        mx: "auto",
      }}
    >
      {/* Carousel Content */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={currentProject.image}
          alt={`Project ${currentIndex + 1}`}
          sx={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <Typography
          sx={{
            mt: 3,
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          {currentProject.text}
        </Typography>
      </Box>

      {/* Previous Button */}
      <IconButton
        onClick={previousSlide}
        aria-label="Previous project"
        sx={{
          position: "absolute",
          left: "15px",
          top: "250px",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "#eeeeee",
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={nextSlide}
        aria-label="Next project"
        sx={{
          position: "absolute",
          right: "15px",
          top: "250px",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "#eeeeee",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

export default ProjectCarousel;