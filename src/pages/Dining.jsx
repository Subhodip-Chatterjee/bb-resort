import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function DiningPage() {
  const [cuisineIndex, setCuisineIndex] = useState(0);
  const cuisines = ["Indian Delights", "Seafood", "International", "Vegetarian", "Desserts", "Beverages"];
  return <>

        <section className="page-hero">
          <PhotoPlaceholder label="Dining — Beachfront Restaurant at Dusk" tone="sand" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Dining</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Dining</span>
              <h1 style={{
            marginTop: 10
          }}>Exceptional Flavours.<br />Unforgettable Views.</h1>
              <p className="lead">Savour a world of culinary experiences crafted by our master chefs using the finest local ingredients and global inspirations.</p>
              <button style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "none",
            border: "none",
            color: "#fff",
            marginTop: 22,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: ".08em",
            textTransform: "uppercase"
          }}>
                <PlayCircle size={30} strokeWidth={1.2} /> Watch Our Culinary Story
              </button>

              <div className="hero-bar">
                <div className="hero-bar__field">
                  <Calendar size={17} />
                  <div><label>Date</label><div className="value">20 May 2026</div><div className="sub">Wed</div></div>
                </div>
                <div className="hero-bar__field">
                  <Clock size={17} />
                  <div><label>Time</label><div className="value">7:00 PM</div><div className="sub">Dinner</div></div>
                </div>
                <div className="hero-bar__field">
                  <Users size={17} />
                  <div><label>Guests</label><div className="value">2 Guests</div></div>
                </div>
                <div className="hero-bar__cta"><Link to="/contact" className="btn-gold">Find a Table</Link></div>
                <div className="hero-bar__note"><Phone size={14} /> Prefer to book by phone? <strong>+91 98765 43210</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-top">
              <div><span className="eyebrow">Our Dining Venues</span><h2 className="section-heading" style={{
              marginTop: 10
            }}>A Table for Every Mood</h2></div>
              <button className="btn-ghost">View All Venues <ArrowRight size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></button>
            </div>

            <div className="grid-4">
              {[{
            icon: Utensils,
            name: "The Bay View Restaurant",
            desc: "All-day dining with a stunning ocean view and a delicious global buffet.",
            hours: "All-Day Dining",
            time: "6:30 AM – 11:00 PM",
            cta: "View Menu",
            tone: "navy"
          }, {
            icon: Coffee,
            name: "Tides Ocean Grill",
            desc: "Fine dining by the sea featuring fresh seafood and premium grills.",
            hours: "Dinner Only",
            time: "7:00 PM – 11:30 PM",
            cta: "View Menu",
            tone: "sand"
          }, {
            icon: Wine,
            name: "Azure Lounge & Bar",
            desc: "Signature cocktails, fine wines and breathtaking sunset views.",
            hours: "Bar & Lounge",
            time: "11:00 AM – 11:30 PM",
            cta: "View Menu",
            tone: "teal"
          }, {
            icon: UtensilsCrossed,
            name: "Private Beach Dining",
            desc: "Intimate dining experiences under the stars, curated just for you.",
            hours: "By Reservation",
            time: "6:00 PM – 11:00 PM",
            cta: "Enquire Now",
            tone: "navy"
          }].map(v => <div className="venue-card" key={v.name}>
                  <div className="ph-wrap">
                    <PhotoPlaceholder label={`${v.name} Photo`} tone={v.tone} />
                    <div className="badge-icon"><v.icon size={18} /></div>
                  </div>
                  <div className="venue-card__body">
                    <h3>{v.name}</h3>
                    <p>{v.desc}</p>
                    <div className="venue-card__meta">
                      <span><Clock size={13} /> {v.hours}</span>
                      <span><Clock size={13} /> {v.time}</span>
                    </div>
                    <button className="link-arrow">{v.cta} <ArrowUpRight size={14} /></button>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section-top">
              <div>
                <span className="eyebrow">World of Cuisine</span>
                <h2 className="section-heading" style={{
              marginTop: 10
            }}>Global Flavours, Local Soul</h2>
                <p style={{
              color: "#546575",
              fontSize: 14.5,
              marginTop: 10,
              maxWidth: 420
            }}>Our chefs bring together authentic local ingredients and global techniques to create extraordinary culinary experiences.</p>
                <button className="btn-ghost" style={{
              marginTop: 18
            }}>Explore Menus</button>
              </div>
              <div className="cuisine-strip" style={{
            flex: 1,
            justifyContent: "flex-end"
          }}>
                <div className="track">
                  {cuisines.map((c, i) => <div className="tile" key={c}>
                      <PhotoPlaceholder label={c} tone={i % 2 === 0 ? "sand" : "navy"} />
                      <span>{c}</span>
                    </div>)}
                </div>
                <button className="cuisine-nav" aria-label="Next" onClick={() => setCuisineIndex(i => i + 1)}><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="moment-strip">
              <PhotoPlaceholder label="Sunset Dining Deck Photo" tone="teal" />
              <div className="moment-strip__scrim" />
              <div className="moment-strip__content">
                <span className="eyebrow" style={{
              color: "var(--gold)"
            }}>Dining Experiences</span>
                <h3>Moments That Stay With You</h3>
                <div className="moment-grid">
                  {[{
                icon: Sunset,
                t: "Sunset Dining",
                s: "Magical sunsets, memorable meals."
              }, {
                icon: UtensilsCrossed,
                t: "Chef's Table",
                s: "A curated tasting menu experience."
              }, {
                icon: Heart,
                t: "Romantic Dinners",
                s: "Perfect settings for special moments."
              }, {
                icon: PartyPopper,
                t: "Celebrations",
                s: "Birthdays, anniversaries & special occasions."
              }, {
                icon: Coffee,
                t: "In-Room Dining",
                s: "Premium meals delivered to you."
              }].map(m => <div className="m-item" key={m.t}><m.icon size={20} strokeWidth={1.4} /><strong>{m.t}</strong><span>{m.s}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <div className="reserve-band">
              <div className="trust">
                <div className="t-item"><Leaf size={18} /> Fresh &amp; Local — Locally sourced, exceptionally crafted.</div>
                <div className="t-item"><ShieldCheck size={18} /> Hygiene Assured — Highest standards of safety.</div>
                <div className="t-item"><UtensilsCrossed size={18} /> Expert Chefs — Years of culinary excellence.</div>
              </div>
              <div className="cta">
                <h4>Reserve Your Table</h4>
                <span style={{
              fontSize: 12.5,
              color: "rgba(255,255,255,.7)"
            }}>Ensure your perfect dining experience.</span>
                <Link to="/contact" className="btn-gold" style={{
              marginTop: 6
            }}>Book Now</Link>
              </div>
            </div>
          </div>
        </section>

    </>;
}
