import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function GalleryPage() {
  const [galFilter, setGalFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(9);
  const [lightbox, setLightbox] = useState(null);
  const filters = [{
    key: "all",
    label: "All",
    icon: ImageIcon
  }, {
    key: "rooms",
    label: "Rooms & Suites",
    icon: BedDouble
  }, {
    key: "dining",
    label: "Dining",
    icon: UtensilsCrossed
  }, {
    key: "amenities",
    label: "Amenities",
    icon: Waves
  }, {
    key: "experiences",
    label: "Experiences",
    icon: Camera
  }, {
    key: "weddings",
    label: "Weddings",
    icon: Heart
  }, {
    key: "events",
    label: "Events & MICE",
    icon: Briefcase
  }, {
    key: "views",
    label: "Resort Views",
    icon: Sunset
  }];
  const photos = [{
    key: "views",
    name: "Pool at Dusk",
    tone: "navy"
  }, {
    key: "rooms",
    name: "Sea View Bedroom",
    tone: "sand"
  }, {
    key: "dining",
    name: "Beachfront Table Setting",
    tone: "teal"
  }, {
    key: "amenities",
    name: "Lounge Deck at Sunset",
    tone: "navy"
  }, {
    key: "dining",
    name: "Signature Seafood Plate",
    tone: "sand"
  }, {
    key: "rooms",
    name: "Beachfront Cabana",
    tone: "teal"
  }, {
    key: "amenities",
    name: "Spa Treatment",
    tone: "navy"
  }, {
    key: "weddings",
    name: "Beach Mandap Ceremony",
    tone: "sand"
  }, {
    key: "events",
    name: "Conference Boardroom",
    tone: "teal"
  }, {
    key: "views",
    name: "Palm-Lined Pathway",
    tone: "navy"
  }, {
    key: "experiences",
    name: "Sunset Beach Walk",
    tone: "sand"
  }, {
    key: "weddings",
    name: "Reception Table Decor",
    tone: "teal"
  }, {
    key: "rooms",
    name: "Deluxe Garden Room",
    tone: "navy"
  }, {
    key: "dining",
    name: "Chef's Tasting Menu",
    tone: "sand"
  }, {
    key: "amenities",
    name: "Infinity Pool Aerial",
    tone: "teal"
  }, {
    key: "events",
    name: "Gala Dinner Setup",
    tone: "navy"
  }, {
    key: "experiences",
    name: "Kayaking at Mangroves",
    tone: "sand"
  }, {
    key: "views",
    name: "Resort at Golden Hour",
    tone: "teal"
  }];
  const filtered = photos.filter(p => galFilter === "all" || p.key === galFilter);
  const shown = filtered.slice(0, visibleCount);
  return <>

        <section className="page-hero">
          <PhotoPlaceholder label="Gallery — Resort at Sunset" tone="teal" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Gallery</span></div>
              <h1>Moments That<br />Stay With You</h1>
              <p className="lead">A glimpse of luxury, warmth and unforgettable experiences at Bombay Beach Resort.</p>
              <Link to="/rooms" className="btn-gold">Explore Our Resort <ArrowRight size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></Link>

              <div className="hero-quickcard">
                <div className="item"><MapPin size={17} /><div><strong>Stunning Locations</strong><span>Beachfront beauty in every frame</span></div></div>
                <div className="item"><Camera size={17} /><div><strong>Timeless Experiences</strong><span>Captured moments of joy &amp; relaxation</span></div></div>
                <div className="item"><Heart size={17} /><div><strong>Unmatched Hospitality</strong><span>Where every smile tells a story</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="filter-strip" style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        background: "#fff",
        borderRadius: 14,
        padding: 10,
        boxShadow: "0 8px 24px rgba(10,30,50,.06)",
        marginTop: -36,
        position: "relative",
        zIndex: 5
      }}>
            {filters.map(f => <button key={f.key} className={galFilter === f.key ? "active" : ""} onClick={() => {
          setGalFilter(f.key);
          setVisibleCount(9);
        }} style={{
          flex: 1,
          minWidth: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          padding: "14px 8px",
          borderRadius: 10,
          border: "none",
          background: galFilter === f.key ? "var(--pearl)" : "none",
          color: galFilter === f.key ? "var(--navy)" : "#546575",
          fontSize: 12.5,
          fontWeight: 600,
          boxShadow: galFilter === f.key ? "inset 0 -2px 0 var(--gold)" : "none"
        }}>
                <f.icon size={18} strokeWidth={1.4} style={{
            color: "var(--gold-dark)"
          }} /> {f.label}
              </button>)}
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="gallery-toolbar">
              <div>
                <span className="eyebrow">Gallery</span>
                <h2 className="section-heading" style={{
              marginTop: 10
            }}>Explore Our World of Luxury</h2>
                <p style={{
              fontSize: 14,
              color: "#546575",
              marginTop: 8
            }}>Beautiful spaces, exceptional experiences and memories worth cherishing.</p>
              </div>
              <div className="view-toggle">
                <button className="btn-ghost"><Filter size={14} /> View As</button>
                <button className="btn-gold" onClick={() => setLightbox(0)}><PlayCircle size={15} /> View Slideshow</button>
              </div>
            </div>

            <div className="gallery-grid">
              {shown.map((p, i) => <div className={`tile ${i === 0 ? "wide tall" : i === 4 ? "wide" : ""}`} key={p.name + i} onClick={() => setLightbox(i)}>
                  <PhotoPlaceholder label={p.name} tone={p.tone} />
                </div>)}
            </div>

            {visibleCount < filtered.length && <div style={{
          textAlign: "center",
          marginTop: 34
        }}>
                <button className="btn-ghost" onClick={() => setVisibleCount(v => v + 9)}>Load More Photos <ChevronDown size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></button>
              </div>}
          </div>
        </section>

        {lightbox !== null && shown[lightbox] && <div className="lightbox" onClick={() => setLightbox(null)}>
            <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
              <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close"><X size={18} /></button>
              <button className="lightbox__nav prev" onClick={() => setLightbox(i => (i - 1 + shown.length) % shown.length)} aria-label="Previous"><ChevronLeft size={18} /></button>
              <PhotoPlaceholder label={shown[lightbox].name} tone={shown[lightbox].tone} />
              <button className="lightbox__nav next" onClick={() => setLightbox(i => (i + 1) % shown.length)} aria-label="Next"><ChevronRight size={18} /></button>
              <div className="lightbox__caption">{shown[lightbox].name}</div>
            </div>
          </div>}

        <section className="container section--tight">
          <div className="insta-band">
            <div className="insta-band__left">
              <div className="icon-wrap"><Camera size={20} /></div>
              <div>
                <span className="eyebrow" style={{
              fontSize: 11
            }}>Follow Us on Instagram</span>
                <strong>#BombayBeachResort</strong>
                <span>Share your moments with us and get featured.</span>
              </div>
            </div>
            <div className="thumbs">
              {["Pool", "Cocktails", "Sunset Swing", "Aerial View", "Firepit"].map((t, i) => <PhotoPlaceholder key={t} label={t} tone={i % 2 === 0 ? "navy" : "sand"} />)}
            </div>
            <button className="insta-nav" aria-label="More photos"><ChevronRight size={16} /></button>
          </div>
        </section>

        <section className="container section--tight">
          <div className="share-band">
            <PhotoPlaceholder label="Guest Moment Photo" tone="sand" />
            <div className="share-band__scrim" />
            <div className="share-band__content">
              <div className="icon-circle"><Camera size={20} /></div>
              <div><h3>Captured a beautiful moment at our resort?</h3><p>Share your experience with us. We'd love to see it!</p></div>
            </div>
            <div className="share-band__cta"><button className="btn-gold">Share Your Photos <ArrowRight size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></button></div>
          </div>
        </section>

    </>;
}
