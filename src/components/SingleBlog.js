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

const SingleBlog = ({title, subtitle, content, image, tags, createdAt, _id}) => {
    return(
        <article>
            <h2>{title}</h2>
            <img src={lappy} alt={image} srcset=""/>
            <h4>{subtitle}</h4>
            <p>{createdAt}</p>
            <p>{content}</p>
            {/* {tags.map((item) => <p> {item} </p>)} */}
            
        </article>
    );
};

export default SingleBlog;