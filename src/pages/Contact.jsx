import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return <>

        <section className="page-hero" style={{
      minHeight: 400
    }}>
          <PhotoPlaceholder label="Contact — Resort Entrance at Night" tone="navy" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Contact</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Contact Us</span>
              <h1 style={{
            marginTop: 10
          }}>We're Here to<br />Welcome You.</h1>
              <p className="lead">Whether you have a question, need assistance, or want to plan something special — our team is ready to help.</p>
              <div style={{
            marginTop: 22,
            display: "inline-flex",
            gap: 14,
            alignItems: "center",
            border: "1px solid rgba(231,179,77,.5)",
            borderRadius: 10,
            padding: "14px 20px"
          }}>
                <Bell size={20} style={{
              color: "var(--gold)"
            }} />
                <div><strong style={{
                display: "block",
                fontSize: 14
              }}>24/7 Guest Assistance</strong><span style={{
                fontSize: 12.5,
                color: "rgba(255,255,255,.7)"
              }}>We're available around the clock to make your stay seamless.</span></div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="info-strip">
            {[{
          icon: Phone,
          t: "Call Us",
          s: "+91 98765 43210\\n+91 98765 43211"
        }, {
          icon: MessageCircle,
          t: "WhatsApp",
          s: "+91 98765 43210\\nChat with us anytime"
        }, {
          icon: Mail,
          t: "Email Us",
          s: "info@bombaybeachresort.com\\nreservations@bombaybeachresort.com"
        }, {
          icon: Clock,
          t: "Reservations Hours",
          s: "Mon – Sun: 24 Hours\\nAlways at your service"
        }].map(c => <div className="card" key={c.t}>
                <div className="icon-wrap"><c.icon size={19} /></div>
                <div><h4>{c.t}</h4><span style={{
              whiteSpace: "pre-line"
            }}>{c.s}</span></div>
              </div>)}
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="contact-grid">
              <div>
                <span className="eyebrow">Get in Touch</span>
                <h2 className="section-heading" style={{
              marginTop: 10
            }}>Send Us a Message</h2>
                <div className="section-underline" />
                <p style={{
              fontSize: 14,
              color: "#546575",
              marginBottom: 20
            }}>Fill out the form and our team will get back to you as soon as possible.</p>

                {sent ? <div className="success-banner"><CheckCircle2 size={20} /> Thank you! We've received your message and will respond shortly.</div> : <form onSubmit={e => {
              e.preventDefault();
              setSent(true);
            }}>
                    <div className="form-grid">
                      <div className="form-field"><label>Full Name*</label><input required type="text" placeholder="Your name" /></div>
                      <div className="form-field"><label>Email Address*</label><input required type="email" placeholder="you@email.com" /></div>
                      <div className="form-field"><label>Phone Number*</label><input required type="tel" placeholder="+91" /></div>
                      <div className="form-field"><label>Subject*</label>
                        <select required defaultValue=""><option value="" disabled>Select a subject</option><option>General Enquiry</option><option>Room Reservation</option><option>Wedding Enquiry</option><option>Corporate Event</option><option>Feedback</option></select>
                      </div>
                      <div className="form-field full"><label>Message*</label><textarea required placeholder="Tell us how we can help..." /></div>
                    </div>
                    <div className="checkbox-row"><input type="checkbox" required id="agree" /><label htmlFor="agree">I agree to the <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms &amp; Conditions</Link>.</label></div>
                    <button type="submit" className="btn-gold form-submit">Send Message <ArrowRight size={15} style={{
                  verticalAlign: "-2px",
                  marginLeft: 6
                }} /></button>
                    <p className="form-note"><Lock size={12} style={{
                  verticalAlign: "-1px",
                  marginRight: 4
                }} />Your information is secure and will never be shared.</p>
                  </form>}
              </div>

              <div>
                <span className="eyebrow">Find Us</span>
                <h2 className="section-heading" style={{
              marginTop: 10,
              marginBottom: 20
            }}>Visit Bombay Beach Resort</h2>
                <div className="map-ph"><PhotoPlaceholder label="Map — Mandarmani Beach Location" tone="sand" icon={MapPin} /></div>
                <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
              flexWrap: "wrap",
              gap: 14
            }}>
                  <div style={{
                display: "flex",
                gap: 12
              }}>
                    <MapPin size={18} style={{
                  color: "var(--gold-dark)",
                  flexShrink: 0,
                  marginTop: 2
                }} />
                    <div><strong style={{
                    display: "block",
                    fontSize: 14.5,
                    color: "var(--navy)"
                  }}>Bombay Beach Resort</strong><span style={{
                    fontSize: 13,
                    color: "#607485"
                  }}>Mandarmani Beach, Purba Medinipur, West Bengal 721455, India</span></div>
                  </div>
                  <a href="#" className="btn-navy">Get Directions <ArrowRight size={15} style={{
                  verticalAlign: "-2px",
                  marginLeft: 6
                }} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="special-band">
            <div className="special-band__text">
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Plan Something Special?</span>
              <h3>Our Team is Here to Help</h3>
              <p>We help you create unforgettable memories for any occasion.</p>
              <ul>
                {[{
              icon: Heart,
              t: "Romantic Getaways"
            }, {
              icon: Users,
              t: "Weddings & Celebrations"
            }, {
              icon: Briefcase,
              t: "Corporate Events & MICE"
            }, {
              icon: Users,
              t: "Group Bookings"
            }].map(i => <li key={i.t}><i.icon size={16} className="item-icon" /> {i.t}</li>)}
              </ul>
              <Link to="/weddings" className="btn-gold">Enquire Now <ArrowRight size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></Link>
            </div>
            <div className="special-band__media"><PhotoPlaceholder label="Beachfront Gazebo at Sunset" tone="teal" /></div>
            <div className="special-band__right">
              <h3>We're Just a Message Away</h3>
              {[{
            icon: Send,
            t: "Quick Response",
            s: "We typically respond within 30 minutes."
          }, {
            icon: Sparkles,
            t: "Personalized Assistance",
            s: "Tailored recommendations for your perfect stay."
          }, {
            icon: Heart,
            t: "Memorable Experiences",
            s: "From planning to checkout, we're with you."
          }].map(r => <div className="row" key={r.t}><div className="icon-wrap"><r.icon size={17} /></div><div><h5>{r.t}</h5><span>{r.s}</span></div></div>)}
            </div>
          </div>
        </section>

        <section className="container" style={{
      borderTop: "1px solid var(--mist)"
    }}>
          <div className="trust-strip-light">
            {[{
          icon: Bell,
          t: "Dedicated Concierge",
          s: "Personal care for every guest"
        }, {
          icon: Gem,
          t: "Best Price Guarantee",
          s: "Book direct for the best rates"
        }, {
          icon: CalendarDays,
          t: "Flexible Booking",
          s: "Easy changes & cancellations"
        }, {
          icon: ShieldCheck,
          t: "Safe & Secure",
          s: "Your safety is our priority"
        }].map(i => <div className="i" key={i.t}><i.icon size={20} /><div><strong>{i.t}</strong><span>{i.s}</span></div></div>)}
          </div>
        </section>

    </>;
}
