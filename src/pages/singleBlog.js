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

const SinglePost = ({ darkMode }) => {
  const classes = useStyles();
    

    const dispatch = useDispatch();
    const post = useSelector((state) => ( state.posts )).posts;
    const { slug } = useParams();
    useEffect(() => {
      if(slug) {
        dispatch(getBlogPost(slug));
      }
    }, [slug]);
  
    console.log("aaa");
    console.log( post );
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
          <Poly darkMode={darkMode} title={post.title} />
          <Divider sx={{ display: { xs: "none", md: "flex" }, bgcolor: "gray" }} />
          <main container className={"darkMode" ? classes.invert : classes.default}>
            

            <SingleBlog {...post}/>
            <h3>{post.title}</h3>
          </main>
          <Footer darkMode={darkMode} />
        </ThemeProvider>
      );
    };
    
export default SinglePost;