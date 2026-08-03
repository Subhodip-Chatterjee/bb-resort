import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileBookBar() {
  return (
    <div className="mobile-book-bar">
      <a href="tel:+919876543210" className="icon" aria-label="Call"><Phone size={17} /></a>
      <a href="https://wa.me/919876543210" className="icon" aria-label="WhatsApp"><MessageCircle size={17} /></a>
      <Link to="/book" className="btn-gold">Book Now</Link>
    </div>
  );
}
