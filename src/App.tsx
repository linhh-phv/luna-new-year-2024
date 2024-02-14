import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./navigations/home";
import About from "./navigations/about";
import { ThemeProvider } from "styled-components";
import GourdCrabShrimpFish from "./feature/gourd-crab-shrimp-fish";

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
        <Route path="gourdCrabShrimpFish" element={<GourdCrabShrimpFish />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
