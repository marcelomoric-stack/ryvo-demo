
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BatteryCharging, Car, ChevronLeft, ChevronRight, Clock3, Fuel, Home, KeyRound,
  MapPin, Menu, MessageCircle, Phone, ShieldCheck, Star, Truck, User, Wrench,
  ArrowRight, CheckCircle2, Bell, AlertTriangle
} from "lucide-react";

const ORANGE = "#ff3d12";

const services = [
  { id: "battery", title: "Battery", subtitle: "Jump start", text: "Fast help when your battery lets you down.", icon: BatteryCharging, price: 79 },
  { id: "tyre", title: "Tyre", subtitle: "Flat tyre help", text: "Tyre change and roadside tyre assistance.", icon: Car, price: 89 },
  { id: "towing", title: "Towing", subtitle: "Tow my vehicle", text: "Reliable towing support across Sydney.", icon: Truck, price: 149 },
  { id: "fuel", title: "Fuel", subtitle: "Out of fuel", text: "Emergency fuel when you run out unexpectedly.", icon: Fuel, price: 69 },
  { id: "lockout", title: "Lockout", subtitle: "Locked out", text: "Support when your keys are locked inside.", icon: KeyRound, price: 99 },
  { id: "mechanic", title: "Mechanic", subtitle: "Quick check", text: "Quick checks and basic roadside assistance.", icon: Wrench, price: 119 },
];

function Logo() {
  return (
    <div className="logo">
      <span className="logo-r">R<span /></span><span className="logo-text">yvo</span>
    </div>
  );
}

