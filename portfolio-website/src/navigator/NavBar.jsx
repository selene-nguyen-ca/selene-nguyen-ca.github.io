import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#1e1e1e",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, md: 6 },
          minHeight: { xs: 64, md: 72 },
        }}
      >
        {/* Logo / Name */}
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Selene Nguyen
        </Typography>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button component={Link} to="/" sx={{ color: "inherit" }}>
            Home
          </Button>

          <Button component={Link} to="/projects" sx={{ color: "inherit" }}>
            Projects
          </Button>

          <Button component={Link} to="/resume" sx={{ color: "inherit" }}>
            Resume
          </Button>

          <Button
            component={Link}
            to="/mundane-blog"
            sx={{ color: "inherit" }}
          >
            Every Letter I sent you
          </Button>

          <Button component={Link} to="/contact" sx={{ color: "inherit" }}>
            Contact
          </Button>
        </Box>

        {/* Mobile Menu */}
        <Button
          sx={{
            display: { xs: "flex", md: "none" },
            minWidth: "auto",
            color: "inherit",
          }}
        >
          <MenuIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;