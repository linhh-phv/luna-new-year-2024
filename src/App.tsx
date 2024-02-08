import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./navigations/home";
import About from "./navigations/about";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    textBlue: "#2979ff",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
