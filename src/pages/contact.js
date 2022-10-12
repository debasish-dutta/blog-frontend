import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Divider, Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Poly from "../components/Poly";

const useStyles = makeStyles(() => ({
  invert: {
    background: "white",
    color: "black",
    height: "85vh"
  },
  default: {
    background: "black",
    color: "white",
    height: "85vh"
  }
}));

const About = ({ darkMode }) => {
  const classes = useStyles();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#ffffff"
      }
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Topbar darkMode={darkMode} />
      <Divider sx={{ display: { xs: "none", md: "flex" }, bgcolor: "gray" }} />
      <Poly darkMode={darkMode} />
      <Divider sx={{ display: { xs: "none", md: "flex" }, bgcolor: "gray" }} />
      <Grid container className={"darkMode" ? classes.invert : classes.default}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ pl: { md: 5 }, pt: { md: 5 }, p: { xs: 2 } }}
        >
          <Typography
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem"
            }}
          >
            Contact Me
          </Typography>
          <Typography
            sx={{ fontFamily: "'Oswald', sans-serif", fontWeight: 200 }}
          >
          </Typography>
        </Grid>
      </Grid>
      <Footer darkMode={darkMode} />
    </ThemeProvider>
  );
};

export default About;
