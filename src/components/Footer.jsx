import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Medal } from "lucide-react";
import logoMark from "../assets/logo-mark.webp";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src={logoMark} alt="Bombay Beach Resort emblem" />
              <span className="brand__text">
                <strong style={{ color: "#fff" }}>BOMBAY</strong>
                <small>BEACH RESORT</small>
              </span>
            </Link>
            <p className="addr">Mandarmani Beach, Purba Medinipur,<br />West Bengal 721455, India</p>
            <div className="social-row">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="Tripadvisor">TA</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/rooms">Rooms &amp; Suites</Link></li>
              <li><Link to="/dining">Dining</Link></li>
              <li><Link to="/experiences">Experiences</Link></li>
              <li><Link to="/weddings">Weddings</Link></li>
              <li><Link to="/corporate">Corporate &amp; MICE</Link></li>
              <li><Link to="/amenities">Amenities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/offers">Offers</Link></li>
            </ul>
          </div>

          <div>
            <h4>Information</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <div className="contact-item"><Phone size={15} /> +91 98765 43210</div>
            <div className="contact-item"><Mail size={15} /> info@bombaybeachresort.com</div>
            <div className="contact-item"><MapPin size={15} /> Mandarmani Beach, Purba Medinipur, West Bengal 721455, India</div>
          </div>

          <div>
            <h4>Awards &amp; Recognition</h4>
            <div className="awards-row">
              <div className="award-item"><span className="medal"><Medal size={16} /></span> Tripadvisor 2024 Travellers' Choice</div>
              <div className="award-item"><span className="medal"><Medal size={16} /></span> Luxury Coastal Resort of the Year 2024</div>
              <div className="award-item"><span className="medal"><Medal size={16} /></span> Best Beach Resort 2024</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">© {new Date().getFullYear()} Bombay Beach Resort. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
