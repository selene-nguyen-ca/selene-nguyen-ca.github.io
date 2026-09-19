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
          Coming Soon
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
          I truly hate pickles in a burger.
        </Typography>
      </Container>
    </Box>
  );
}

export default BlogList;