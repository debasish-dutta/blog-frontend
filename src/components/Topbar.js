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
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { styled } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BookIcon from "@mui/icons-material/Book";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PersonIcon from "@mui/icons-material/Person";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles } from "@mui/styles";
import SvgIcon from '@mui/material/SvgIcon';
// import logoSvg from "../images/dd_l.svg";

const drawerWidth = 240;

const page = [
  { id: "1", title: "Blog", icon: <BookIcon />, route: "/blog" },
  { id: "2", title: "Podcast", icon: <PodcastsIcon />, route: "/podcast" },
  { id: "3", title: "About Me", icon: <PersonIcon />, route: "/about" },
  { id: "4", title: "Contact Me", icon: <ContactPageIcon />, route: "/contact" }
];

function HomeIcon() {
  return (
    <SvgIcon>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path cx="321.5" cy="321.5" r="319.5" fill="#D4F1FE" stroke="url(#paint0_radial_0_1)" d="M23.925 12A11.925 11.925 0 0 1 12 23.925A11.925 11.925 0 0 1 0.075 12A11.925 11.925 0 0 1 23.925 12z" strokeWidth="0.03732503888024884"/><path d="M5.089 17.533c-0.246 0 -0.496 -0.016 -0.753 -0.048 -0.673 -0.085 -1.169 -0.283 -1.489 -0.592 -0.31 -0.32 -0.464 -0.662 -0.464 -1.025 0 -0.395 0.171 -0.753 0.512 -1.073 0.352 -0.32 0.849 -0.48 1.489 -0.48 0.427 0 0.891 0.085 1.393 0.256 0.213 0.064 0.475 0.176 0.785 0.336a25.853 25.853 0 0 1 0.945 0.464c0.31 0.16 0.55 0.288 0.721 0.384 0.47 -0.459 0.902 -0.987 1.297 -1.585 0.406 -0.608 0.79 -1.254 1.153 -1.938 0.363 -0.694 0.731 -1.393 1.105 -2.098 0.374 -0.705 0.763 -1.388 1.169 -2.05 0.416 -0.673 0.875 -1.286 1.377 -1.841 -0.555 -0.342 -1.169 -0.603 -1.841 -0.785 -0.662 -0.192 -1.345 -0.288 -2.05 -0.288 -0.267 0 -0.539 0.016 -0.817 0.048a11.72 11.72 0 0 0 -0.817 0.128c-0.993 0.213 -1.831 0.555 -2.514 1.025 -0.683 0.459 -1.201 0.966 -1.553 1.521 -0.342 0.544 -0.512 1.062 -0.512 1.553 0 0.363 0.096 0.683 0.288 0.961 0.192 0.278 0.486 0.475 0.881 0.592 0.288 0.085 0.539 0.128 0.753 0.128 0.352 0 0.657 -0.069 0.913 -0.208 0.267 -0.149 0.491 -0.331 0.673 -0.544 0.181 -0.213 0.315 -0.422 0.4 -0.624 0.096 -0.203 0.149 -0.368 0.16 -0.496 0 -0.075 0.048 -0.112 0.144 -0.112 0.149 0 0.208 0.091 0.176 0.272 -0.053 0.427 -0.213 0.801 -0.48 1.121 -0.267 0.31 -0.587 0.555 -0.961 0.737 -0.374 0.171 -0.758 0.256 -1.153 0.256 -0.256 0 -0.523 -0.043 -0.801 -0.128 -0.491 -0.171 -0.907 -0.464 -1.249 -0.881 -0.331 -0.427 -0.496 -0.929 -0.496 -1.505 0 -0.566 0.187 -1.132 0.56 -1.697 0.384 -0.576 0.993 -1.094 1.825 -1.553 0.833 -0.459 1.921 -0.785 3.267 -0.977a9.612 9.612 0 0 1 1.361 -0.096c0.758 0 1.5 0.091 2.226 0.272 0.737 0.181 1.43 0.443 2.082 0.785l0.4 -0.464c0.096 -0.085 0.23 -0.192 0.4 -0.32a16.288 16.288 0 0 1 0.544 -0.368c0.181 -0.117 0.315 -0.192 0.4 -0.224 0.139 -0.053 0.251 -0.08 0.336 -0.08 0.064 0 0.096 0.016 0.096 0.048 0 0.075 -0.085 0.165 -0.256 0.272a1.65 1.65 0 0 0 -0.288 0.256c-0.085 0.085 -0.149 0.155 -0.192 0.208 -0.16 0.224 -0.288 0.406 -0.384 0.544 -0.085 0.139 -0.203 0.32 -0.352 0.544 0.982 0.651 1.783 1.494 2.402 2.53 0.619 1.025 0.929 2.199 0.929 3.523 0 0.278 -0.016 0.56 -0.048 0.849 -0.064 0.683 -0.251 1.302 -0.56 1.857s-0.715 1.025 -1.217 1.409c-0.491 0.384 -1.041 0.678 -1.649 0.881 -0.598 0.213 -1.228 0.32 -1.889 0.32a5.689 5.689 0 0 1 -0.737 -0.048c-1.046 -0.128 -1.911 -0.299 -2.594 -0.512 -0.673 -0.203 -1.265 -0.416 -1.777 -0.64 -0.971 0.801 -2.06 1.201 -3.267 1.201Zm8.102 -0.48c0.854 0 1.607 -0.181 2.258 -0.544 0.662 -0.374 1.196 -0.859 1.601 -1.457 0.406 -0.598 0.646 -1.244 0.721 -1.938a6.191 6.191 0 0 0 0.048 -0.769c0 -1.164 -0.251 -2.22 -0.753 -3.17 -0.491 -0.961 -1.142 -1.767 -1.954 -2.418 -0.47 0.737 -0.955 1.516 -1.457 2.338a186.811 186.811 0 0 1 -1.489 2.45c-0.502 0.801 -0.993 1.543 -1.473 2.226 -0.47 0.683 -0.913 1.249 -1.329 1.697 -0.075 0.064 -0.171 0.16 -0.288 0.288 -0.107 0.117 -0.219 0.213 -0.336 0.288 0.502 0.224 1.073 0.427 1.713 0.608s1.393 0.31 2.258 0.384c0.096 0.011 0.176 0.016 0.24 0.016h0.24Zm-8.455 -0.016c0.587 0.032 1.137 -0.037 1.649 -0.208a5.523 5.523 0 0 0 1.425 -0.753 111.784 111.784 0 0 1 -1.169 -0.56c-0.395 -0.203 -0.811 -0.384 -1.249 -0.544 -0.288 -0.096 -0.544 -0.144 -0.769 -0.144 -0.395 0 -0.694 0.112 -0.897 0.336 -0.203 0.213 -0.304 0.454 -0.304 0.721 0 0.288 0.112 0.55 0.336 0.785 0.224 0.224 0.55 0.347 0.977 0.368Z" fill="#00BBEF"/><path d="M7.763 17.898c-0.257 0 -0.52 -0.017 -0.788 -0.05 -0.704 -0.089 -1.223 -0.296 -1.559 -0.62 -0.324 -0.335 -0.486 -0.693 -0.486 -1.073 0 -0.413 0.179 -0.788 0.536 -1.123 0.369 -0.335 0.888 -0.503 1.559 -0.503 0.447 0 0.933 0.089 1.458 0.268 0.223 0.067 0.497 0.184 0.821 0.352a27.059 27.059 0 0 1 0.989 0.486c0.324 0.168 0.575 0.302 0.754 0.402 0.492 -0.48 0.944 -1.033 1.357 -1.659 0.425 -0.637 0.827 -1.313 1.207 -2.028a442.284 442.284 0 0 1 1.156 -2.195c0.391 -0.737 0.799 -1.452 1.223 -2.145 0.436 -0.704 0.916 -1.346 1.441 -1.927 -0.581 -0.358 -1.223 -0.631 -1.927 -0.821 -0.693 -0.201 -1.408 -0.302 -2.145 -0.302 -0.279 0 -0.564 0.017 -0.855 0.05a12.261 12.261 0 0 0 -0.855 0.134c-1.039 0.223 -1.916 0.581 -2.631 1.073 -0.715 0.48 -1.257 1.011 -1.626 1.592 -0.357 0.57 -0.536 1.112 -0.536 1.626 0 0.38 0.101 0.715 0.302 1.006 0.201 0.291 0.508 0.497 0.922 0.62 0.302 0.089 0.564 0.134 0.788 0.134 0.369 0 0.687 -0.073 0.955 -0.218 0.279 -0.156 0.514 -0.346 0.704 -0.57 0.19 -0.223 0.33 -0.441 0.419 -0.654 0.101 -0.212 0.156 -0.385 0.168 -0.52 0 -0.078 0.05 -0.117 0.151 -0.117 0.156 0 0.218 0.095 0.184 0.285 -0.056 0.447 -0.223 0.838 -0.503 1.173 -0.279 0.324 -0.614 0.581 -1.006 0.771 -0.391 0.179 -0.793 0.268 -1.207 0.268 -0.268 0 -0.547 -0.045 -0.838 -0.134 -0.514 -0.179 -0.95 -0.486 -1.307 -0.922 -0.346 -0.447 -0.52 -0.972 -0.52 -1.575 0 -0.592 0.196 -1.184 0.587 -1.776 0.402 -0.603 1.039 -1.145 1.911 -1.626 0.871 -0.48 2.011 -0.821 3.419 -1.022a10.06 10.06 0 0 1 1.425 -0.101c0.793 0 1.57 0.095 2.329 0.285 0.771 0.19 1.497 0.464 2.179 0.821l0.419 -0.486c0.101 -0.089 0.24 -0.201 0.419 -0.335a17.105 17.105 0 0 1 0.57 -0.385c0.19 -0.123 0.33 -0.201 0.419 -0.235 0.145 -0.056 0.263 -0.084 0.352 -0.084 0.067 0 0.101 0.017 0.101 0.05 0 0.078 -0.089 0.173 -0.268 0.285a1.728 1.728 0 0 0 -0.302 0.268c-0.089 0.089 -0.156 0.162 -0.201 0.218 -0.168 0.235 -0.302 0.425 -0.402 0.57 -0.089 0.145 -0.212 0.335 -0.369 0.57 1.028 0.682 1.866 1.564 2.514 2.648 0.648 1.073 0.972 2.302 0.972 3.687 0 0.291 -0.017 0.587 -0.05 0.888 -0.067 0.715 -0.263 1.363 -0.587 1.944 -0.324 0.581 -0.749 1.073 -1.274 1.475 -0.514 0.402 -1.089 0.709 -1.726 0.922 -0.626 0.223 -1.285 0.335 -1.978 0.335 -0.257 0 -0.514 -0.017 -0.771 -0.05 -1.095 -0.134 -2 -0.313 -2.715 -0.536 -0.704 -0.212 -1.324 -0.436 -1.86 -0.67 -1.017 0.838 -2.156 1.257 -3.419 1.257Zm8.48 -0.503c0.894 0 1.681 -0.19 2.363 -0.57 0.693 -0.391 1.251 -0.899 1.676 -1.525 0.425 -0.626 0.676 -1.302 0.754 -2.028a6.479 6.479 0 0 0 0.05 -0.804c0 -1.218 -0.263 -2.324 -0.788 -3.318 -0.514 -1.006 -1.195 -1.849 -2.045 -2.531 -0.492 0.771 -1 1.587 -1.525 2.447a195.086 195.086 0 0 1 -1.559 2.564c-0.525 0.838 -1.039 1.614 -1.542 2.329 -0.492 0.715 -0.955 1.307 -1.391 1.776 -0.078 0.067 -0.179 0.168 -0.302 0.302 -0.112 0.123 -0.229 0.223 -0.352 0.302 0.525 0.235 1.123 0.447 1.793 0.637s1.458 0.324 2.363 0.402c0.101 0.011 0.184 0.017 0.251 0.017h0.251Zm-8.849 -0.017c0.615 0.034 1.19 -0.039 1.726 -0.218a5.78 5.78 0 0 0 1.492 -0.788 117.487 117.487 0 0 1 -1.223 -0.587c-0.413 -0.212 -0.849 -0.402 -1.307 -0.57 -0.302 -0.101 -0.57 -0.151 -0.804 -0.151 -0.413 0 -0.726 0.117 -0.939 0.352 -0.212 0.223 -0.318 0.475 -0.318 0.754 0 0.302 0.117 0.575 0.352 0.821 0.235 0.235 0.575 0.363 1.022 0.385Z" fill="#011987"/></svg>
    </SvgIcon>
  );
}

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
  }
}));

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
        backgroundImage: `url('data:image/svg+xml;utf8,<svg height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
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
      backgroundImage: `url('data:image/svg+xml;utf8,<svg height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
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

const Topbar = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();
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
      <List>
        {page.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton href={text.route}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
          {/* <TwitterIcon sx={{ mr: 2 }} />
          <InstagramIcon sx={{ mr: 2 }} />
          <GitHubIcon /> */}
        </Box>
      </Toolbar>
    </div>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{p:0}} position="static" elevation={0} color="primary">
        <Container maxWidth="1">
          <Toolbar disableGutters>
            {/* Desktop Version */}

            {/* <AutoStoriesIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            /> */}
            <HomeIcon sx={{pr:1}} href= "/" />
            {/* <SvgIcon component={logoSvg} /> */}
            <Typography
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              href= "/"
            >
              
            <a sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }} href="/"> The PodBlog </a>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {page.map((page) => (
                <Button
                  className={classes.link}
                  key={page.id}
                  sx={{ my: 2, color: "inherit", display: "block" }}
                  href={page.route}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {/* <TwitterIcon sx={{ mr: 2 }} />
              <InstagramIcon sx={{ mr: 2 }} />
              <GitHubIcon /> */}
              <IconButton
                sx={{ ml: 1 }}
                onClick={() => setDarkMode(!darkMode)}
                color="inherit"
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
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

export default Topbar;
