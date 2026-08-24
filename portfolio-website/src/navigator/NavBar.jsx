import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (value) => () => {
    setOpen(value);
  };

  return (
    <>
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
          }}
        >
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Selene Nguyen
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
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

          {/* Mobile Menu Button */}
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "inherit",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 260,
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
          role="presentation"
        >
          <Button
            component={Link}
            to="/"
            onClick={toggleDrawer(false)}
            sx={{
              color: "inherit",
              justifyContent: "flex-start",
              py: 1.5,
            }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/projects"
            onClick={toggleDrawer(false)}
            sx={{
              color: "inherit",
              justifyContent: "flex-start",
              py: 1.5,
            }}
          >
            Projects
          </Button>

          <Button
            component={Link}
            to="/resume"
            onClick={toggleDrawer(false)}
            sx={{
              color: "inherit",
              justifyContent: "flex-start",
              py: 1.5,
            }}
          >
            Resume
          </Button>

          <Button
            component={Link}
            to="/mundane-blog"
            onClick={toggleDrawer(false)}
            sx={{
              color: "inherit",
              justifyContent: "flex-start",
              py: 1.5,
            }}
          >
            Every Letter I sent you
          </Button>

          <Button
            component={Link}
            to="/contact"
            onClick={toggleDrawer(false)}
            sx={{
              color: "inherit",
              justifyContent: "flex-start",
              py: 1.5,
            }}
          >
            Contact
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;