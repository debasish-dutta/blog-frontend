import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Lappy from "../../images/lappy.jpg";
import * as api from "../api";

// const initialState = [
//     {id:"1", title:"Learing how to code", subtitle:"Subtitle Code", createdAt: "2022 Oct", content:"Download the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS code", icon:<Lappy/>},
//     {id:"2", title:"Learing how to cod", subtitle:"Subtitle Code", createdAt: "2022 Oct", content:"Download the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS code", icon:<Lappy/>},
//     {id:"3", title:"Learing how to co", subtitle:"Subtitle Code", createdAt: "2022 Oct", content:"Download the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS code", icon:<Lappy/>},
//     {id:"4", title:"Learing how to c", subtitle:"Subtitle Code", createdAt: "2022 Oct", content:"Download the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS codeDownload the VS code", icon:<Lappy/>},
// ]


// export const getBlogPosts = createAsyncThunk (
//     "api/blog",
//     async (_, { rejectWithValue }) => {
//         console.log("api call");
//         try {
//             const response = await api.getBlogPosts();
//             console.log("api call");
//           return response.data;
//         } catch (err) {
//           console.log("api call failed");
//           return rejectWithValue(err.response.data);
//         }
//       }
// );

export const getBlogPosts = createAsyncThunk(
    "http://localhost:4000/api/blog",
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.getBlogPosts();
        console.log("api call");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
const blogPostsSlice = createSlice({
    name: "posts",
    initialState:{
        posts: [],
        error: "",
        loading: false,
    },
    extraReducers:{
        [getBlogPosts.pending]: (state, action) => {
            console.log("pending", action);
            state.loading = true;
          },
          [getBlogPosts.fulfilled]: (state, action) => {
            console.log("action", action);
            state.loading = false;
            // console.log("aa: ", action.payload);
            state.posts = action.payload;
          },
          [getBlogPosts.rejected]: (state, action) => {
            console.log("reject", action);
            state.loading = false;
            state.error = action.payload.message;
          },
    }
})

export default blogPostsSlice.reducer;