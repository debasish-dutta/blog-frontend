import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Admin from "./pages/admin";


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
      <Route path="/blog" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/podcast" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
