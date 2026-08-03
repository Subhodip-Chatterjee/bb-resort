import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import logoMark from "../assets/logo-mark.webp";

const NAV_LINKS = [
  { label: "Stay", key: "stay" },
  { label: "Dining", key: "dining" },
  { label: "Experiences", href: "/experiences" },
  { label: "Weddings", href: "/weddings" },
  { label: "Corporate", href: "/corporate" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/offers" },
  { label: "About", href: "/about" },
];

const STAY_MENU = [
  { label: "All Rooms & Suites", href: "/rooms" },
  { label: "Deluxe Room", href: "/rooms#deluxe" },
  { label: "Premium Sea View", href: "/rooms#sea-view" },
  { label: "Beachfront Suite", href: "/rooms#beachfront" },
  { label: "Family Room", href: "/rooms#family" },
  { label: "Compare Rooms", href: "/rooms#compare" },
];

const DINING_MENU = [
  { label: "Restaurant", href: "/dining#restaurant" },
  { label: "Bistro", href: "/dining#bistro" },
  { label: "Breakfast Experience", href: "/dining#breakfast" },
  { label: "Seafood Specialties", href: "/dining#seafood" },
  { label: "Private Dining", href: "/dining#private" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  const isStayActive = location.pathname.startsWith("/rooms");
  const isDiningActive = location.pathname.startsWith("/dining");

  function isItemCurrent(item) {
    if (item.key === "stay") return isStayActive;
    if (item.key === "dining") return isDiningActive;
    return location.pathname === item.href;
  }

  return (
    <>
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container">
          <Link to="/" className="brand">
            <img src={logoMark} alt="Bombay Beach Resort emblem" />
            <span className="brand__text">
              <strong>BOMBAY</strong>
              <small>BEACH RESORT</small>
            </span>
          </Link>

          <nav className="nav-desktop">
            {NAV_LINKS.map((item) => (
              <div className={`nav-item ${isItemCurrent(item) ? "is-current" : ""}`} key={item.label}>
                {item.key ? (
                  <>
                    <button type="button">
                      {item.label} <ChevronDown size={15} />
                    </button>
                    <div className="dropdown">
                      {(item.key === "stay" ? STAY_MENU : DINING_MENU).map((sub) => (
                        <Link to={sub.href} key={sub.label}>{sub.label}</Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.href}>{item.label}</Link>
                )}
              </div>
            ))}
          </nav>

          <div className="header-utility">
            <Link to="/book" className="btn-gold">Book Now</Link>
            <button className="icon-btn hamburger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <Menu size={19} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-drawer__top">
          <span style={{ color: "#fff", fontFamily: "var(--serif)", fontSize: 18 }}>Bombay Beach Resort</span>
          <button className="icon-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={20} /></button>
        </div>
        <nav>
          {NAV_LINKS.map((item) => (
            <div key={item.label}>
              {item.key ? (
                <>
                  <button
                    className="m-link"
                    onClick={() => setMobileAccordion(mobileAccordion === item.key ? null : item.key)}
                  >
                    {item.label}
                    <ChevronDown size={16} style={{ transform: mobileAccordion === item.key ? "rotate(180deg)" : "none" }} />
                  </button>
                  {mobileAccordion === item.key && (
                    <div className="m-sub">
                      {(item.key === "stay" ? STAY_MENU : DINING_MENU).map((sub) => (
                        <Link to={sub.href} key={sub.label} onClick={() => setMenuOpen(false)}>{sub.label}</Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link className="m-link" to={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
              )}
            </div>
          ))}
        </nav>
        <div className="m-actions">
          <a href="tel:+919876543210"><Phone size={16} /> Call</a>
          <a href="https://wa.me/919876543210"><MessageCircle size={16} /> WhatsApp</a>
        </div>
      </div>
    </>
  );
}
