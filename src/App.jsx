import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import RoomsSuites from "./pages/RoomsSuites";
import Dining from "./pages/Dining";
import Amenities from "./pages/Amenities";
import Experiences from "./pages/Experiences";
import Weddings from "./pages/Weddings";
import Corporate from "./pages/Corporate";
import Offers from "./pages/Offers";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsSuites />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookNow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
