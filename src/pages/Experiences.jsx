import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function ExperiencesPage() {
  const [expFilter, setExpFilter] = useState("all");
  const filters = [{
    key: "all",
    label: "All Experiences",
    icon: Compass
  }, {
    key: "adventure",
    label: "Adventure",
    icon: Sailboat
  }, {
    key: "nature",
    label: "Nature & Outdoors",
    icon: Leaf
  }, {
    key: "wellness",
    label: "Wellness",
    icon: Heart
  }, {
    key: "culture",
    label: "Culture & Heritage",
    icon: Building2
  }, {
    key: "dining",
    label: "Food & Dining",
    icon: UtensilsCrossed
  }, {
    key: "romantic",
    label: "Romantic",
    icon: Gem
  }, {
    key: "family",
    label: "Family Friendly",
    icon: Users
  }];
  const experiences = [{
    key: "romantic",
    icon: Sunset,
    name: "Sunset Beach Walks",
    desc: "Stroll along the pristine shorelines as the sun paints the sky in golden hues.",
    left: "Daily",
    right: "Complimentary",
    tone: "sand"
  }, {
    key: "adventure",
    icon: Sailboat,
    name: "Kayaking Through Mangroves",
    desc: "Paddle through serene backwaters and mangroves, a paradise for nature lovers.",
    left: "9 AM – 12 PM",
    right: "₹1,500 / person",
    tone: "teal"
  }, {
    key: "wellness",
    icon: Leaf,
    name: "Oceanfront Wellness",
    desc: "Rejuvenate your body and mind with yoga, spa therapies and sea breezes.",
    left: "By Appointment",
    right: "₹2,800 / session",
    tone: "navy"
  }, {
    key: "culture",
    icon: Building2,
    name: "Cultural Evenings",
    desc: "Experience the rich heritage of Bengal through music, dance and folklore.",
    left: "Every Saturday",
    right: "Complimentary",
    tone: "sand"
  }];
  const visibleExp = experiences.filter(e => expFilter === "all" || e.key === expFilter);
  return <>

        <section className="page-hero">
          <img src="/experiences-hero.png" alt="Experiences at Bombay Beach Resort" className="page-hero__img" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Experiences</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Experiences</span>
              <h1 style={{
            marginTop: 10
          }}>Moments You'll<br />Remember Forever</h1>
              <p className="lead">Curated experiences that bring you closer to the beauty of nature, culture and unforgettable memories.</p>
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
                <PlayCircle size={30} strokeWidth={1.2} /> Watch Experiences Film
              </button>

              <div className="hero-bar">
                <div className="hero-bar__field"><Compass size={17} /><div><label>&nbsp;</label><div className="value">Curated Experiences Every Day</div></div></div>
                <div className="hero-bar__field"><Users size={17} /><div><label>&nbsp;</label><div className="value">Local Experts &amp; Storytellers</div></div></div>
                <div className="hero-bar__field"><Gem size={17} /><div><label>&nbsp;</label><div className="value">Authentic &amp; Meaningful</div></div></div>
                <div className="hero-bar__field"><Heart size={17} /><div><label>&nbsp;</label><div className="value">Memories That Last a Lifetime</div></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-top">
              <div><span className="eyebrow">Explore Our Experiences</span><h2 className="section-heading" style={{
              marginTop: 10
            }}>Discover. Indulge. Connect.</h2></div>
              <button className="btn-ghost">View All Experiences <ArrowRight size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></button>
            </div>

            <div className="tab-pills">
              {filters.map(f => <button key={f.key} className={expFilter === f.key ? "active" : ""} onClick={() => setExpFilter(f.key)}><f.icon size={15} /> {f.label}</button>)}
            </div>

            <div className="grid-4">
              {visibleExp.map(e => <div className="exp-card" key={e.name}>
                  <div className="ph-wrap">
                    <PhotoPlaceholder label={`${e.name} Photo`} tone={e.tone} />
                    <div className="badge-icon"><e.icon size={17} /></div>
                  </div>
                  <div className="exp-card__body">
                    <h3>{e.name}</h3>
                    <p>{e.desc}</p>
                    <div className="exp-card__foot"><span>{e.left}</span><span>{e.right}</span></div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="private-band">
              <div className="private-band__media">
                <PhotoPlaceholder label="Private Beachfront Dinner Photo" tone="teal" />
              </div>
              <div style={{
            display: "grid",
            gridTemplateColumns: "1fr"
          }}>
                <div className="private-band__text">
                  <span className="eyebrow" style={{
                color: "var(--gold)"
              }}>Bespoke</span>
                  <h3>Private Moments, Personalized for You</h3>
                  <p>Let us curate a bespoke experience perfectly tailored to your stay.</p>
                  <Link to="/contact" className="btn-gold">Connect With Our Team</Link>
                </div>
              </div>
            </div>
            <div className="private-band__list" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderRadius: "0 0 18px 18px",
          marginTop: -2
        }}>
              {[{
            icon: Sparkles,
            t: "Custom Experiences",
            s: "Tailor-made experiences for special moments."
          }, {
            icon: Heart,
            t: "Romantic Setups",
            s: "Private dinners, proposals, anniversaries & more."
          }, {
            icon: PartyPopper,
            t: "Celebrations",
            s: "Birthdays, anniversaries and intimate gatherings."
          }, {
            icon: Compass,
            t: "Adventure & Exploration",
            s: "Off-beat journeys and thrilling experiences."
          }].map(i => <div className="item" key={i.t}><i.icon size={20} /><div><strong>{i.t}</strong><span>{i.s}</span></div></div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Handpicked Collections</span>
            <h2 className="section-heading" style={{
          marginTop: 10,
          marginBottom: 30
        }}>Experiences for Every Mood</h2>
            <div className="grid-4">
              {[{
            icon: Sunrise,
            name: "Relax & Rejuvenate",
            desc: "Wellness, yoga, spa and mindful escapes.",
            tone: "navy"
          }, {
            icon: Sailboat,
            name: "Adventure & Thrill",
            desc: "Water sports, trekking and adrenaline-pumping fun.",
            tone: "teal"
          }, {
            icon: Building2,
            name: "Culture & Heritage",
            desc: "Explore traditions, temples and timeless stories.",
            tone: "sand"
          }, {
            icon: Users,
            name: "Family & Kids",
            desc: "Fun-filled activities for all age groups.",
            tone: "navy"
          }].map(m => <div className="mood-card" key={m.name}>
                  <PhotoPlaceholder label={`${m.name} Photo`} tone={m.tone} />
                  <div className="mood-card__scrim" />
                  <div className="mood-card__body">
                    <m.icon size={20} />
                    <h4>{m.name}</h4>
                    <p>{m.desc}</p>
                    <button className="link-arrow" style={{
                color: "var(--gold)"
              }}>Explore <ArrowUpRight size={14} /></button>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="container section--tight" style={{
      borderTop: "1px solid var(--mist)"
    }}>
          <div style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 24
      }}>
            {[{
          icon: ShieldCheck,
          t: "Trusted & Safe",
          s: "Your safety is our priority."
        }, {
          icon: Gem,
          t: "Best Price Guarantee",
          s: "Exceptional experiences at best value."
        }, {
          icon: CalendarDays,
          t: "Easy Booking",
          s: "Curated, seamless and flexible."
        }, {
          icon: HelpCircle,
          t: "24/7 Assistance",
          s: "We're here for you, anytime."
        }].map(i => <div key={i.t} style={{
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
          maxWidth: 220
        }}>
                <i.icon size={20} style={{
            color: "var(--gold-dark)",
            flexShrink: 0
          }} />
                <div><strong style={{
              display: "block",
              fontSize: 14,
              color: "var(--navy)"
            }}>{i.t}</strong><span style={{
              fontSize: 12.5,
              color: "#8096a5"
            }}>{i.s}</span></div>
              </div>)}
          </div>
        </section>

    </>;
}
