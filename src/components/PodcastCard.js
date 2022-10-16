import React from "react";
import { Box, Grid, Typography, ThemeProvider, createTheme } from "@mui/material";

import lappy from "../images/lappy.jpg";

const podcasts =
{
  "_id": "634be1288d28c48c5ba57702",
  "title": "podcast ",
  "subtitle": "post post",
  "audio": "this is a new audio link",
  "image": "qsc",
  "tags": [
      "Express",
      "Podcast"
  ],
  "createdAt": "2022-10-16T10:47:04.078Z",
  "slug": "podcast",
  "__v": 0
};

const PodcastCard = ({title, subtitle, audio, image, tags, createdAt, _id}) => {
    return(
        <Grid
          item
          xs={12}
          md={6}
          sx={{ pl: { md: 5 }, pt: { md: 5 }, p: { xs: 2 } }}
        >
          <img
            src={lappy}
            alt={title}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "5px"
            }}
          />
          <Typography>{createdAt}</Typography>
          <Typography
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem"
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontFamily: "'Oswald', sans-serif", fontWeight: 200 }}
          >
            {subtitle}
          </Typography>
          {/* {tags.map((item) => <Typography> {item} </Typography>)} */}

        </Grid>
    );
};

export default PodcastCard;