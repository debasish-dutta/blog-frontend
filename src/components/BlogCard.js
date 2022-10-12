import React from "react";
import { Box, Grid, Typography, ThemeProvider, createTheme } from "@mui/material";

import lappy from "../images/lappy.jpg";

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

const BlogCard = ({title, subtitle, content, image, tags, createdAt, _id}) => {
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
          <Typography>
            {tags}
          </Typography>
        </Grid>
    );
};

export default BlogCard;