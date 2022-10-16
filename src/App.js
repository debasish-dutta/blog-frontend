import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Blog from "./pages/blog";
import SingleBlog from "./components/SingleBlog";
import Podcast from "./pages/podcast";
import About from "./pages/about";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import NotFound from "./pages/notFound";


function App() {
  const [darkMode, setDarkMode] = React.useState(() => {
    const localData = localStorage.getItem("darkMode");
    return localData ? JSON.parse(localData) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/blog" element={<Blog darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/blog/:slug" element={<SingleBlog darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/podcast" element={<Podcast darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
