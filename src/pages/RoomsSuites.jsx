import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function RoomsSuitesPage() {
  const [roomFilter, setRoomFilter] = useState("all");
  const rooms = [{
    key: "ocean",
    filter: ["all", "ocean"],
    badge: "Best Seller",
    name: "Deluxe Garden View",
    desc: "Comfortable and elegant rooms overlooking lush tropical gardens.",
    guests: 2,
    bed: "King Bed",
    size: "34 m²",
    price: "12,999",
    tone: "sand"
  }, {
    key: "beachfront",
    filter: ["all", "ocean", "beachfront"],
    badge: "Popular",
    name: "Premium Ocean View",
    desc: "Wake up to the soothing sound of waves and panoramic ocean views.",
    guests: 2,
    bed: "King Bed",
    size: "42 m²",
    price: "18,999",
    tone: "navy"
  }, {
    key: "suite",
    filter: ["all", "beachfront", "suites"],
    badge: "Luxury",
    name: "Beachfront Suite",
    desc: "Spacious suite with private balcony and unobstructed views of the beach.",
    guests: 2,
    bed: "King Bed",
    size: "60 m²",
    price: "28,999",
    tone: "teal"
  }, {
    key: "family",
    filter: ["all", "family", "accessible"],
    badge: "Family Favorite",
    name: "Family Room",
    desc: "Extra space with two queen beds — perfect for family holidays. Fully wheelchair-accessible.",
    guests: 4,
    bed: "2 Queen Beds",
    size: "50 m²",
    price: "22,999",
    tone: "sand"
  }, {
    key: "villa",
    filter: ["all", "villas", "beachfront"],
    badge: "Exclusive",
    name: "Private Pool Villa",
    desc: "Tropical garden, private plunge pool and unmatched seclusion.",
    guests: 3,
    bed: "King Bed",
    size: "75 m²",
    price: "34,999",
    tone: "navy"
  }, {
    key: "honeymoon",
    filter: ["all", "suites"],
    badge: "Honeymoon Pick",
    name: "Sunset Honeymoon Suite",
    desc: "Romantic styling, jacuzzi and a private deck facing the sunset.",
    guests: 2,
    bed: "King Bed",
    size: "48 m²",
    price: "26,999",
    tone: "teal"
  }, {
    key: "accessible",
    filter: ["all", "accessible"],
    badge: "Accessible",
    name: "Accessible Garden Room",
    desc: "Step-free access, wider doorways and a roll-in shower, without compromising on comfort.",
    guests: 2,
    bed: "King Bed",
    size: "36 m²",
    price: "13,999",
    tone: "sand"
  }];
  const filters = [{
    key: "all",
    label: "All Rooms",
    icon: BedDouble
  }, {
    key: "ocean",
    label: "Ocean View",
    icon: Waves
  }, {
    key: "beachfront",
    label: "Beachfront",
    icon: Umbrella
  }, {
    key: "suites",
    label: "Suites",
    icon: Sparkles
  }, {
    key: "villas",
    label: "Villas",
    icon: Building2
  }, {
    key: "family",
    label: "Family Rooms",
    icon: Users
  }, {
    key: "honeymoon",
    label: "Honeymoon",
    icon: Heart
  }, {
    key: "accessible",
    label: "Accessible",
    icon: ShieldCheck
  }];
  const visibleRooms = rooms.filter(r => r.filter.includes(roomFilter));
  return <>

        <section className="page-hero">
          <PhotoPlaceholder label="Rooms & Suites — Sea View Bedroom" tone="navy" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Rooms &amp; Suites</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Rooms &amp; Suites</span>
              <h1 style={{
            marginTop: 10
          }}>Stay in Luxury.<br />Wake up to the Ocean.</h1>
              <p className="lead">Elegant rooms and suites designed for your comfort, offering breathtaking views and unforgettable moments.</p>
              <button className="hero__watch" style={{
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
                <PlayCircle size={30} strokeWidth={1.2} /> Take a Virtual Tour
              </button>

              <div className="hero-bar">
                <div className="hero-bar__field">
                  <Calendar size={17} />
                  <div><label>Check-in</label><div className="value">20 May 2026</div><div className="sub">Wed</div></div>
                </div>
                <div className="hero-bar__field">
                  <Calendar size={17} />
                  <div><label>Check-out</label><div className="value">22 May 2026</div><div className="sub">Fri</div></div>
                </div>
                <div className="hero-bar__field">
                  <Users size={17} />
                  <div><label>Guests &amp; Rooms</label><div className="value">2 Guests, 1 Room</div></div>
                  <ChevronDown size={15} style={{
                color: "rgba(255,255,255,.6)",
                marginLeft: "auto"
              }} />
                </div>
                <div className="hero-bar__cta"><Link to="/book" className="btn-gold">Check Availability</Link></div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="filter-strip">
            {filters.map(f => <button key={f.key} className={roomFilter === f.key ? "active" : ""} onClick={() => setRoomFilter(f.key)}>
                <f.icon size={18} strokeWidth={1.4} /> {f.label}
              </button>)}
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="section-top">
              <div>
                <span className="eyebrow">Rooms &amp; Suites Collection</span>
                <h2 className="section-heading" style={{
              marginTop: 10
            }}>Each Space, Thoughtfully Designed</h2>
                <p style={{
              color: "#546575",
              fontSize: 14.5,
              marginTop: 10,
              maxWidth: 460
            }}>Refined interiors, modern amenities and serene views to elevate your stay.</p>
              </div>
              <div className="sort-select">Sort by: <strong>Recommended</strong> <ChevronDown size={14} /></div>
            </div>

            <div className="grid-3">
              {visibleRooms.map(r => <div className="room-card" key={r.name}>
                  <div className="ph-wrap">
                    <span className="badge">{r.badge}</span>
                    <PhotoPlaceholder label={`${r.name} Photo`} tone={r.tone} />
                    <div className="arrows"><button aria-label="Previous photo"><ChevronLeft size={14} /></button><button aria-label="Next photo"><ChevronRight size={14} /></button></div>
                  </div>
                  <div className="room-card__body">
                    <h3>{r.name}</h3>
                    <p className="desc">{r.desc}</p>
                    <div className="room-card__meta">
                      <span><Users size={14} /> {r.guests} Guests</span>
                      <span><BedDouble size={14} /> {r.bed}</span>
                      <span><Maximize2 size={14} /> {r.size}</span>
                    </div>
                    <div className="room-card__foot">
                      <div className="price">From <strong>₹{r.price}</strong> / night</div>
                      <Link to="/book" className="btn-navy" style={{
                  padding: "10px 18px",
                  fontSize: 12
                }}>View Details</Link>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="container">
          <div className="offer-banner">
            <PhotoPlaceholder label="Poolside Deck Photo" tone="teal" />
            <div className="offer-banner__scrim" />
            <div className="offer-banner__content">
              <div className="icon-circle"><Gem size={22} /></div>
              <div>
                <h3>Exclusive Offers for Direct Bookings</h3>
                <p>Enjoy best rate guarantee, complimentary breakfast, room upgrades and flexible cancellation.</p>
              </div>
            </div>
            <div className="offer-banner__cta">
              <Link to="/book" className="btn-gold">Book Now</Link>
              <span className="sub"><ShieldCheck size={12} style={{
              verticalAlign: "-2px",
              marginRight: 4
            }} />Best Price Guarantee</span>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="center-intro">
              <span className="eyebrow">In-Room Amenities</span>
              <h2 className="section-heading" style={{
            marginTop: 10
          }}>Designed for Your Comfort</h2>
            </div>
            <div className="grid-4" style={{
          gridTemplateColumns: "repeat(4,1fr)"
        }}>
              {[{
            icon: Wifi,
            label: "Free Wi-Fi"
          }, {
            icon: Tv,
            label: "Smart TV"
          }, {
            icon: Wind,
            label: "Air Conditioning"
          }, {
            icon: Coffee,
            label: "Minibar"
          }, {
            icon: Coffee,
            label: "Tea / Coffee Maker"
          }, {
            icon: Sparkles,
            label: "Premium Toiletries"
          }, {
            icon: Lock,
            label: "In-room Safe"
          }, {
            icon: Bell,
            label: "24x7 Room Service"
          }].map(a => <div key={a.label} className="amenity-tile" style={{
            boxShadow: "none",
            background: "transparent"
          }}>
                  <div className="icon-wrap"><a.icon size={22} strokeWidth={1.4} /></div>
                  <h4 style={{
              fontSize: 14
            }}>{a.label}</h4>
                </div>)}
            </div>
          </div>
        </section>

        <section className="section" id="compare">
          <div className="container">
            <div className="bathroom-block" style={{
          marginBottom: 70
        }}>
              <PhotoPlaceholder label="Spa Bathroom Photo" tone="sand" className="ph" />
              <div>
                <span className="eyebrow">Where Every Detail Matters</span>
                <h3 style={{
              fontFamily: "var(--serif)",
              fontSize: 28,
              color: "var(--navy)",
              margin: "10px 0 14px"
            }}>From Plush Linens to Handcrafted Décor</h3>
                <p style={{
              color: "#546575",
              fontSize: 14.5,
              lineHeight: 1.7,
              marginBottom: 20
            }}>Every detail in our rooms is curated to make your stay truly unforgettable — from rainfall showers to hand-picked furnishings.</p>
                <div className="detail-list">
                  <a href="#"><span>Daily Housekeeping</span> <ChevronRight size={16} className="chev" /></a>
                  <a href="#"><span>Turndown Service</span> <ChevronRight size={16} className="chev" /></a>
                  <a href="#"><span>Laundry Service</span> <ChevronRight size={16} className="chev" /></a>
                  <a href="#"><span>Concierge Assistance</span> <ChevronRight size={16} className="chev" /></a>
                </div>
              </div>
            </div>

            <div className="section-top">
              <div><span className="eyebrow">Compare Rooms</span><h2 className="section-heading" style={{
              marginTop: 10
            }}>Find Your Perfect Fit</h2></div>
            </div>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr><th>Room Type</th><th>Size</th><th>Occupancy</th><th>View</th><th>Breakfast</th><th>From / Night</th></tr>
                </thead>
                <tbody>
                  <tr><td>Deluxe Garden View</td><td>34 m²</td><td>2 Guests</td><td>Garden</td><td>Included</td><td>₹12,999</td></tr>
                  <tr><td>Premium Ocean View</td><td>42 m²</td><td>2 Guests</td><td>Ocean</td><td>Included</td><td>₹18,999</td></tr>
                  <tr><td>Beachfront Suite</td><td>60 m²</td><td>2 Guests</td><td>Beachfront</td><td>Included</td><td>₹28,999</td></tr>
                  <tr><td>Family Room</td><td>50 m²</td><td>4 Guests</td><td>Garden</td><td>Included</td><td>₹22,999</td></tr>
                  <tr><td>Private Pool Villa</td><td>75 m²</td><td>3 Guests</td><td>Beachfront</td><td>Included</td><td>₹34,999</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section--tight" style={{
      background: "var(--navy)"
    }}>
          <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        flexWrap: "wrap"
      }}>
            <div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Room Policies</span>
              <h3 style={{
            fontFamily: "var(--serif)",
            color: "#fff",
            fontSize: 24,
            margin: "8px 0 0"
          }}>Good to Know Before You Stay</h3>
            </div>
            <div style={{
          display: "flex",
          gap: 30,
          flexWrap: "wrap",
          color: "rgba(255,255,255,.8)",
          fontSize: 13.5
        }}>
              <span>Check-in: 2:00 PM</span>
              <span>Check-out: 11:00 AM</span>
              <span>Government ID required</span>
              <span>Pets not permitted</span>
            </div>
          </div>
        </section>

    </>;
}
