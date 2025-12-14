import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Notice from "./pages/Notice";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import AuthRoute from './components/AuthRoute'


const App = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice/:id" element={<Notice />} />
        <Route path="/admin" element={ <AuthRoute> <Admin/> </AuthRoute> } />
        <Route path="/page-not-found" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default App;