import * as React from "react";
import Topbar from "./components/Topbar";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  const [darkMode, setDarkMode] = React.useState(() => {
    const localData = localStorage.getItem("darkMode");
    return localData ? JSON.parse(localData) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HomePage darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} setDarkMode={setDarkMode} />
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default App;
