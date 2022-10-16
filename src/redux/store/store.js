import { configureStore } from "@reduxjs/toolkit";
import blogPostReducer from "../slice/BlogPostSlice";
import PodcastReducer from "../slice/PodcastSlice";

export default configureStore({
  reducer: {
    posts: blogPostReducer,
    podcasts: PodcastReducer
  },
});
