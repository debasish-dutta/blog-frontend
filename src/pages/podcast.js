import React from "react";
import { useEffect,useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Divider, Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Poly from "../components/Poly";
import PodcastCard from "../components/PodcastCard";
import { getPodcasts } from "../redux/slice/PodcastSlice";

  
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

const Podcast = ({ darkMode }) => {
  const classes = useStyles();
  // const [posts, setPost] = useState();

  // useEffect(() => {
  //   fetch(baseURL).then((response) => response.json())
  //   .then((data) => console.log(data));
  // }, []);

  const podcasts = useSelector((state) => (state.podcasts ));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPodcasts());
  }, []);

  console.log( podcasts );


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

        {podcasts.podcasts.map((item) => <PodcastCard {...item} />)}

      </Grid>
      <Footer darkMode={darkMode} />
    </ThemeProvider>
  );
};

export default Podcast;
