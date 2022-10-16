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
import SingleBlog from "../components/SingleBlog";
import { getBlogPost } from "../redux/slice/BlogPostSlice";

const posts =
    {
        "title": "new blog",
        "subtitle": "13",
        "content": "link 1",
        "image": "qsc",
        "tags": [
            "JS",
            "Spotify"
        ],
        "createdAt": "2022-10-10T",
        "_id": "6343f45cd7a23850ee3d16bb",
        "__v": 0
    };

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

  const singlePost = ({ darkMode }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {post} = useSelector((state) => ({...state.posts }));
    const { slug } = useParams();
    useEffect(() => {
      if(slug) {
        dispatch(getBlogPost(slug));
      }
    }, [slug]);
  
    console.log( post );

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
          <main container className={"darkMode" ? classes.invert : classes.default}>
            

            <SingleBlog {...posts}/>
            <h3>{posts.title}</h3>
          </main>
          <Footer darkMode={darkMode} />
        </ThemeProvider>
      );
    };
    
    export default singlePost;