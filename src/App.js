import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Materi from "./pages/materi";
import DetailMateri from "./pages/detailMateri";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Materi />} />
        <Route path="/materi/:id" element={<DetailMateri />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
