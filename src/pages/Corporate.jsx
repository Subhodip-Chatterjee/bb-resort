import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function CorporatePage() {
  const cvenues = [{
    name: "Grand Ballroom",
    desc: "Elegant pillarless ballroom ideal for conferences, AGMs and gala dinners.",
    guests: "Up to 500 Guests",
    size: "620 m²",
    tone: "navy"
  }, {
    name: "Ocean View Boardroom",
    desc: "Private and refined space for board meetings and strategy sessions.",
    guests: "Up to 40 Guests",
    size: "85 m²",
    tone: "sand"
  }, {
    name: "Poolside Terrace",
    desc: "Open-air venue for product launches, cocktails and networking events.",
    guests: "Up to 150 Guests",
    size: "300 m²",
    tone: "teal"
  }, {
    name: "Lawn & Garden Area",
    desc: "Expansive lawn perfect for team building, exhibitions and celebrations.",
    guests: "Up to 300 Guests",
    size: "1200 m²",
    tone: "navy"
  }];
  const [submitted, setSubmitted] = useState(false);
  return <>

        <section className="page-hero">
          <PhotoPlaceholder label="Corporate — Ocean View Boardroom" tone="navy" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Corporate &amp; MICE</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Corporate &amp; MICE</span>
              <h1 style={{
            marginTop: 10
          }}>Where Business<br />Meets Inspiration</h1>
              <p className="lead">Host impactful meetings, conferences and celebrations in a setting that inspires ideas and delivers excellence.</p>
              <div style={{
            marginTop: 22,
            display: "flex",
            gap: 12
          }}>
                <a href="#enquiry" className="btn-gold">Enquire Now <ArrowRight size={15} style={{
                verticalAlign: "-2px",
                marginLeft: 6
              }} /></a>
                <a href="#" className="btn-outline-dark">Download Brochure <ArrowUpRight size={15} /></a>
              </div>

              <div className="hero-quickcard">
                <div className="item"><Monitor size={17} /><div><strong>State-of-the-Art Venues</strong><span>Flexible spaces with modern AV</span></div></div>
                <div className="item"><Sparkles size={17} /><div><strong>Seamless Experiences</strong><span>End-to-end event support</span></div></div>
                <div className="item"><Users size={17} /><div><strong>Team Comfort</strong><span>Accommodation &amp; amenities</span></div></div>
                <div className="item"><MapPin size={17} /><div><strong>Memorable Locations</strong><span>Beachfront setting that inspires</span></div></div>
              </div>

              <div className="hero-bar" style={{
            marginTop: 34
          }}>
                {[{
              icon: Users,
              v: "500+",
              s: "Events Hosted"
            }, {
              icon: Building2,
              v: "50 – 500",
              s: "Guest Capacity"
            }, {
              icon: Medal,
              v: "10+",
              s: "Years of Experience"
            }, {
              icon: Briefcase,
              v: "Dedicated",
              s: "Event Team"
            }, {
              icon: CheckCircle2,
              v: "100%",
              s: "Commitment to Excellence"
            }].map(i => <div className="hero-bar__field" key={i.s}><i.icon size={17} /><div><label>{i.s}</label><div className="value">{i.v}</div></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-top">
              <div><span className="eyebrow">Our Event Venues</span><h2 className="section-heading" style={{
              marginTop: 10
            }}>Versatile Spaces. Limitless Possibilities.</h2></div>
              <button className="btn-ghost">View All Venues <ArrowRight size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></button>
            </div>
            <div className="grid-4">
              {cvenues.map(v => <div className="cvenue-card" key={v.name}>
                  <PhotoPlaceholder label={`${v.name} Photo`} tone={v.tone} />
                  <div className="cvenue-card__body">
                    <h3>{v.name}</h3>
                    <p>{v.desc}</p>
                    <div className="cvenue-card__meta"><span><Users size={13} /> {v.guests}</span><span><Maximize2 size={13} /> {v.size}</span></div>
                    <button className="link-arrow">Explore Venue <ArrowUpRight size={14} /></button>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="support-row">
              <div>
                <span className="eyebrow">End-to-End Support</span>
                <h2 className="section-heading" style={{
              marginTop: 10
            }}>Everything You Need, Thoughtfully Delivered.</h2>
                <p style={{
              fontSize: 14.5,
              color: "#546575",
              margin: "14px 0 20px",
              maxWidth: 380
            }}>Our expert team ensures every detail is meticulously planned for a seamless event.</p>
                <button className="btn-ghost">Our Services</button>
              </div>
              <div className="support-grid">
                {[{
              icon: CalendarDays,
              t: "Event Planning",
              s: "Concept to execution"
            }, {
              icon: Monitor,
              t: "AV & Tech Support",
              s: "Latest audio-visual setup"
            }, {
              icon: UtensilsCrossed,
              t: "Catering Solutions",
              s: "Custom menus for every need"
            }, {
              icon: BedDouble,
              t: "Accommodation",
              s: "Comfortable stays for your team"
            }, {
              icon: Users,
              t: "Team Building",
              s: "Fun, engaging activities"
            }, {
              icon: Car,
              t: "Transportation",
              s: "Hassle-free transfers"
            }, {
              icon: Sparkles,
              t: "Branding & Décor",
              s: "Custom setups & theming"
            }, {
              icon: HelpCircle,
              t: "On-site Assistance",
              s: "24/7 event support"
            }].map(s => <div className="s-item" key={s.t}><div className="icon-wrap"><s.icon size={18} strokeWidth={1.4} /></div><div><h5>{s.t}</h5><span>{s.s}</span></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Ideal For</span>
            <h2 className="section-heading" style={{
          marginTop: 10,
          marginBottom: 30
        }}>Every Occasion, Perfectly Managed</h2>
            <div className="occasion-row">
              <div className="occasion-pills">
                {[{
              icon: Users,
              t: "Conferences"
            }, {
              icon: Monitor,
              t: "Seminars"
            }, {
              icon: Briefcase,
              t: "Board Meetings"
            }, {
              icon: Sparkles,
              t: "Product Launches"
            }, {
              icon: Gift,
              t: "Incentive Trips"
            }, {
              icon: Handshake,
              t: "Team Building"
            }, {
              icon: Building2,
              t: "Exhibitions"
            }, {
              icon: PartyPopper,
              t: "Corporate Parties"
            }].map(p => <div className="p-item" key={p.t}><p.icon size={20} strokeWidth={1.4} /><span>{p.t}</span></div>)}
              </div>
              <PhotoPlaceholder label="Colleagues Networking Photo" tone="sand" />
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <span className="eyebrow">A Glimpse of Our Events</span>
            <h2 className="section-heading" style={{
          marginTop: 10,
          marginBottom: 26
        }}>Where Business Meets the Beach</h2>
            <div className="events-strip">
              {["Conference Hall", "Gala Dinner", "Team Lawn", "Boardroom", "Evening Reception"].map((c, i) => <PhotoPlaceholder key={c} label={c} tone={i % 2 === 0 ? "navy" : "teal"} />)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="partner-band">
              <span className="eyebrow">Trusted by Businesses</span>
              <h3>What Our Partners Say</h3>
              {[{
            q: "Bombay Beach Resort provided the perfect setting for our annual leadership meet. Everything was flawless, from planning to execution.",
            a: "Rahul Mehra",
            r: "Director, TechSolutions India"
          }, {
            q: "The team's professionalism and attention to detail made our product launch a huge success. Truly world-class experience.",
            a: "Priya Sinha",
            r: "Marketing Head, InnovateX"
          }, {
            q: "A beautiful location with exceptional service. Our team had a memorable and productive offsite stay.",
            a: "Arjun Kapoor",
            r: "CEO, FutureWorks"
          }].map(t => <div className="p-card" key={t.a}>
                  <p>"{t.q}"</p>
                  <div className="author"><PhotoPlaceholder label="Guest" tone="gold" icon={Users} className="ph" style={{
                width: 32,
                height: 32,
                borderRadius: "50%"
              }} /><div><strong>{t.a}</strong><span>{t.r}</span></div></div>
                </div>)}
              <div className="p-cta">
                <Users size={26} style={{
              color: "var(--navy-deep)"
            }} />
                <h4>Let's Plan Your Next Event</h4>
                <a href="#enquiry" className="btn-navy" style={{
              background: "var(--navy-deep)"
            }}>Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="enquiry">
          <div className="ready-band">
            <div>
              <span className="eyebrow">Ready to Plan an Extraordinary Event?</span>
              <p style={{
            margin: "6px 0 0",
            fontSize: 14,
            color: "#546575"
          }}>Share your requirements and our team will get back to you with a personalized proposal.</p>
            </div>
            <div className="items">
              <span><Phone size={16} /> +91 98765 43210</span>
              <span><MessageCircle size={16} /> Chat on WhatsApp</span>
            </div>
            <a href="#" className="btn-gold">Enquire Now <ArrowRight size={15} style={{
            verticalAlign: "-2px",
            marginLeft: 6
          }} /></a>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="form-card" style={{
          maxWidth: 760,
          margin: "0 auto"
        }}>
              <span className="eyebrow">Corporate Enquiry</span>
              <h3 style={{
            fontFamily: "var(--serif)",
            fontSize: 24,
            color: "var(--navy)",
            margin: "10px 0 22px"
          }}>Tell Us About Your Event</h3>
              {submitted ? <div className="success-banner"><CheckCircle2 size={20} /> Thank you! Our events team will reach out within one business day.</div> : <form onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}>
                  <div className="form-grid">
                    <div className="form-field"><label>Company Name*</label><input required type="text" placeholder="Your organization" /></div>
                    <div className="form-field"><label>Contact Person*</label><input required type="text" placeholder="Full name" /></div>
                    <div className="form-field"><label>Email Address*</label><input required type="email" placeholder="you@company.com" /></div>
                    <div className="form-field"><label>Phone Number*</label><input required type="tel" placeholder="+91" /></div>
                    <div className="form-field"><label>Event Type*</label>
                      <select required defaultValue=""><option value="" disabled>Select event type</option><option>Conference</option><option>Corporate Retreat</option><option>Team Building</option><option>Product Launch</option><option>Other</option></select>
                    </div>
                    <div className="form-field"><label>Estimated Guests*</label><input required type="number" placeholder="e.g. 50" /></div>
                    <div className="form-field full"><label>Preferred Dates</label><input type="text" placeholder="e.g. 12–14 Sept 2026" /></div>
                    <div className="form-field full"><label>Additional Requirements</label><textarea placeholder="Tell us about your event goals, AV needs, catering preferences..." /></div>
                  </div>
                  <button type="submit" className="btn-gold form-submit">Submit Enquiry <ArrowRight size={15} style={{
                verticalAlign: "-2px",
                marginLeft: 6
              }} /></button>
                  <p className="form-note">Our events team typically responds within 24 hours.</p>
                </form>}
            </div>
          </div>
        </section>

    </>;
}
