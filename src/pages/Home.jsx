import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
const FEATURES = [{
  icon: Waves,
  title: "Private Beach",
  desc: "Serene sands and breathtaking views"
}, {
  icon: UtensilsCrossed,
  title: "Fine Dining",
  desc: "Curated cuisine by master chefs"
}, {
  icon: Leaf,
  title: "Wellness & Spa",
  desc: "Rejuvenate your mind, body and soul"
}, {
  icon: Sparkles,
  title: "World Class Service",
  desc: "Personalized hospitality that stays with you"
}];
const ROOMS = [{
  name: "Deluxe Room",
  tag: "Garden View",
  price: "12,999",
  tone: "sand"
}, {
  name: "Premium Sea View",
  tag: "Ocean View",
  price: "18,999",
  tone: "navy"
}, {
  name: "Beachfront Suite",
  tag: "Private Balcony",
  price: "28,999",
  tone: "teal"
}];
const CATEGORIES = [{
  icon: UtensilsCrossed,
  title: "Dining",
  desc: "A culinary journey like no other",
  tone: "navy"
}, {
  icon: Compass,
  title: "Experiences",
  desc: "Adventure, relaxation and more",
  tone: "teal"
}, {
  icon: Heart,
  title: "Weddings",
  desc: "Craft the wedding of your dreams",
  tone: "sand"
}, {
  icon: Building2,
  title: "Corporate Events",
  desc: "Inspire. Connect. Achieve.",
  tone: "navy"
}];
const GALLERY_SHOTS = ["Pool at Dusk", "Sunset Over the Bay", "Palm-Lined Pathway", "Beachfront Deck", "Lobby & Lounge", "Sea View Balcony"];
export default function HomePage() {
  const [muted, setMuted] = useState(true);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [galleryStart, setGalleryStart] = useState(0);
  const visibleGallery = [0, 1, 2].map(i => GALLERY_SHOTS[(galleryStart + i) % GALLERY_SHOTS.length]);
  return <>
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="hero__bg">
            <PhotoPlaceholder label="Hero — Resort Pool at Dusk" tone="navy" className="hero-ph" />
          </div>
          <div className="hero__scrim" />

          <button className="mute-toggle" aria-label={muted ? "Unmute background video" : "Mute background video"} onClick={() => setMuted(m => !m)}>
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <div className="quick-rail">
            <a href="tel:+919876543210"><Phone size={18} /> Call Now</a>
            <a href="https://wa.me/919876543210"><MessageCircle size={18} /> WhatsApp</a>
            <a href="#"><Navigation size={18} /> Directions</a>
          </div>

          <div className="hero__content">
            <div className="container">
              <h1 className="hero__heading">Where Luxury<br />Meets the Sea</h1>
              <p className="hero__sub">
                A private beach resort offering world-class hospitality, exquisite dining
                and unforgettable experiences.
              </p>
              <button className="hero__watch">
                <PlayCircle size={34} strokeWidth={1.2} /> Watch the Experience
              </button>

              <div className="hero__book-row">
                <Link to="/book" className="btn-gold hero__book-now">Book Now</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FEATURES STRIP ============ */}
        <div className="features-wrap container">
          <div className="features-card">
            {FEATURES.map(f => <div className="feature" key={f.title}>
                <div className="icon-wrap"><f.icon size={22} strokeWidth={1.4} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>)}
          </div>
        </div>

        {/* ============ ROOMS ============ */}
        <section className="rooms-section container" id="rooms">
          <div className="rooms-top">
            <div className="heading-block">
              <span className="eyebrow">Stay in Luxury</span>
              <h2 className="section-heading">Designed for Comfort,<br />Curated for You</h2>
            </div>
            <button className="link-arrow">Explore Rooms &amp; Suites <ArrowUpRight size={16} /></button>
          </div>

          <div className="rooms-grid">
            {ROOMS.map(r => <div className="home-room-card" key={r.name}>
                <PhotoPlaceholder label={`${r.name} Photo`} tone={r.tone} />
                <div className="home-room-card__body">
                  <div className="home-room-card__row">
                    <div>
                      <h3>{r.name}</h3>
                      <div className="tag">{r.tag}</div>
                    </div>
                    <button className="home-room-card__arrow" aria-label={`View ${r.name}`}><ArrowUpRight size={16} /></button>
                  </div>
                  <div className="price">From <span>₹{r.price}</span> / night</div>
                </div>
              </div>)}
          </div>
        </section>

        {/* ============ CATEGORIES ============ */}
        <section className="categories-section container">
          <div className="categories-grid">
            {CATEGORIES.map(c => <div className="category-card" key={c.title} id={c.title.toLowerCase().replace(/\s+/g, "")}>
                <PhotoPlaceholder label={`${c.title} Photo`} tone={c.tone} />
                <div className="category-card__scrim" />
                <div className="category-card__badge"><c.icon size={17} strokeWidth={1.5} /></div>
                <div className="category-card__body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <button className="link-arrow">Explore <ArrowUpRight size={14} /></button>
                </div>
              </div>)}
          </div>
        </section>

        {/* ============ REVIEWS ============ */}
        <section className="reviews-section container" id="gallery">
          <div className="reviews-card">
            <div className="rating-block">
              <span className="brand-name">Google Reviews</span>
              <span className="score">4.8</span>
              <div className="stars">
                {Array.from({
              length: 5
            }).map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span className="count">1,200+ Reviews</span>
            </div>

            <div className="quote-block">
              <Quote size={26} fill="currentColor" strokeWidth={0} />
              <p>"An unforgettable stay! The beach, the service, the food – everything was perfect."</p>
              <div className="quote-author">
                <PhotoPlaceholder label="Guest" tone="gold" icon={Users} />
                <span>— Priya S.</span>
              </div>
            </div>

            <div className="gallery-strip">
              <div className="thumbs">
                {visibleGallery.map((shot, i) => <PhotoPlaceholder key={shot + i} label={shot} tone={i % 2 === 0 ? "navy" : "teal"} />)}
              </div>
              <button className="gallery-next" aria-label="Show more photos" onClick={() => setGalleryStart(s => (s + 1) % GALLERY_SHOTS.length)}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ============ NEWSLETTER ============ */}
        <section className="newsletter">
          <div className="container">
            <div className="newsletter__text">
              <div className="icon-circle"><Mail size={20} /></div>
              <div>
                <h3>Stay Updated, Stay Inspired</h3>
                <p>Subscribe for exclusive offers and updates.</p>
              </div>
            </div>

            {subscribed ? <span className="confirm">Thanks — you're on the list!</span> : <form onSubmit={e => {
          e.preventDefault();
          if (email.trim()) {
            setSubscribed(true);
            setEmail("");
          }
        }}>
                <input type="email" required placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} aria-label="Email address" />
                <button type="submit" className="btn-gold">Subscribe</button>
              </form>}
          </div>
        </section>

    </>;
}
