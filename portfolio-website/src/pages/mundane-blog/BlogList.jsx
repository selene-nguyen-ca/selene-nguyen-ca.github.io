import { Box, Container, Typography, Chip, Stack } from "@mui/material";

function BlogList() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        py: 8,
        color: "black"
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 3,
            color: "text.secondary",
          }}
        >
          A little unemployment project
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 50,
            mt: 1,
            mb: 3,
            color: "black"
          }
        }

        >
          Between Jobs. Create Anyway.
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            fontWeight: 400,
            mb: 4,
            textAlign: "left"
          }}
        >
          I’m currently in an unemployment era — so I figured I might as well
          make something out of it. This is a collection of personal thoughts,
          tiny experiments, things I’m learning, and mini projects I build
          along the way.
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Personal Blogs" variant="outlined" />
          <Chip label="Mini Projects" variant="outlined" />
          <Chip label="That one unemployed friend" variant="outlined" />
          <Chip label="#Honestly-Need-This-To-Be-Creative-Again" variant="outlined" />
        </Stack>
      </Container>
    </Box>
  );
}

export default BlogList;