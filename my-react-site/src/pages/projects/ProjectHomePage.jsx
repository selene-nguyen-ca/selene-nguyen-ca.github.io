import { Box, Typography, Link, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const projects = [
  {
    title: "Project #1",
    image: "https://picsum.photos/500/350?random=1",
    link: "/projects/project-1",
  },
  {
    title: "Project #2",
    image: "https://picsum.photos/500/350?random=2",
    link: "/projects/project-2",
  },
  {
    title: "Project #3",
    image: "https://picsum.photos/500/350?random=3",
    link: "/projects/project-3",
  },
  {
    title: "Project #4",
    image: "https://picsum.photos/500/350?random=4",
    link: "/projects/project-4",
  },
];

function ProjectsHome() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        px: {
          xs: 3,
          md: 8,
        },
        py: 8,

        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: {
            xs: "48px",
            md: "72px",
          },
          fontWeight: 400,
          color: "#000000",
          mb: 3,
        }}
      >
        Projects
      </Typography>

      {/* Horizontal Divider */}
      <Divider
        sx={{
          borderColor: "#000000",
          borderBottomWidth: "1px",
          mb: 6,
        }}
      />

      {/* Project Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          width: "100%",
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 20px)",
                md: "calc(33.333% - 27px)",
              },
            }}
          >
            {/* Thumbnail */}
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "100%",
                aspectRatio: "4 / 3",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Project Title */}
            <Typography
              sx={{
                mt: 2,
                fontSize: "20px",
                fontWeight: 500,
                color: "#000000",
              }}
            >
              {project.title}
            </Typography>

            {/* Project Link */}
            <Link
              component={RouterLink}
              to={project.link}
              underline="hover"
              sx={{
                display: "inline-block",
                mt: 0.5,
                fontSize: "16px",
                color: "#000000",

                "&:hover": {
                  color: "#555555",
                },
              }}
            >
              View Project →
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ProjectsHome;