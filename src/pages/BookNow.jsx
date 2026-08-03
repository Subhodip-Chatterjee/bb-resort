import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, Phone, MessageCircle, Navigation, Mail, MapPin, Medal, ArrowUpRight, ArrowRight, Check, CheckCircle2, Star, Quote, Plus, Minus, Image as ImageIcon, BedDouble, Users, Maximize2, Wifi, Wind, Tv, Coffee, ShieldCheck, Bath, UtensilsCrossed, Wine, Fish, Utensils, Waves, Umbrella, Anchor, Car, Bell, Shirt, Dumbbell, Heart, Compass, Sunrise, Sunset, PartyPopper, Gem, Sparkles, Building2, Briefcase, Handshake, Monitor, Percent, Tag, Gift, CalendarDays, Filter, Camera, Send, Clock, HelpCircle, Calendar, CreditCard, User, Leaf, Award, Volume2, VolumeX, PlayCircle, RefreshCw, Lock, Baby, Sailboat } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
export default function BookNowPage() {
  const [step, setStep] = useState(1);
  const today = new Date();
  const inDef = new Date(today);
  inDef.setDate(today.getDate() + 21);
  const outDef = new Date(today);
  outDef.setDate(today.getDate() + 24);
  const [checkIn, setCheckIn] = useState(inDef.toISOString().slice(0, 10));
  const [checkOut, setCheckOut] = useState(outDef.toISOString().slice(0, 10));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [roomsCount, setRoomsCount] = useState(1);
  const [promoCode, setPromoCode] = useState("");
  const [showPromo, setShowPromo] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("beachfront");
  const [addons, setAddonState] = useState({
    breakfast: false,
    airport: false,
    spa: false,
    dinner: false
  });
  const [guest, setGuest] = useState({
    name: "",
    email: "",
    phone: "",
    requests: ""
  });
  const [confirmed, setConfirmed] = useState(false);
  function fmt(d) {
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  function weekday(d) {
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-IN", {
      weekday: "long"
    });
  }
  const nights = Math.max(1, Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000));
  const rooms = [{
    id: "ocean",
    name: "Deluxe Ocean View Room",
    meta: "2 Adults + 1 Child · King Bed · 450 sq. ft.",
    desc: "Unwind in comfort with stunning ocean views, modern amenities and a private balcony.",
    price: 12999,
    tone: "sand"
  }, {
    id: "beachfront",
    name: "Premium Beachfront Room",
    meta: "2 Adults + 1 Child · King Bed · 600 sq. ft.",
    desc: "Wake up to the waves. Spacious, elegant and steps away from the beach.",
    price: 16999,
    badge: "Most Popular",
    tone: "navy"
  }, {
    id: "villa",
    name: "Luxury Pool Villa",
    meta: "2 Adults + 2 Children · King Bed · 900 sq. ft.",
    desc: "Private pool, tropical garden and unmatched privacy for the ultimate luxury escape.",
    price: 29999,
    tone: "teal"
  }];
  const selectedRoom = rooms.find(r => r.id === selectedRoomId) || rooms[1];
  const addonList = [{
    id: "breakfast",
    name: "Breakfast Buffet",
    sub: "Per Person / Per Day",
    price: 1999,
    icon: UtensilsCrossed
  }, {
    id: "airport",
    name: "Airport Pickup",
    sub: "One Way",
    price: 2499,
    icon: Car
  }, {
    id: "spa",
    name: "Spa Indulgence",
    sub: "Per Person",
    price: 3499,
    icon: Leaf
  }, {
    id: "dinner",
    name: "Romantic Dinner",
    sub: "Per Couple",
    price: 4999,
    icon: Heart
  }];
  const addonsTotal = addonList.reduce((sum, a) => sum + (addons[a.id] ? a.price : 0), 0);
  const roomSubtotal = selectedRoom.price * nights * roomsCount;
  const taxes = Math.round((roomSubtotal + addonsTotal) * 0.12);
  const total = roomSubtotal + addonsTotal + taxes;
  const steps = ["Dates & Guests", "Select Room", "Add Extras", "Guest Details", "Confirm & Pay"];
  return <>

        <section className="page-hero" style={{
      minHeight: 400
    }}>
          <PhotoPlaceholder label="Book Now — Resort Pool at Sunset" tone="navy" />
          <div className="page-hero__scrim" />
          <div className="page-hero__content">
            <div className="container">
              <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Book Now</span></div>
              <span className="eyebrow" style={{
            color: "var(--gold)"
          }}>Book Your Stay</span>
              <h1 style={{
            marginTop: 10
          }}>Your Perfect Getaway<br />Starts Here</h1>
              <p className="lead">Best rates guaranteed when you book direct. Secure your stay in just a few simple steps.</p>
              <div style={{
            display: "flex",
            gap: 26,
            flexWrap: "wrap",
            marginTop: 22
          }}>
                {[{
              icon: Gem,
              t: "Best Price Guarantee"
            }, {
              icon: Tag,
              t: "No Hidden Charges"
            }, {
              icon: RefreshCw,
              t: "Flexible Cancellation"
            }, {
              icon: Lock,
              t: "Secure Payments"
            }].map(i => <span key={i.t} style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "rgba(255,255,255,.85)"
            }}><i.icon size={16} style={{
                color: "var(--gold)"
              }} /> {i.t}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {confirmed ? <div className="success-card">
                <div className="icon-wrap"><CheckCircle2 size={36} /></div>
                <h2>Booking Confirmed!</h2>
                <p>Thank you, {guest.name || "Guest"}. A confirmation has been sent to {guest.email || "your email"}.</p>
                <div className="conf-code">BBR-{new Date().getFullYear()}-{Math.floor(1000 + Math.random() * 9000)}</div>
                <p>{selectedRoom.name} · {fmt(checkIn)} – {fmt(checkOut)} · {nights} Night{nights > 1 ? "s" : ""}</p>
                <p style={{
            fontWeight: 700,
            color: "var(--navy)",
            marginTop: 14
          }}>Total Paid: ₹{total.toLocaleString("en-IN")}</p>
                <Link to="/" className="btn-gold" style={{
            marginTop: 24,
            display: "inline-flex"
          }}>Return to Homepage</Link>
              </div> : <>
                <div className="wizard-steps">
                  {steps.map((s, i) => <React.Fragment key={s}>
                      <div className={`step ${step === i + 1 ? "active" : ""} ${step > i + 1 ? "done" : ""}`}>
                        <div className="dot">{step > i + 1 ? <Check size={15} /> : i + 1}</div>
                        <span className="label">{s}</span>
                      </div>
                      {i < steps.length - 1 && <div className={`line ${step > i + 1 ? "done" : ""}`} />}
                    </React.Fragment>)}
                </div>

                <div className="booking-layout">
                  <div>
                    {step === 1 && <div className="dates-card">
                        <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 19,
                  color: "var(--navy)",
                  margin: "0 0 18px"
                }}>When Are You Staying?</h3>
                        <div className="dates-grid">
                          <div className="f">
                            <label>Check-in</label>
                            <div className="box"><Calendar size={16} /><div><div className="value">{fmt(checkIn)}</div><div className="sub">{weekday(checkIn)}</div></div><input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} /></div>
                          </div>
                          <div className="f">
                            <label>Check-out</label>
                            <div className="box"><Calendar size={16} /><div><div className="value">{fmt(checkOut)}</div><div className="sub">{weekday(checkOut)}</div></div><input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} /></div>
                          </div>
                          <div className="f">
                            <label>Guests</label>
                            <div className="box"><Users size={16} /><div><div className="value">{adults} Adults, {children} Child</div></div></div>
                          </div>
                          <div className="f">
                            <label>Rooms</label>
                            <div className="box"><BedDouble size={16} /><div><div className="value">{roomsCount} Room{roomsCount > 1 ? "s" : ""}</div></div></div>
                          </div>
                          <button className="btn-navy" onClick={() => setStep(2)}>Search Rooms</button>
                        </div>

                        <div style={{
                  display: "flex",
                  gap: 30,
                  marginTop: 22,
                  flexWrap: "wrap"
                }}>
                          <div className="stepper" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                  }}>
                            <span style={{
                      fontSize: 13,
                      color: "#546575"
                    }}>Adults</span>
                            <div className="stepper-fn"><button className="qty-btn" onClick={() => setAdults(a => Math.max(1, a - 1))}><Minus size={13} /></button><span style={{
                        minWidth: 18,
                        textAlign: "center",
                        fontWeight: 700
                      }}>{adults}</span><button className="qty-btn" onClick={() => setAdults(a => a + 1)}><Plus size={13} /></button></div>
                          </div>
                          <div className="stepper" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                  }}>
                            <span style={{
                      fontSize: 13,
                      color: "#546575"
                    }}>Children</span>
                            <div className="stepper-fn"><button className="qty-btn" onClick={() => setChildren(a => Math.max(0, a - 1))}><Minus size={13} /></button><span style={{
                        minWidth: 18,
                        textAlign: "center",
                        fontWeight: 700
                      }}>{children}</span><button className="qty-btn" onClick={() => setChildren(a => a + 1)}><Plus size={13} /></button></div>
                          </div>
                          <div className="stepper" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                  }}>
                            <span style={{
                      fontSize: 13,
                      color: "#546575"
                    }}>Rooms</span>
                            <div className="stepper-fn"><button className="qty-btn" onClick={() => setRoomsCount(a => Math.max(1, a - 1))}><Minus size={13} /></button><span style={{
                        minWidth: 18,
                        textAlign: "center",
                        fontWeight: 700
                      }}>{roomsCount}</span><button className="qty-btn" onClick={() => setRoomsCount(a => a + 1)}><Plus size={13} /></button></div>
                          </div>
                        </div>

                        <div className="promo-row">
                          <span><Tag size={14} style={{
                      verticalAlign: "-2px",
                      marginRight: 6
                    }} />Have a promo code?</span>
                          <a href="#" onClick={e => {
                    e.preventDefault();
                    setShowPromo(v => !v);
                  }}>Apply Code</a>
                        </div>
                        {showPromo && <div style={{
                  marginTop: 12,
                  display: "flex",
                  gap: 10
                }}>
                            <input value={promoCode} onChange={e => setPromoCode(e.target.value)} placeholder="Enter promo code" style={{
                    flex: 1,
                    border: "1px solid var(--mist)",
                    borderRadius: 8,
                    padding: "10px 14px"
                  }} />
                            <button className="btn-ghost">Apply</button>
                          </div>}
                      </div>}

                    {step === 2 && <div>
                        <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  color: "var(--navy)",
                  margin: "0 0 6px"
                }}>Select Your Room</h3>
                        <p style={{
                  fontSize: 14,
                  color: "#546575",
                  marginBottom: 22
                }}>Choose from our finest collection of rooms and suites.</p>
                        <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16
                }}>
                          {rooms.map(r => <div key={r.id} className={`room-select-card ${selectedRoomId === r.id ? "selected" : ""}`} onClick={() => setSelectedRoomId(r.id)}>
                              <PhotoPlaceholder label={`${r.name} Photo`} tone={r.tone} className="ph" />
                              <div className="room-select-card__body">
                                <div className="room-select-card__top">
                                  <div>
                                    {r.badge && <span style={{
                            fontSize: 10.5,
                            fontWeight: 700,
                            color: "var(--gold-dark)",
                            textTransform: "uppercase",
                            letterSpacing: ".05em"
                          }}>{r.badge}</span>}
                                    <h4>{r.name}</h4>
                                    <div className="meta">{r.meta}</div>
                                  </div>
                                  <div className="radio-pick" />
                                </div>
                                <p style={{
                        fontSize: 12.5,
                        color: "#607485",
                        margin: "0 0 10px"
                      }}>{r.desc}</p>
                                <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}>
                                  <span style={{
                          fontSize: 12,
                          color: "#3b7a56",
                          display: "flex",
                          alignItems: "center",
                          gap: 5
                        }}><CheckCircle2 size={13} /> Breakfast Included</span>
                                  <div className="price">₹{r.price.toLocaleString("en-IN")} <span style={{
                            fontSize: 12,
                            color: "#8096a5",
                            fontFamily: "var(--sans)"
                          }}>/ night</span></div>
                                </div>
                              </div>
                            </div>)}
                        </div>
                        <div className="step-actions">
                          <button className="btn-ghost" onClick={() => setStep(1)}>Back</button>
                          <button className="btn-navy" onClick={() => setStep(3)}>Continue <ArrowRight size={15} style={{
                      verticalAlign: "-2px",
                      marginLeft: 6
                    }} /></button>
                        </div>
                      </div>}

                    {step === 3 && <div>
                        <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  color: "var(--navy)",
                  margin: "0 0 6px"
                }}>Enhance Your Stay</h3>
                        <p style={{
                  fontSize: 14,
                  color: "#546575",
                  marginBottom: 22
                }}>Add experiences and services to make your stay unforgettable.</p>
                        {addonList.map(a => <div className="addon-row" key={a.id}>
                            <div className="left">
                              <div className="icon-wrap"><a.icon size={19} /></div>
                              <div><h5>{a.name}</h5><p>{a.sub}</p></div>
                            </div>
                            <div style={{
                    display: "flex",
                    alignItems: "center"
                  }}>
                              <span className="price-tag">₹{a.price.toLocaleString("en-IN")}</span>
                              <button className={`toggle-switch ${addons[a.id] ? "on" : ""}`} onClick={() => setAddonState(s => ({
                      ...s,
                      [a.id]: !s[a.id]
                    }))} aria-label={`Toggle ${a.name}`} />
                            </div>
                          </div>)}
                        <div className="step-actions">
                          <button className="btn-ghost" onClick={() => setStep(2)}>Back</button>
                          <button className="btn-navy" onClick={() => setStep(4)}>Continue <ArrowRight size={15} style={{
                      verticalAlign: "-2px",
                      marginLeft: 6
                    }} /></button>
                        </div>
                      </div>}

                    {step === 4 && <div className="form-card">
                        <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  color: "var(--navy)",
                  margin: "0 0 22px"
                }}>Guest Details</h3>
                        <div className="guest-form-row">
                          <div className="form-field"><label>Full Name*</label><input required value={guest.name} onChange={e => setGuest({
                      ...guest,
                      name: e.target.value
                    })} placeholder="Your name" /></div>
                          <div className="form-field"><label>Email Address*</label><input required type="email" value={guest.email} onChange={e => setGuest({
                      ...guest,
                      email: e.target.value
                    })} placeholder="you@email.com" /></div>
                          <div className="form-field"><label>Phone Number*</label><input required type="tel" value={guest.phone} onChange={e => setGuest({
                      ...guest,
                      phone: e.target.value
                    })} placeholder="+91" /></div>
                          <div className="form-field"><label>Estimated Arrival Time</label><input type="time" /></div>
                          <div className="form-field full"><label>Special Requests</label><textarea value={guest.requests} onChange={e => setGuest({
                      ...guest,
                      requests: e.target.value
                    })} placeholder="Anniversary, early check-in, dietary preferences..." /></div>
                        </div>
                        <div className="step-actions">
                          <button className="btn-ghost" onClick={() => setStep(3)}>Back</button>
                          <button className="btn-navy" onClick={() => setStep(5)} disabled={!guest.name || !guest.email || !guest.phone} style={{
                    opacity: !guest.name || !guest.email || !guest.phone ? 0.5 : 1
                  }}>Continue <ArrowRight size={15} style={{
                      verticalAlign: "-2px",
                      marginLeft: 6
                    }} /></button>
                        </div>
                      </div>}

                    {step === 5 && <div>
                        <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  color: "var(--navy)",
                  margin: "0 0 6px"
                }}>Review &amp; Confirm</h3>
                        <p style={{
                  fontSize: 14,
                  color: "#546575",
                  marginBottom: 22
                }}>Please review your booking details before confirming.</p>
                        <div className="form-card">
                          <div className="summary-row"><span>Guest</span><strong>{guest.name}</strong></div>
                          <div className="summary-row"><span>Contact</span><strong>{guest.email} · {guest.phone}</strong></div>
                          <div className="summary-row"><span>Room</span><strong>{selectedRoom.name}</strong></div>
                          <div className="summary-row"><span>Dates</span><strong>{fmt(checkIn)} – {fmt(checkOut)} ({nights} nights)</strong></div>
                          <div className="summary-row"><span>Guests</span><strong>{adults} Adults, {children} Child · {roomsCount} Room{roomsCount > 1 ? "s" : ""}</strong></div>
                          <div className="summary-total"><span>Total Amount</span><span>₹{total.toLocaleString("en-IN")}</span></div>
                          <p className="form-note" style={{
                    marginTop: 16
                  }}>You'll be redirected to our secure payment gateway to complete your booking. Your card details are never stored by Bombay Beach Resort.</p>
                        </div>
                        <div className="step-actions">
                          <button className="btn-ghost" onClick={() => setStep(4)}>Back</button>
                          <button className="btn-gold" onClick={() => setConfirmed(true)}><Lock size={14} style={{
                      verticalAlign: "-2px",
                      marginRight: 6
                    }} />Confirm &amp; Pay ₹{total.toLocaleString("en-IN")}</button>
                        </div>
                      </div>}
                  </div>

                  <div className="summary-card">
                    <h4>Your Booking Summary</h4>
                    <div className="summary-row"><span>Check-in</span><strong>{fmt(checkIn)}</strong></div>
                    <div className="summary-row"><span>Check-out</span><strong>{fmt(checkOut)}</strong></div>
                    <div className="summary-row"><span>Guests</span><strong>{adults} Adults, {children} Child</strong></div>
                    <div className="summary-row"><span>Rooms</span><strong>{roomsCount}</strong></div>
                    {step >= 2 && <>
                        <div style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px dashed var(--mist)"
                }}>
                          <PhotoPlaceholder label={selectedRoom.name} tone={selectedRoom.tone} className="ph" style={{
                    width: 56,
                    height: 44,
                    borderRadius: 8,
                    flexShrink: 0
                  }} />
                          <div style={{
                    fontSize: 13,
                    color: "var(--navy)",
                    fontWeight: 600
                  }}>{selectedRoom.name}<div style={{
                      fontSize: 12,
                      color: "#8096a5",
                      fontWeight: 400
                    }}>₹{selectedRoom.price.toLocaleString("en-IN")} × {nights} night{nights > 1 ? "s" : ""}</div></div>
                        </div>
                        <div className="summary-row"><span>Room Subtotal</span><strong>₹{roomSubtotal.toLocaleString("en-IN")}</strong></div>
                      </>}
                    {step >= 3 && addonsTotal > 0 && <div className="summary-row"><span>Add-ons</span><strong>₹{addonsTotal.toLocaleString("en-IN")}</strong></div>}
                    {step >= 2 && <div className="summary-row"><span>Taxes &amp; Fees</span><strong>₹{taxes.toLocaleString("en-IN")}</strong></div>}
                    {step >= 2 && <div className="summary-total"><span>Total Amount</span><span>₹{total.toLocaleString("en-IN")}</span></div>}
                    <div style={{
                marginTop: 16,
                background: "rgba(140,191,159,.14)",
                border: "1px solid rgba(140,191,159,.4)",
                borderRadius: 10,
                padding: 12,
                fontSize: 12,
                color: "#3b7a56",
                display: "flex",
                gap: 8
              }}>
                      <ShieldCheck size={16} style={{
                  flexShrink: 0
                }} /> You're getting the lowest price available when you book direct.
                    </div>

                    <div style={{
                marginTop: 20,
                background: "var(--navy)",
                borderRadius: 12,
                padding: 18,
                color: "#fff"
              }}>
                      <h5 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 15,
                  margin: "0 0 10px"
                }}>Need Help?</h5>
                      <p style={{
                  fontSize: 12.5,
                  color: "rgba(255,255,255,.75)",
                  margin: "0 0 12px"
                }}>Our reservations team is here to assist you 24/7.</p>
                      <div style={{
                  fontSize: 12.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  marginBottom: 14
                }}>
                        <span style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center"
                  }}><Phone size={13} /> +91 98765 43210</span>
                        <span style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center"
                  }}><Mail size={13} /> reservations@bombaybeachresort.com</span>
                      </div>
                      <button className="btn-gold" style={{
                  width: "100%"
                }}>Request a Call Back</button>
                    </div>
                  </div>
                </div>
              </>}
          </div>
        </section>

        <section className="container section--tight" style={{
      borderTop: "1px solid var(--mist)"
    }}>
          <div style={{
        background: "#F3EFE7",
        borderRadius: 14,
        padding: "18px 26px",
        display: "flex",
        alignItems: "center",
        gap: 20,
        flexWrap: "wrap",
        marginBottom: 26
      }}>
            <strong style={{
          fontSize: 13.5,
          color: "var(--navy)",
          display: "flex",
          alignItems: "center",
          gap: 8
        }}><Gift size={16} style={{
            color: "var(--gold-dark)"
          }} /> Book Direct Benefits</strong>
            {["Complimentary Wi-Fi", "Welcome Drink", "Room Upgrade (Subject to Availability)", "Late Check-out (Subject to Availability)"].map(t => <span key={t} style={{
          fontSize: 12.5,
          color: "#546575"
        }}>{t}</span>)}
          </div>
          <div className="why-row">
            {[{
          icon: RefreshCw,
          t: "Flexible Cancellation",
          s: "Cancel or modify with ease"
        }, {
          icon: Lock,
          t: "Secure Payments",
          s: "100% safe and encrypted"
        }, {
          icon: Tag,
          t: "No Hidden Charges",
          s: "All-inclusive pricing"
        }, {
          icon: HelpCircle,
          t: "24/7 Support",
          s: "We're here for you"
        }].map(i => <div className="i" key={i.t}><i.icon size={18} /><div><strong style={{
              display: "block",
              color: "var(--navy)"
            }}>{i.t}</strong><span style={{
              fontSize: 12,
              color: "#8096a5"
            }}>{i.s}</span></div></div>)}
          </div>
        </section>

    </>;
}
