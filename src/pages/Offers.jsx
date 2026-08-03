import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function OffersPage() {
  const offers = [{
    discount: "20%\\nOFF",
    tag: "Most Popular",
    name: "Romantic Escape",
    desc: "Celebrate love with ocean views, candlelight dinners & more.",
    period: "1 Jun – 30 Sep 2026",
    book: "Book by 31 Aug 2026",
    tone: "sand"
  }, {
    discount: "15%\\nOFF",
    tag: "",
    name: "Monsoon Getaway",
    desc: "Perfect time to unwind with lush green views and relaxing vibes.",
    period: "15 Jun – 15 Sep 2026",
    book: "Book by 15 Sep 2026",
    tone: "teal"
  }, {
    discount: "25%\\nOFF",
    tag: "Family Favorite",
    name: "Family Fun Package",
    desc: "Memorable moments for the entire family with exciting inclusions.",
    period: "1 Jul – 30 Sep 2026",
    book: "Book by 30 Sep 2026",
    tone: "navy"
  }, {
    discount: "30%\\nOFF",
    tag: "Spa & Wellness",
    name: "Wellness Retreat",
    desc: "Rejuvenate your body and mind with wellness therapies & more.",
    period: "1 Jun – 30 Sep 2026",
    book: "Book by 31 Aug 2026",
    tone: "sand"
  }];
  const seasons = [{
    name: "Summer Escape",
    disc: "Up to 20% Off",
    period: "Apr – Jun",
    tone: "sand"
  }, {
    name: "Monsoon Bliss",
    disc: "Up to 15% Off",
    period: "Jun – Sep",
    tone: "teal"
  }, {
    name: "Winter Retreat",
    disc: "Up to 25% Off",
    period: "Oct – Feb",
    tone: "navy"
  }, {
    name: "Festive Celebration",
    disc: "Up to 30% Off",
    period: "Oct – Dec",
    tone: "sand"
  }];
  return <>

        <section className="page-hero">
          <PhotoPlaceholder label="Offers — Beachfront Path at Sunset" tone="sand" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Offers</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Offers</span>
              <h1 style={{
            marginTop: 10
          }}>Exclusive Offers.<br />Unforgettable Stays.</h1>
              <p className="lead">Handpicked offers and seasonal escapes designed to make your getaway even more special.</p>
              <div style={{
            marginTop: 22,
            display: "flex",
            gap: 20,
            alignItems: "center",
            flexWrap: "wrap"
          }}>
                <Link to="/rooms" className="btn-gold">View All Rooms <ArrowRight size={15} style={{
                verticalAlign: "-2px",
                marginLeft: 6
              }} /></Link>
                <span style={{
              fontSize: 13,
              color: "rgba(255,255,255,.8)",
              display: "flex",
              alignItems: "center",
              gap: 8
            }}><Gem size={14} /> Best Rate Guaranteed</span>
              </div>

              <div className="hero-form-card">
                <h4>Find Your Perfect Offer</h4>
                <div className="row2" style={{
              marginBottom: 12
            }}>
                  <div className="f"><label>Check In</label><input placeholder="Add date" readOnly /></div>
                  <div className="f"><label>Check Out</label><input placeholder="Add date" readOnly /></div>
                </div>
                <div className="f"><label>Guests</label><div className="fake-select">2 Guests, 1 Room <ChevronDown size={14} /></div></div>
                <Link to="/book" className="btn-gold">Check Offers</Link>
              </div>

              <div className="hero-bar" style={{
            marginTop: 34
          }}>
                {[{
              icon: Tag,
              t: "Best Price Guarantee",
              s: "Always the lowest price when you book direct"
            }, {
              icon: CalendarDays,
              t: "Flexible Booking",
              s: "Change or cancel with ease"
            }, {
              icon: ShieldCheck,
              t: "Secure Payments",
              s: "100% secure and encrypted"
            }, {
              icon: HelpCircle,
              t: "24/7 Support",
              s: "We're here for you, anytime"
            }].map(i => <div className="hero-bar__field" key={i.t}><i.icon size={17} /><div><label>{i.s}</label><div className="value" style={{
                  fontSize: 13.5
                }}>{i.t}</div></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-top">
              <div><span className="eyebrow">Limited Time Offers</span><h2 className="section-heading" style={{
              marginTop: 10
            }}>Explore Our Best Offers</h2><p style={{
              fontSize: 14.5,
              color: "#546575",
              marginTop: 10
            }}>Unbeatable deals on luxurious stays, curated especially for you.</p></div>
              <button className="btn-ghost">View All Offers <ArrowRight size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></button>
            </div>
            <div className="grid-4">
              {offers.map(o => <div className="offer-card" key={o.name}>
                  <div className="ph-wrap">
                    <span className="discount">{o.discount}</span>
                    <PhotoPlaceholder label={`${o.name} Photo`} tone={o.tone} />
                    {o.tag && <span className="tag">{o.tag}</span>}
                  </div>
                  <div className="offer-card__body">
                    <h3>{o.name}</h3>
                    <p>{o.desc}</p>
                    <div className="offer-card__dates">
                      <span><CalendarDays size={13} /> Stay Period: {o.period}</span>
                      <span><Clock size={13} /> {o.book}</span>
                    </div>
                    <button className="link-arrow">View Details <ArrowUpRight size={14} /></button>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="container">
          <div className="direct-band">
            <PhotoPlaceholder label="Resort at Night Photo" tone="navy" />
            <div className="direct-band__scrim" />
            <div className="direct-band__content">
              <div className="icon-circle"><Gift size={22} /></div>
              <div>
                <h3>Exclusive Direct Booking Benefits</h3>
                <ul>
                  {["Complimentary Breakfast", "Room Upgrade (subject to availability)", "Late Check-out (subject to availability)", "Welcome Drink on Arrival"].map(t => <li key={t}><Check size={15} className="check" /> {t}</li>)}
                </ul>
              </div>
            </div>
            <div className="direct-band__cta">
              <Link to="/book" className="btn-gold">Book Direct &amp; Save More</Link>
              <span className="sub">No hidden charges. 100% secure.</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Seasonal Deals</span>
            <h2 className="section-heading" style={{
          marginTop: 10,
          marginBottom: 8
        }}>Special Offers for Every Season</h2>
            <p style={{
          fontSize: 14.5,
          color: "#546575",
          marginBottom: 30
        }}>Plan ahead and enjoy exclusive savings throughout the year.</p>
            <div className="grid-4">
              {seasons.map(s => <div className="season-card" key={s.name}>
                  <PhotoPlaceholder label={`${s.name} Photo`} tone={s.tone} />
                  <div className="season-card__scrim" />
                  <div className="season-card__body">
                    <div><h4>{s.name}</h4><div className="disc">{s.disc}</div><div className="period">{s.period}</div></div>
                    <div className="go"><ChevronRight size={15} /></div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="container section--tight" style={{
      borderTop: "1px solid var(--mist)",
      borderBottom: "1px solid var(--mist)"
    }}>
          <div className="why-row">
            <h3 style={{
          fontFamily: "var(--serif)",
          color: "var(--navy)",
          fontSize: 20,
          margin: 0
        }}>Why Book Direct With Us?</h3>
            {[{
          icon: Tag,
          t: "Best Price Guaranteed"
        }, {
          icon: Gift,
          t: "No Hidden Charges"
        }, {
          icon: CheckCircle2,
          t: "Flexible Cancellation"
        }, {
          icon: Users,
          t: "Personalized Service"
        }].map(i => <div className="i" key={i.t}><i.icon size={18} /> {i.t}</div>)}
          </div>
        </section>

    </>;
}
