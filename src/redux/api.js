import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4001" });

export const getBlogPosts = () => API.get("/api/blog");
export const getBlogPost = (slug) => API.get(`/api/blog/${slug}`);

export const getPodcasts = () => API.get("/api/podcast");
export const getPodcast = (slug) => API.get(`/api/podcast/${slug}`);
