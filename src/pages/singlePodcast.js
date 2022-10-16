import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Divider, Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Poly from "../components/Poly";
import SinglePodcast from "../components/SinglePodcast";
import { getPodcast } from "../redux/slice/PodcastSlice";

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

const SinglePodcastPost = ({ darkMode }) => {
  const classes = useStyles();
    

    const dispatch = useDispatch();
    const podcast = useSelector((state) => ( state.podcasts )).podcasts;
    const { slug } = useParams();
    useEffect(() => {
      if(slug) {
        dispatch(getPodcast(slug));
      }
    }, [slug]);
  
    console.log("aaa");
    console.log( podcast );
    console.log( slug );

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
          <Poly darkMode={darkMode} title={podcast.title} />
          <Divider sx={{ display: { xs: "none", md: "flex" }, bgcolor: "gray" }} />
          <main container className={"darkMode" ? classes.invert : classes.default}>
            

            <SinglePodcast {...podcast}/>
            <h3>{podcast.title}</h3>
          </main>
          <Footer darkMode={darkMode} />
        </ThemeProvider>
      );
    };
    
export default SinglePodcastPost;