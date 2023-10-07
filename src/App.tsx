import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Search from "./page/Search";
import Watch from "./page/Watch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/watch/:id" element={<Watch />} />
    </Routes>
  );
};

export default App;