function WebsiteHome({ goDemo }) {
  return (
    <main className="website">
      <nav className="web-nav">
        <Logo />
        <div className="web-nav-links">
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#providers">Providers</a>
          <button onClick={goDemo}>App demo</button>
        </div>
        <button className="nav-cta">Join waitlist</button>
        <button className="mobile-menu"><Menu /></button>
      </nav>

      <section className="web-hero">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="badge">
            <span /> Launching first in Sydney
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05 }}>
            Roadside help, fast, simple and on the way.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>
            Ryvo connects drivers with trusted roadside assistance providers for battery jump starts, flat tyre help, towing, lockouts, fuel delivery and quick roadside support across Sydney.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }} className="hero-actions">
            <button onClick={goDemo} className="primary-btn">View app demo <ArrowRight size={20} /></button>
            <button className="secondary-btn">Become a provider</button>
          </motion.div>
          <div className="stats">
            <div><strong>2–6</strong><span>min ETA goal</span></div>
            <div><strong>24/7</strong><span>road support</span></div>
            <div><strong>Sydney</strong><span>first launch</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow" />
          <AppMockup />
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Services</span>
            <h2>Everything drivers need when the road goes wrong.</h2>
          </div>
          <p>The first version focuses on high-demand roadside problems with clear pricing, fast dispatch and trusted local providers.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div className="service-card-web" key={service.id}>
                <div><Icon size={27} /></div>
                <h3>{service.title === "Battery" ? "Battery Jump Start" : service.title === "Tyre" ? "Flat Tyre Help" : service.title}</h3>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="how" className="how-section">
        <div className="center-head">
          <span className="eyebrow">How it works</span>
          <h2>Help in three simple steps.</h2>
        </div>
        <div className="steps">
          {[
            ["Choose your service", "Select battery, tyre, towing, fuel, lockout or mechanic support."],
            ["Share your location", "Ryvo finds your pickup point and prepares the request for dispatch."],
            ["Track your provider", "See ETA, provider details, status updates and price summary."],
          ].map((step, index) => (
            <div className="step-card" key={step[0]}>
              <b>{index + 1}</b><h3>{step[0]}</h3><p>{step[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="providers" className="provider-section">
        <div className="provider-box">
          <div>
            <span className="provider-label">For providers</span>
            <h2>Join the Ryvo roadside network.</h2>
            <p>Ryvo is designed to help roadside providers receive jobs, navigate to customers, communicate quickly and build trust through service quality.</p>
          </div>
          <div className="provider-list">
            {["Receive nearby roadside requests", "Accept jobs from your phone", "Show ETA and provider details", "Grow with Sydney launch demand"].map((item) => (
              <div key={item}><CheckCircle2 /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div><Logo /><p>Roadside assistance across Sydney. Fast help. Trusted experts. On the way.</p></div>
        <div className="footer-info"><span>hello@ryvo.com.au</span><span>Launching in Sydney</span></div>
      </footer>
    </main>
  );
}

function AppMockup() {
  return (
    <motion.div initial={{ opacity: 0, y: 28, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} className="phone-mockup">
      <div className="mock-notch" />
      <div className="mock-inner">
        <div className="mock-top"><Logo /><div className="mock-call"><Phone size={24} /><i /></div></div>
        <div className="mock-title"><h3>Roadside assistance<br />across <span>Sydney</span></h3><p>Fast help. Trusted experts. On the way.</p></div>
        <div className="mock-location"><MapPin size={23} /><div><small>Current location</small><strong>Sydney, NSW 2000</strong></div></div>
        <div className="mock-emergency"><div><strong>Need help now?</strong><small>Get immediate roadside assistance.</small></div><b><ShieldCheck size={30} /></b></div>
        <div className="mock-services">
          {services.map((service, index) => { const Icon = service.icon; return <div key={service.id} className={index === 1 ? "active" : ""}><Icon size={22} /><strong>{service.title}</strong></div>; })}
        </div>
        <div className="mock-nearby"><div><strong>Help is nearby</strong><small>Nearest available provider</small></div><b>2–6 min<small>ETA</small></b></div>
      </div>
    </motion.div>
  );
}

function PhoneFrame({ children }) {
  return (
    <div className="demo-page">
      <div className="phone">
        <div className="notch" />
        <div className="status"><span>9:41</span><span>●●●</span></div>
        {children}
        <div className="home-indicator" />
      </div>
    </div>
  );
}

function BottomNav({ screen, setScreen }) {
  const items = [["home", Home, "Home"], ["requests", Menu, "Requests"], ["help", Phone, "Help Now"], ["activity", Clock3, "Activity"], ["profile", User, "Profile"]];
  return (
    <div className="bottom-nav">
      {items.map(([id, Icon, label]) => (
        <button key={id} onClick={() => setScreen(id)} className={screen === id || (id === "home" && screen === "help") ? "active" : ""}>
          <div className="nav-icon"><Icon size={19} /></div><span>{label}</span>
        </button>
      ))}
    </div>
  );
}

function DemoHome({ selected, setSelected, setScreen, goWebsite }) {
  return (
    <main className="screen scroll with-nav">
      <header className="topbar"><Logo /><button className="bell"><Bell size={23} /><i /></button></header>
      <button onClick={goWebsite} className="back-web">← Back to website</button>
      <section className="app-hero"><h1>Roadside assistance<br />across <em>Sydney</em></h1><p>Fast help. Trusted experts. On the way.</p></section>
      <button className="location-card"><MapPin size={24} /><span><small>Current location</small><strong>Sydney, NSW 2000</strong></span><ChevronRight className="down" size={20} /></button>
      <motion.button whileTap={{ scale: 0.98 }} onClick={() => setScreen("requesting")} className="urgent-card"><span><strong>Need help now?</strong><small>Get immediate roadside assistance in Sydney.</small></span><b><AlertTriangle size={32} /></b></motion.button>
      <section className="app-services"><h2>What do you need help with?</h2><div className="app-service-grid">
        {services.map((s) => { const Icon = s.icon; const active = selected.id === s.id; return <motion.button whileTap={{ scale: 0.96 }} key={s.id} onClick={() => setSelected(s)} className={active ? "app-service-card selected" : "app-service-card"}><Icon size={25} /><strong>{s.title}</strong><small>{s.subtitle}</small></motion.button>; })}
      </div></section>
      <section className="nearby-card"><div><ShieldCheck size={24} /></div><span><strong>Help is nearby</strong><small>Nearest available provider</small></span><b>2–6 min<small>est. arrival</small></b></section>
      <button onClick={() => setScreen("requesting")} className="main-cta">Request {selected.title} Help</button>
    </main>
  );
}

function MapBackground() {
  return <div className="map"><div className="map-water" /><div className="map-park" /><div className="road road-a" /><div className="road road-b" /><div className="road road-c" /><div className="pin"><MapPin size={25} /></div><div className="van"><Truck size={18} /></div><strong>Sydney</strong></div>;
}

function RequestingScreen({ selected, setScreen }) {
  return (
    <main className="screen map-screen"><MapBackground />
      <div className="floating-top"><button onClick={() => setScreen("home")}><ChevronLeft /></button><span>Requesting help</span></div>
      <section className="sheet">
        <h2>Help is on the way! 🚀</h2><p>Your provider has been assigned and is heading to your location.</p>
        <div className="provider-card"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=160&auto=format&fit=crop" alt="Provider" /><span><strong>James Carter <Star size={13} fill={ORANGE} color={ORANGE} /> 4.9</strong><small>Ryvo Roadside · RYV-247</small></span><Truck size={32} /></div>
        <div className="app-stats"><b>6 min<small>ETA</small></b><b>2.1 km<small>Distance</small></b></div>
        <button className="detail-row"><span>{selected.title} assistance<small>{selected.subtitle}</small></span><ChevronRight /></button>
        <button onClick={() => setScreen("tracking")} className="main-cta">View request details</button>
      </section>
    </main>
  );
}

function TrackingScreen({ selected, setScreen }) {
  return (
    <main className="screen scroll">
      <header className="tracking-head"><button onClick={() => setScreen("requesting")}><ChevronLeft /></button><button>Need help?</button></header>
      <h1 className="page-title">Help is on the way</h1><p className="page-subtitle">Your provider is nearby and will arrive soon.</p>
      <section className="provider-large"><div><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=160&auto=format&fit=crop" alt="Provider" /><span><strong>James Carter <Star size={13} fill={ORANGE} color={ORANGE} /> 4.9</strong><small>Toyota HiAce · RYV-247</small></span></div><div className="contact-actions"><button><Phone size={16} />Call</button><button><MessageCircle size={16} />Chat</button></div></section>
      <section className="arrival-card"><span>Arrival in <b>6 min</b></span><div><i /></div><small>2.1 km away · Est. 9:47 AM</small></section>
      <section className="status-card"><h3>Request status</h3>{["Request received", "Provider assigned", "On the way", "Arriving soon"].map((item, i) => <div className="status-row" key={item}><i className={i < 3 ? "done" : ""} /><strong>{item}</strong><small>{i < 2 ? "9:41 AM" : i === 2 ? "9:42 AM" : "Est. 9:47 AM"}</small></div>)}</section>
      <section className="price-card"><h3>Price summary <small>Fixed price</small></h3><p><span>{selected.title} assistance</span><b>${selected.price}.00</b></p><p><span>Call out fee</span><b>$0.00</b></p><div><strong>Total</strong><strong>${selected.price}.00</strong></div></section>
    </main>
  );
}

function Placeholder({ title, setScreen }) {
  return <main className="screen placeholder with-nav"><Logo /><section><h1>{title}</h1><p>This screen is ready for the next design stage.</p><button onClick={() => setScreen("home")} className="main-cta">Back Home</button></section></main>;
}

function AppDemo({ goWebsite }) {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState(services[1]);
  let content = <DemoHome selected={selected} setSelected={setSelected} setScreen={setScreen} goWebsite={goWebsite} />;
  if (screen === "requesting") content = <RequestingScreen selected={selected} setScreen={setScreen} />;
  if (screen === "tracking") content = <TrackingScreen selected={selected} setScreen={setScreen} />;
  if (screen === "requests") content = <Placeholder title="Requests" setScreen={setScreen} />;
  if (screen === "activity") content = <Placeholder title="Activity" setScreen={setScreen} />;
  if (screen === "profile") content = <Placeholder title="Profile" setScreen={setScreen} />;
  return <PhoneFrame><AnimatePresence mode="wait"><motion.div className="app-view" key={screen} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>{content}</motion.div></AnimatePresence>{!["requesting", "tracking"].includes(screen) && <BottomNav screen={screen} setScreen={setScreen} />}</PhoneFrame>;
}

export default function App() {
  const path = window.location.pathname;
  const [mode, setMode] = useState(path.includes("app-demo") ? "demo" : "web");

  const goDemo = () => {
    window.history.pushState({}, "", "/app-demo");
    setMode("demo");
    window.scrollTo(0, 0);
  };

  const goWebsite = () => {
    window.history.pushState({}, "", "/");
    setMode("web");
    window.scrollTo(0, 0);
  };

  return mode === "demo" ? <AppDemo goWebsite={goWebsite} /> : <WebsiteHome goDemo={goDemo} />;
}
