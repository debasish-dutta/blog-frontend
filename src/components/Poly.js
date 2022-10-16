import React from "react";
import { Box, Grid, Typography, ThemeProvider, createTheme } from "@mui/material";

const Poly = ({ darkMode, setDarkMode, title }) => {
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
            {title}
          </Typography>
        </Grid>
      </Box>
      </ThemeProvider>
);
        };

export default Poly;