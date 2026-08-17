import { Box, Typography, Link, Divider } from "@mui/material";

function ContactCard() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "700px",
          p: 4,
          backgroundColor: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: "36px",
            color: "black",
            mb: 2,
          }}
        >
          Contact
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "14px", color: "#777", mb: 0.5 }}>
              Email
            </Typography>

            <Link
              href="mailto:moorselene@gmail.com"
              underline="hover"
              sx={{ color: "black", fontSize: "18px" }}
            >
              moorselene@gmail.com
            </Link>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "14px", color: "#777", mb: 0.5 }}>
              Website
            </Typography>

            <Link
              href="https://selene-nguyen-ca.github.io"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: "black", fontSize: "18px" }}
            >
              selene-nguyen-ca.github.io
            </Link>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "14px", color: "#777", mb: 0.5 }}>
              LinkedIn
            </Typography>

            <Link
              href="https://www.linkedin.com/in/selenenguyen0976"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: "black", fontSize: "18px" }}
            >
              linkedin.com/in/selenenguyen0976
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactCard;