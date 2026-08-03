import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function AmenitiesPage() {
  const mainAmenities = [{
    icon: Waves,
    name: "Infinity Pool",
    desc: "Relax and unwind in our stunning ocean-facing infinity pool.",
    tone: "navy"
  }, {
    icon: Dumbbell,
    name: "Fitness Centre",
    desc: "State-of-the-art equipment and wellness programs to keep you going.",
    tone: "sand"
  }, {
    icon: Leaf,
    name: "Wellness & Spa",
    desc: "Rejuvenate your body and mind with therapeutic treatments.",
    tone: "teal"
  }, {
    icon: Umbrella,
    name: "Private Beach Access",
    desc: "Step onto the pristine sands of Mandarmani Beach.",
    tone: "navy"
  }, {
    icon: UtensilsCrossed,
    name: "In-Room Dining",
    desc: "Gourmet meals delivered to your room, anytime.",
    tone: "sand"
  }, {
    icon: Baby,
    name: "Kids Club",
    desc: "Fun, safe and engaging activities for our young guests.",
    tone: "teal"
  }, {
    icon: Briefcase,
    name: "Business Centre",
    desc: "Modern meeting spaces and high-speed connectivity for work.",
    tone: "navy"
  }, {
    icon: Bell,
    name: "24/7 Concierge",
    desc: "Our team is always here to assist you with anything you need.",
    tone: "sand"
  }, {
    icon: Car,
    name: "Transportation",
    desc: "Airport transfers and local transport arranged with ease.",
    tone: "teal"
  }, {
    icon: Shirt,
    name: "Laundry Service",
    desc: "Effortless care for your wardrobe throughout your stay.",
    tone: "navy"
  }];
  return <>

        <section className="page-hero">
          <PhotoPlaceholder label="Amenities — Poolside Cabanas at Dusk" tone="teal" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Amenities</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Amenities</span>
              <h1 style={{
            marginTop: 10
          }}>Every Comfort.<br />Thoughtfully Curated.</h1>
              <p className="lead">From serene wellness experiences to modern conveniences, every detail is designed to make your stay extraordinary.</p>
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
                <PlayCircle size={30} strokeWidth={1.2} /> Watch Amenities Tour
              </button>

              <div className="hero-bar">
                <div className="hero-bar__field"><Building2 size={17} /><div><label>&nbsp;</label><div className="value">World Class Facilities</div></div></div>
                <div className="hero-bar__field"><Users size={17} /><div><label>&nbsp;</label><div className="value">Personalized Service</div></div></div>
                <div className="hero-bar__field"><Sparkles size={17} /><div><label>&nbsp;</label><div className="value">Unmatched Comfort</div></div></div>
                <div className="hero-bar__field"><Heart size={17} /><div><label>&nbsp;</label><div className="value">Memorable Experiences</div></div></div>
                <div className="hero-bar__cta"><Link to="/book" className="btn-gold">Check Availability</Link></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="center-intro">
              <span className="eyebrow">Designed Around You</span>
              <h2 className="section-heading" style={{
            marginTop: 10
          }}>Amenities That Elevate Your Stay</h2>
              <p>At Bombay Beach Resort, every amenity is crafted to bring relaxation, convenience and joy to your journey.</p>
            </div>

            <div className="grid-4" style={{
          gridTemplateColumns: "repeat(5,1fr)"
        }}>
              {mainAmenities.map(a => <div className="amenity-card" key={a.name}>
                  <div className="ph-wrap">
                    <PhotoPlaceholder label={`${a.name} Photo`} tone={a.tone} />
                    <div className="badge-icon"><a.icon size={16} /></div>
                  </div>
                  <div className="amenity-card__body">
                    <h4>{a.name}</h4>
                    <p>{a.desc}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="center-intro">
              <span className="eyebrow">More to Enjoy</span>
              <h2 className="section-heading" style={{
            marginTop: 10
          }}>Thoughtful Amenities, Endless Comfort</h2>
              <p>We go beyond the ordinary to make your stay seamless and unforgettable.</p>
              <button className="btn-ghost" style={{
            marginTop: 10
          }}>Explore Experiences</button>
            </div>
            <div className="chip-row">
              {[{
            icon: Wifi,
            label: "Complimentary High-Speed Wi-Fi"
          }, {
            icon: Shirt,
            label: "Daily Housekeeping Service"
          }, {
            icon: Sparkles,
            label: "Premium Toiletries"
          }, {
            icon: Lock,
            label: "In-Room Safe & Security"
          }, {
            icon: Bell,
            label: "24/7 Power Backup"
          }, {
            icon: Heart,
            label: "Doctor on Call (On Request)"
          }].map(c => <div className="chip" key={c.label}><div className="icon-wrap"><c.icon size={20} strokeWidth={1.4} /></div><span>{c.label}</span></div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="exclusive-band">
              <div className="exclusive-band__text">
                <span className="eyebrow" style={{
              color: "var(--gold)"
            }}>Exclusive for Our Guests</span>
                <h3 style={{
              marginTop: 8
            }}>Luxury is in the Details</h3>
                <p>Premium amenities, personalized care and unmatched comfort — only for you.</p>
              </div>
              <div className="exclusive-band__items">
                {[{
              icon: Wine,
              t: "Welcome Drink on Arrival"
            }, {
              icon: BedDouble,
              t: "Turndown Service"
            }, {
              icon: Coffee,
              t: "Evening Tea / Coffee"
            }, {
              icon: Car,
              t: "Complimentary Parking"
            }].map(i => <div className="item" key={i.t}><i.icon size={20} strokeWidth={1.4} /><span>{i.t}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <div className="reviews-card" style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 14px 40px rgba(10,30,50,.08)",
          padding: 30,
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr 1fr",
          gap: 26,
          alignItems: "center"
        }}>
              <div className="rating-block" style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            borderRight: "1px solid var(--mist)",
            paddingRight: 20
          }}>
                <span className="brand-name" style={{
              fontWeight: 700,
              fontSize: 18,
              color: "var(--navy)"
            }}>Google Reviews</span>
                <span className="score" style={{
              fontFamily: "var(--serif)",
              fontSize: 26,
              color: "var(--navy)"
            }}>4.8</span>
                <div className="stars" style={{
              display: "flex",
              gap: 3,
              color: "var(--gold)"
            }}>{Array.from({
                length: 5
              }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}</div>
                <span style={{
              fontSize: 12.5,
              color: "#607485"
            }}>1,200+ Reviews</span>
              </div>
              <div>
                <Quote size={22} fill="currentColor" strokeWidth={0} style={{
              color: "var(--mist)"
            }} />
                <p style={{
              fontSize: 15,
              fontStyle: "italic",
              margin: "8px 0 12px"
            }}>"Outstanding hospitality and world-class amenities. Every little detail was perfect."</p>
                <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12
            }}>
                  <PhotoPlaceholder label="Guest" tone="gold" icon={Users} style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                flexShrink: 0
              }} />
                  <span style={{
                fontWeight: 600,
                fontSize: 13.5,
                color: "var(--navy)"
              }}>— Rohan Mehta</span>
                </div>
              </div>
              <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 8
          }}>
                {["Pool", "Dining", "Fitness", "Sunset"].map((s, i) => <div key={s} style={{
              height: 78,
              borderRadius: 10,
              overflow: "hidden"
            }}><PhotoPlaceholder label={s} tone={i % 2 === 0 ? "navy" : "teal"} /></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="container section--tight" style={{
      borderTop: "1px solid var(--mist)"
    }}>
          <div className="assist-band">
            <div className="left"><div className="icon-wrap"><Phone size={20} /></div><h4>Need Assistance? Our team is here to help.</h4></div>
            <div className="right"><Link to="/contact" className="btn-ghost">Contact Us</Link><Link to="/book" className="btn-gold">Book Your Stay</Link></div>
          </div>
        </section>

    </>;
}
