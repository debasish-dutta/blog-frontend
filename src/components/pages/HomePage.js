import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Divider, Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import lappy from "../../images/lappy.jpg";
import { makeStyles } from "@mui/styles";

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
  const posts = useSelector((state) => state.posts);
  console.log({ posts });

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
      <Divider sx={{ display: { xs: "none", md: "flex" }, bgcolor: "gray" }} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          height: "30vh"
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontFamily: "'Rubik Mono One', sans-serif",
              fontSize: { xs: "2rem", md: "4rem" }
            }}
          >
            The PodBlog
          </Typography>
        </Grid>
      </Box>
      <Divider sx={{ display: { xs: "none", md: "flex" }, bgcolor: "gray" }} />
      <Grid container className={"darkMode" ? classes.invert : classes.default}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ pl: { md: 5 }, pt: { md: 5 }, p: { xs: 2 } }}
        >
          <img
            src={lappy}
            alt={lappy}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "5px"
            }}
          />
          <Typography>January 22, 2012</Typography>
          <Typography
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem"
            }}
          >
            {posts[0].title}
          </Typography>
          <Typography
            sx={{ fontFamily: "'Oswald', sans-serif", fontWeight: 200 }}
          >
            {posts[0].content}
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Container maxWidth="1">Top Posts</Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HomePage;
