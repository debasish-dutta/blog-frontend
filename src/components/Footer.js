import React from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/material";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { styled } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import BookIcon from "@mui/icons-material/Book";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PersonIcon from "@mui/icons-material/Person";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const drawerWidth = 240;

const page = [
  { id: "1", title: "Blog", icon: <BookIcon /> },
  { id: "2", title: "Podcast", icon: <PodcastsIcon /> },
  { id: "3", title: "About Me", icon: <PersonIcon /> },
  { id: "4", title: "Contact Me", icon: <ContactPageIcon /> }
];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2
  }
}));

const Footer = ({ darkMode, setDarkMode }) => {
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#ffffff"
      }
    }
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <FormGroup>
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            }
            label={darkMode ? "Dark Mode" : "Light Mode"}
          />
        </FormGroup>
      </Toolbar>
      <Divider />
      {/* <List>
        {page.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <Divider />
      <Toolbar>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <TwitterIcon sx={{ mr: 2 }} />
          <InstagramIcon sx={{ mr: 2 }} />
          <GitHubIcon />
        </Box>
      </Toolbar>
    </div>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" elevation={0} color="primary">
        <Container maxWidth="1">
          <Toolbar disableGutters>
            {/* Desktop Version */}

            <AutoStoriesIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            />
            <Typography
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none"
              }}
            >
              The PodBlog
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* {page.map((page) => (
                <Button
                  key={page.id}
                  sx={{ my: 2, color: "inherit", display: "block" }}
                >
                  {page.title}
                </Button>
              ))} */}
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <TwitterIcon sx={{ mr: 2 }} />
              <InstagramIcon sx={{ mr: 2 }} />
              <GitHubIcon />
              {/* <IconButton
                sx={{ ml: 1 }}
                onClick={() => setDarkMode(!darkMode)}
                color="inherit"
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton> */}
            </Box>

            {/* Mobile Version */}

            <AutoStoriesIcon sx={{ display: { md: "none" }, mr: 2 }} />
            <Typography
              sx={{
                mr: 2,
                display: { md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                flexGrow: "1"
                // fontSize:"1.5rem"
              }}
            >
              The PodBlog
            </Typography>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "block", md: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth
                  }
                }}
              >
                {drawer}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
