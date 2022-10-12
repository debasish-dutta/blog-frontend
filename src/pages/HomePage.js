import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Divider, Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import lappy from "../images/lappy.jpg";
import { makeStyles } from "@mui/styles";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Poly from "../components/Poly";
import BlogCard from "../components/BlogCard";

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

const HomePage = ({ darkMode }) => {
  // const posts = useSelector((state) => state.posts);
  // console.log({ posts });

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
          <Container maxWidth="1">Top Blog Posts</Container>
        <BlogCard/>
        <BlogCard/>
          <Container maxWidth="1">Top Podcasts</Container>
        <BlogCard/>
        <BlogCard/>
      </Grid>
      <Footer darkMode={darkMode} />
    </ThemeProvider>
  );
};

export default HomePage;
