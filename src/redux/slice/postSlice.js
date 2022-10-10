import { createSlice } from "@reduxjs/toolkit";
import Lappy from "../../images/lappy.jpg"

const initialState = [
    {id:"1", title:"Learing how to code", content:"Download the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS code", icon:<Lappy/>},
    {id:"2", title:"Learing how to cod", content:"Download the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS code", icon:<Lappy/>},
    {id:"3", title:"Learing how to co", content:"Download the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS code", icon:<Lappy/>},
    {id:"4", title:"Learing how to c", content:"Download the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS code", icon:<Lappy/>},
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{}
})

export default postsSlice.reducer