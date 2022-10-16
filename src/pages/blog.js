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
import BlogCard from "../components/BlogCard";
import { getBlogPosts } from "../redux/slice/BlogPostSlice";


  
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

const title = "All Blog Posts";
const Blog = ({ darkMode }) => {
  const classes = useStyles();
  // const [posts, setPost] = useState();

  // useEffect(() => {
  //   fetch(baseURL).then((response) => response.json())
  //   .then((data) => console.log(data));
  // }, []);

  const blogs = useSelector((state) => ( state.posts ));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPosts());
  }, []);

  console.log( blogs );


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
      <Poly darkMode={darkMode} title={title} />
      <Divider sx={{ display: { xs: "none", md: "flex" }, bgcolor: "gray" }} />
      <Grid container className={"darkMode" ? classes.invert : classes.default}>
        {/* {posts.length === 0 && (
          <Typography
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "1.5rem"
          }}
        >
          No Posts Found
        </Typography>
        )} */}
        {blogs.posts.map((item) => <BlogCard {...item} />)}
        {/* {posts.posts.blogs.map((item, index) => console.log(item))} */}
        {/* { console.log(posts.blogs )} */}
      </Grid>
      <Footer darkMode={darkMode} />
    </ThemeProvider>
  );
};

export default Blog;
