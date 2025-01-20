import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const BookAppointment = React.lazy(() => import("./pages/BookAppointment"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {

  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<div className="loader text-center my-12 text-5xl font-semibold text-primary">Loading...</div>}>
        <Routes>
          <Route path="/doc-online" element={<Home />} />
          <Route path="/doc-online/about-us" element={<AboutUs />} />
          <Route path="/doc-online/booking" element={<BookAppointment />} />
          <Route path="/doc-online/services" element={<Services />} />
          <Route path="/doc-online/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
