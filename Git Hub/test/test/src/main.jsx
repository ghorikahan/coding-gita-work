import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NoPage from "./components/NoPage.jsx";
import Bootcamp from "./components/Bootcamp.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Backend from "./components/Backend.jsx";
import FrontEnd from "./components/FrontEnd.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Services from "./components/AllServices.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<Services />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/frontend" element={<FrontEnd />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  </ChakraProvider>
);
