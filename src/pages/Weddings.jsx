import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
function WeddingFAQ() {
  const items = [{
    q: "How many guests can Bombay Beach Resort accommodate for a wedding?",
    a: "Our venues can host anywhere from an intimate gathering of 50 guests to a grand celebration of up to 500 guests, across our beachfront lawn, ballroom and poolside terrace."
  }, {
    q: "Do you offer all-inclusive wedding packages?",
    a: "Yes. Our packages can include venue, catering, décor, accommodation and coordination — or you can customize each element to your preference."
  }, {
    q: "Can we bring our own wedding planner or vendors?",
    a: "Absolutely. You're welcome to bring your own planner and vendors, or work entirely with our in-house wedding team."
  }, {
    q: "How far in advance should we book our wedding date?",
    a: "We recommend booking at least 6-9 months in advance, especially for peak season dates (October to March)."
  }];
  const [open, setOpen] = useState(0);
  return <div>
      {items.map((it, i) => <div className={`accordion-item ${open === i ? "open" : ""}`} key={it.q}>
          <button className="acc-trigger" onClick={() => setOpen(open === i ? -1 : i)}>{it.q} <ChevronDown size={18} /></button>
          <div className="accordion-item__panel"><p>{it.a}</p></div>
        </div>)}
    </div>;
}
export default function WeddingsPage() {
  const venues = [{
    name: "Oceanfront Lawn",
    desc: "Breathtaking open-air venue with the sound of waves and endless horizon.",
    guests: "Up to 500 Guests",
    type: "Outdoor Venue",
    tone: "navy"
  }, {
    name: "Grand Ballroom",
    desc: "Luxurious indoor space for grand celebrations in style and comfort.",
    guests: "Up to 350 Guests",
    type: "Indoor Venue",
    tone: "sand"
  }, {
    name: "Poolside Terrace",
    desc: "Elegant terrace venue with pool views and a magical evening ambiance.",
    guests: "Up to 200 Guests",
    type: "Semi Outdoor",
    tone: "teal"
  }, {
    name: "Beach Mandap",
    desc: "Intimate beachfront ceremonies with nature as your witness.",
    guests: "Up to 100 Guests",
    type: "Semi Outdoor",
    tone: "navy"
  }];
  return <>

        <section className="page-hero">
          <img src="/weddings-hero.png" alt="Weddings at Bombay Beach Resort" className="page-hero__img" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Weddings</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Weddings at Bombay Beach Resort</span>
              <h1 style={{
            marginTop: 10
          }}>Your Dream Wedding.<br />Perfectly Crafted.</h1>
              <p className="lead">Celebrate love with timeless elegance by the sea. From intimate vows to grand celebrations, we create moments that last a lifetime.</p>
              <div style={{
            marginTop: 22
          }}>
                <a href="#enquiry" className="btn-gold">Plan Your Wedding <ArrowRight size={15} style={{
                verticalAlign: "-2px",
                marginLeft: 6
              }} /></a>
              </div>
              <div style={{
            marginTop: 16,
            fontSize: 13,
            color: "rgba(255,255,255,.8)",
            display: "flex",
            gap: 8,
            alignItems: "center"
          }}>
                <Phone size={14} /> Schedule a Personalized Consultation · <strong style={{
              color: "#fff"
            }}>+91 98765 43210</strong>
              </div>

              <div className="hero-quickcard">
                <div className="item"><Umbrella size={17} /><div><strong>Stunning Beachfront</strong><span>Venues</span></div></div>
                <div className="item"><Users size={17} /><div><strong>Up to 500 Guests</strong><span>Capacity</span></div></div>
                <div className="item"><Gem size={17} /><div><strong>All-in-One</strong><span>Wedding Solutions</span></div></div>
                <div className="item"><Sparkles size={17} /><div><strong>Expert Wedding</strong><span>Planners</span></div></div>
              </div>

              <div className="hero-bar" style={{
            marginTop: 34
          }}>
                {[{
              icon: Building2,
              t: "Exquisite Venues",
              s: "Indoor, outdoor & beachfront"
            }, {
              icon: Sparkles,
              t: "Curated Experiences",
              s: "Tailored to your story"
            }, {
              icon: UtensilsCrossed,
              t: "Gourmet Celebrations",
              s: "World-class cuisine"
            }, {
              icon: ShieldCheck,
              t: "Attention to Detail",
              s: "Flawless execution"
            }, {
              icon: Camera,
              t: "Memories for a Lifetime",
              s: "Captured beautifully"
            }].map(i => <div className="hero-bar__field" key={i.t}><i.icon size={17} /><div><label>{i.s}</label><div className="value" style={{
                  fontSize: 13
                }}>{i.t}</div></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-top">
              <div><span className="eyebrow">Our Wedding Venues</span><h2 className="section-heading" style={{
              marginTop: 10
            }}>Perfect Settings for Your Big Day</h2></div>
              <button className="btn-ghost">View All Venues <ArrowRight size={15} style={{
              verticalAlign: "-2px",
              marginLeft: 6
            }} /></button>
            </div>
            <div className="grid-4">
              {venues.map(v => <div className="venuecard2" key={v.name}>
                  <PhotoPlaceholder label={`${v.name} Photo`} tone={v.tone} />
                  <div className="venuecard2__body">
                    <h3>{v.name}</h3>
                    <p>{v.desc}</p>
                    <div className="venuecard2__meta"><span><Users size={13} /> {v.guests}</span><span><MapPin size={13} /> {v.type}</span></div>
                    <button className="link-arrow">Explore Venue <ArrowUpRight size={14} /></button>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="plan-band">
              <div className="plan-band__left">
                <span className="eyebrow">We Plan. You Celebrate.</span>
                <h3 style={{
              fontFamily: "var(--serif)",
              fontSize: 26,
              color: "var(--navy)",
              margin: "10px 0 0"
            }}>Every Detail, Perfectly Planned for You.</h3>
                <p style={{
              fontSize: 14,
              color: "#546575",
              margin: "12px 0 0"
            }}>Our dedicated wedding specialists ensure a seamless experience from start to finish.</p>
                <div className="plan-band__stats">
                  <div className="s"><strong>500+</strong><span>Weddings Hosted</span></div>
                  <div className="s"><strong>50+</strong><span>Expert Team Members</span></div>
                  <div className="s"><strong>10+</strong><span>Years of Wedding Excellence</span></div>
                  <div className="s"><strong>100%</strong><span>Commitment to Perfection</span></div>
                </div>
                <div className="plan-band__checklist">
                  {["Personalized Planning", "Creative Décor & Design", "Hospitality for You & Your Guests", "End-to-End Coordination"].map(t => <div className="item" key={t}><Check size={16} /> {t}</div>)}
                </div>
              </div>
              <div className="plan-band__right">
                <PhotoPlaceholder label="Bride and Groom Photo" tone="navy" />
                <div className="plan-band__scrim" />
                <div className="plan-band__right-body">
                  <h4>Let's Create Your Dream Wedding</h4>
                  <p>Share your vision with us and we'll bring it to life.</p>
                  <a href="#enquiry" className="btn-gold">Enquire Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Our Wedding Services</span>
            <h2 className="section-heading" style={{
          marginTop: 10,
          marginBottom: 34
        }}>Everything You Need, Beautifully Delivered</h2>
            <div className="service-icon-grid">
              {[{
            icon: Building2,
            t: "Venue Selection"
          }, {
            icon: UtensilsCrossed,
            t: "Catering & Menus"
          }, {
            icon: Sparkles,
            t: "Décor & Styling"
          }, {
            icon: PartyPopper,
            t: "Entertainment"
          }, {
            icon: Camera,
            t: "Photography & Videography"
          }, {
            icon: BedDouble,
            t: "Guest Accommodation"
          }, {
            icon: Heart,
            t: "Honeymoon & Travel"
          }, {
            icon: Mail,
            t: "Invitations & Stationery"
          }, {
            icon: Car,
            t: "Logistics & Transport"
          }, {
            icon: CheckCircle2,
            t: "On-site Coordination"
          }].map(s => <div className="s-item" key={s.t}><div className="icon-wrap"><s.icon size={20} strokeWidth={1.4} /></div><span>{s.t}</span></div>)}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="testimonial-band">
              <div className="testimonial-band__top">
                <div className="left"><span className="eyebrow">Love Stories</span><h3>Words from Our Happy Couples</h3></div>
                <div className="testimonial-band__rating">
                  <span style={{
                fontWeight: 700
              }}>Google</span>
                  <span className="stars">{Array.from({
                  length: 5
                }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}</span>
                  <span style={{
                fontSize: 13
              }}>4.9 · Based on 230+ reviews</span>
                </div>
              </div>
              <div className="t-cards">
                {[{
              q: "The most magical wedding we could have ever imagined. The team made everything so effortless.",
              a: "Aishwarya & Rohit"
            }, {
              q: "The venue, the food, the décor — everything was perfect. Our guests are still talking about it!",
              a: "Neha & Karan"
            }, {
              q: "Professional, creative and so supportive throughout. Highly recommend BBR!",
              a: "Simran & Aditya"
            }].map(t => <div className="t-card" key={t.a}>
                    <Quote size={20} fill="currentColor" strokeWidth={0} />
                    <p>"{t.q}"</p>
                    <div className="author"><PhotoPlaceholder label="Couple" tone="gold" icon={Heart} className="ph" style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%"
                }} /><span>— {t.a}</span></div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">A Glimpse of Celebrations</span>
            <h2 className="section-heading" style={{
          marginTop: 10,
          marginBottom: 26
        }}>Moments Worth Cherishing</h2>
            <div className="celeb-strip">
              {["Mandap Decor", "Table Setting", "Beach Ceremony", "Lounge Setup", "Fairy Lights"].map((c, i) => <PhotoPlaceholder key={c} label={c} tone={i % 2 === 0 ? "sand" : "navy"} />)}
            </div>
          </div>
        </section>

        <section className="container" id="enquiry">
          <div className="plan-cta">
            <div>
              <span className="eyebrow">Ready to Start Planning?</span>
              <p style={{
            margin: "6px 0 0",
            fontSize: 14,
            color: "#546575"
          }}>Our wedding experts are here to help you every step of the way.</p>
            </div>
            <div className="items">
              <div className="i"><Phone size={16} /> Call Us · +91 98765 43210</div>
              <div className="i"><MessageCircle size={16} /> Chat on WhatsApp</div>
              <div className="i"><Calendar size={16} /> Book a Consultation</div>
            </div>
            <a href="#" className="btn-gold">Plan Your Wedding <ArrowRight size={15} style={{
            verticalAlign: "-2px",
            marginLeft: 6
          }} /></a>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container" style={{
        maxWidth: 820
      }}>
            <span className="eyebrow">Wedding FAQ</span>
            <h2 className="section-heading" style={{
          marginTop: 10,
          marginBottom: 20
        }}>Common Questions</h2>
            <WeddingFAQ />
          </div>
        </section>

    </>;
}
