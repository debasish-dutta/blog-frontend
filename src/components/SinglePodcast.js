import React from "react";
import { Box, Grid, Typography, ThemeProvider, createTheme } from "@mui/material";

import lappy from "../images/lappy.jpg";


const SinglePodcast = ({title, subtitle, audio, image, tags, createdAt, _id}) => {
    return(
        <article>
            <h2>{title}</h2>
            <img src={lappy} alt={image} srcset=""/>
            <h4>{subtitle}</h4>
            <p>{createdAt}</p>
            <p>{audio}</p>
            {/* {tags.map((item) => <p> {item} </p>)} */}
            
        </article>
    );
};

export default SinglePodcast;