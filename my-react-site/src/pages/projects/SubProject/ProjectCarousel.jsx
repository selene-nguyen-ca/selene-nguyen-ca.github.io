import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ProjectCarousel({ projects = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Don't render anything if there are no projects
  if (projects.length === 0) {
    return null;
  }

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
        height: "100%",
        mx: "auto",
      }}
    >
      {/* Image */}
      {currentProject.image && (
        <Box
          component="img"
          src={currentProject.image}
          alt={currentProject.alt || `Project ${currentIndex + 1}`}
          sx={{
            width: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: "8px",
          }}
        />
      )}

      {/* Iframe */}
      {currentProject.iframeUrl && (
        <Box
          sx={{
            width: "100%",
            height: "500px",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <Box
            component="iframe"
            src={currentProject.iframeUrl}
            title={currentProject.iframeTitle || `Project ${currentIndex + 1}`}
            sx={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
          />
        </Box>
      )}

      {/* Text */}
      {currentProject.text && (
        <Typography
          sx={{
            mt: 3,
            fontSize: "40px",
            lineHeight: 1.6,
            color: "#000000",
          }}
        >
          {currentProject.text}
        </Typography>
      )}

      {/* Previous Button */}
      {projects.length > 1 && (
        <IconButton
          onClick={previousSlide}
          aria-label="Previous project"
          sx={{
            position: "absolute",
            left: "1px",
            top: "50%",
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
      )}

      {/* Next Button */}
      {projects.length > 1 && (
        <IconButton
          onClick={nextSlide}
          aria-label="Next project"
          sx={{
            position: "absolute",
            right: "15px",
            top: "50%",
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
      )}
    </Box>
  );
}

export default ProjectCarousel;