import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function AboutPage() {
  return <>

        <section className="page-hero">
          <PhotoPlaceholder label="About — Resort Pool at Sunset" tone="sand" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>About Us</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>About Us</span>
              <h1 style={{
            marginTop: 10
          }}>Crafted with Passion,<br />Inspired by the Sea</h1>
              <p className="lead">Bombay Beach Resort is a luxury beachfront destination where warm hospitality, nature and comfort come together to create unforgettable memories.</p>
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
                <PlayCircle size={30} strokeWidth={1.2} /> Watch Our Story
              </button>

              <div className="hero-quickcard">
                <div className="item"><CalendarDays size={17} /><div><strong>12+ Years</strong><span>of Hospitality</span></div></div>
                <div className="item"><Heart size={17} /><div><strong>50,000+</strong><span>Happy Guests</span></div></div>
                <div className="item"><MapPin size={17} /><div><strong>Mandarmani Beach</strong><span>West Bengal, India</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="story-row">
              <div>
                <span className="eyebrow">Welcome to Our World</span>
                <h2 className="section-heading" style={{
              marginTop: 10
            }}>A Sanctuary of Luxury by the Bay of Bengal</h2>
                <p style={{
              fontSize: 14.5,
              color: "#546575",
              lineHeight: 1.75,
              margin: "16px 0 22px"
            }}>
                  Nestled along the serene shores of Mandarmani, Bombay Beach Resort offers the perfect blend of natural beauty,
                  modern luxury and heartfelt hospitality. From elegant rooms and fine dining to unforgettable celebrations and
                  seamless corporate events, every experience is designed to exceed expectations.
                </p>
                <Link to="/rooms" className="btn-gold">Discover Our Resort <ArrowRight size={15} style={{
                verticalAlign: "-2px",
                marginLeft: 6
              }} /></Link>
              </div>
              <div className="story-row__media">
                <div className="main-ph"><PhotoPlaceholder label="Resort Entrance at Dusk" tone="navy" /></div>
                <div className="stack">
                  <PhotoPlaceholder label="Private Dining Setup" tone="sand" />
                  <PhotoPlaceholder label="Lobby Lounge" tone="teal" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="stat-strip">
            {[{
          icon: BedDouble,
          v: "120+",
          s: "Luxury Rooms & Suites"
        }, {
          icon: UtensilsCrossed,
          v: "3",
          s: "Dining Experiences"
        }, {
          icon: Umbrella,
          v: "1",
          s: "Private Beach Access"
        }, {
          icon: Waves,
          v: "Infinity",
          s: "Pool with Ocean View"
        }, {
          icon: Users,
          v: "100+",
          s: "Team Members at Your Service"
        }].map(s => <div className="s" key={s.s}><div className="icon-wrap"><s.icon size={18} strokeWidth={1.4} /></div><strong>{s.v}</strong><span>{s.s}</span></div>)}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Our Values</span>
            <h2 className="section-heading" style={{
          marginTop: 10
        }}>What Drives Us</h2>
            <div className="section-underline" />
            <div className="values-grid">
              {[{
            icon: Users,
            t: "Authentic Hospitality",
            s: "We treat every guest like family and create memories that last."
          }, {
            icon: Leaf,
            t: "Sustainable Luxury",
            s: "We care for nature and practice responsible hospitality."
          }, {
            icon: Medal,
            t: "Excellence",
            s: "From big celebrations to small moments, we deliver the best."
          }, {
            icon: Heart,
            t: "Passion",
            s: "Our team is passionate about crafting beautiful experiences for you."
          }, {
            icon: ShieldCheck,
            t: "Integrity",
            s: "We value honesty, transparency and your trust."
          }].map(v => <div className="value-item" key={v.t}><div className="icon-wrap"><v.icon size={22} strokeWidth={1.4} /></div><h4>{v.t}</h4><p>{v.s}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="dream-row">
              <PhotoPlaceholder label="Beachfront Pathway at Sunrise" tone="teal" />
              <div>
                <span className="eyebrow">Our Story</span>
                <h2 className="section-heading" style={{
              marginTop: 10
            }}>A Dream Inspired by the Ocean</h2>
                <p style={{
              fontSize: 14.5,
              color: "#546575",
              lineHeight: 1.75,
              marginTop: 16
            }}>
                  Bombay Beach Resort was born from a dream to create a place where guests can relax, celebrate and reconnect
                  with what truly matters. Over the years, we have grown with the love, dedication and the support of our
                  wonderful guests.
                </p>
                <div className="dream-row__list">
                  {["Built with a vision to offer world-class comfort by the sea", "Growing with our community and loyal guests", "Creating magical experiences, every single day"].map((t, i) => <div className="item" key={t}><div className="num">{i + 1}</div><span>{t}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container section--tight" style={{
      borderTop: "1px solid var(--mist)",
      borderBottom: "1px solid var(--mist)"
    }}>
          <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20
      }}>
            <div style={{
          display: "flex",
          gap: 30,
          flexWrap: "wrap"
        }}>
              {[{
            icon: Gem,
            t: "Best Price Guarantee",
            s: "Book directly on our website"
          }, {
            icon: RefreshCw,
            t: "Flexible Cancellation",
            s: "Plans that suit your travel"
          }, {
            icon: Bell,
            t: "24/7 Guest Support",
            s: "We are here for you always"
          }].map(i => <div key={i.t} style={{
            display: "flex",
            gap: 10,
            alignItems: "flex-start"
          }}>
                  <i.icon size={18} style={{
              color: "var(--gold-dark)",
              marginTop: 2
            }} />
                  <div><strong style={{
                display: "block",
                fontSize: 13.5,
                color: "var(--navy)"
              }}>{i.t}</strong><span style={{
                fontSize: 12,
                color: "#8096a5"
              }}>{i.s}</span></div>
                </div>)}
            </div>
            <Link to="/book" className="btn-navy">Book Your Stay</Link>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="careers-band">
              <div>
                <span className="eyebrow" style={{
              color: "var(--gold)"
            }}>Join Our Team</span>
                <h3>Build Your Career With Us</h3>
                <p>We're always looking for passionate people who share our love for hospitality. Explore opportunities to grow with Bombay Beach Resort.</p>
              </div>
              <Link to="/contact" className="btn-gold">View Careers <ArrowRight size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></Link>
            </div>
          </div>
        </section>

    </>;
}
