import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Notice from "./pages/Notice";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice/:id" element={<Notice />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default App;
