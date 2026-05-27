import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import {
  BatteryCharging, Car, ChevronLeft, ChevronRight, Clock3, Fuel, Home,
  KeyRound, MapPin, Menu, MessageCircle, Phone, Truck, User, Wrench,
  AlertTriangle, Bell, ShieldCheck
} from "lucide-react";
import "./style.css";

const ORANGE = "#ff3d12";

const services = [
  { id: "battery", title: "Battery", subtitle: "Jump start", icon: BatteryCharging, price: 79 },
  { id: "tyre", title: "Tyre", subtitle: "Flat tyre help", icon: Car, price: 89 },
  { id: "towing", title: "Towing", subtitle: "Tow my vehicle", icon: Truck, price: 149 },
  { id: "fuel", title: "Fuel", subtitle: "Out of fuel", icon: Fuel, price: 69 },
  { id: "lockout", title: "Lockout", subtitle: "Locked out", icon: KeyRound, price: 99 },
  { id: "mechanic", title: "Mechanic", subtitle: "Quick inspection", icon: Wrench, price: 119 },
];

function Logo({ big = false }) {
  return <div className={big ? "logo big" : "logo"}><span className="logo-r">R<span /></span><span className="logo-rest">yvo</span></div>;
}

function PhoneFrame({ children }) {
  return <div className="page"><div className="phone"><div className="notch" /><div className="status left">9:41</div><div className="status right">●●●</div>{children}<div className="home-indicator" /></div></div>;
}

function BottomNav({ screen, setScreen }) {
  const items = [["home", Home, "Home"], ["requests", Menu, "Requests"], ["help", Phone, "Help Now"], ["activity", Clock3, "Activity"], ["profile", User, "Profile"]];
  return <div className="bottom-nav">{items.map(([id, Icon, label]) => <button key={id} onClick={() => setScreen(id)}><span className={screen === id ? "nav-icon active" : "nav-icon"}><Icon size={20}/></span><small className={screen === id ? "active-text" : ""}>{label}</small></button>)}</div>;
}

function HomeScreen({ selected, setSelected, setScreen }) {
  return <div className="screen scroll">
    <header className="top"><Logo/><button className="bell"><Bell/><i/></button></header>
    <section className="hero"><h1>Roadside assistance<br/>across <b>Sydney</b></h1><p>Fast help. Trusted experts. On the way.</p></section>
    <button className="location"><MapPin/><span><small>Current location</small><strong>Sydney, NSW 2000</strong></span><ChevronRight className="down"/></button>
    <motion.button whileTap={{scale:.98}} onClick={() => setScreen("help")} className="emergency"><span><strong>Need help now?</strong><small>Get immediate roadside assistance in Sydney.</small></span><i><AlertTriangle/></i></motion.button>
    <h2>What do you need help with?</h2>
    <div className="services">{services.map(s => { const Icon=s.icon; const active=selected.id===s.id; return <motion.button whileTap={{scale:.96}} key={s.id} onClick={() => setSelected(s)} className={active ? "service active" : "service"}><Icon/><strong>{s.title}</strong><small>{s.subtitle}</small></motion.button> })}</div>
    <div className="nearby"><span><ShieldCheck/></span><div><strong>Help is nearby</strong><small>Nearest provider available</small></div><b>2–6 min<small>est. arrival</small></b></div>
    <button className="primary" onClick={() => setScreen("requesting")}>Request {selected.title} Help</button>
  </div>;
}

function MapBackground() {
  return <div className="map"><div className="water"/><div className="park"/><div className="road v"/><div className="road h"/><div className="road v2"/><div className="truck"><Truck size={20}/></div><div className="pin"><MapPin/></div><div className="sydney">Sydney</div></div>;
}

function RequestingScreen({ selected, setScreen }) {
  return <div className="screen map-screen"><MapBackground/><div className="map-head"><button onClick={() => setScreen("home")}><ChevronLeft/></button><strong>Requesting help</strong><span/></div><div className="sheet"><h1>Help is on the way! 🚀</h1><p>Your provider has been assigned and is on the way to your location.</p><ProviderCard/><div className="job"><selected.icon/><span><strong>{selected.title} assistance</strong><small>{selected.subtitle}</small></span><button>Change</button></div><button className="details" onClick={() => setScreen("tracking")}>View request details <ChevronRight/></button></div></div>;
}

function ProviderCard() {
  return <div className="provider"><div className="provider-top"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"/><span><strong>James Carter <b>★ 4.9</b></strong><small>Ryvo Roadside</small></span><Truck/></div><div className="metrics"><span><strong>6 min</strong><small>ETA</small></span><span><strong>2.1 km</strong><small>Distance</small></span></div></div>;
}

function TrackingScreen({ selected, setScreen }) {
  return <div className="screen scroll tracking"><div className="track-head"><button onClick={() => setScreen("requesting")}><ChevronLeft/></button><b>Need help?</b></div><h1>Help is on the way</h1><p>Your provider is nearby and will arrive soon.</p><ProviderCard/><div className="contact"><button><Phone/>Call</button><button><MessageCircle/>Chat</button></div><div className="arrival"><span><b>Arrival in</b><strong>6 min</strong></span><div><i/></div><small>2.1 km away <em>Est. 9:47 AM</em></small></div><div className="status-card"><h3>Request status</h3>{[["Request received","9:41 AM",1],["Provider assigned","9:41 AM",1],["On the way","9:42 AM",1],["Arriving soon","Est. 9:47 AM",0]].map(r=><p key={r[0]}><i className={r[2]?"done":""}/><b>{r[0]}</b><small>{r[1]}</small></p>)}</div><div className="price"><h3>Price summary <small>Fixed price</small></h3><p>{selected.title} assistance <b>${selected.price}.00</b></p><p>Call out fee <b>$0.00</b></p><strong>Total <b>${selected.price}.00</b></strong></div></div>;
}

function Placeholder({ title, setScreen }) { return <div className="screen placeholder"><Logo/><div><h1>{title}</h1><p>This screen is ready to be designed in the next step.</p><button className="primary" onClick={() => setScreen("home")}>Back Home</button></div></div> }

function RyvoPrototype() {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState(services[1]);
  const content = useMemo(() => {
    if (screen === "home" || screen === "help") return <HomeScreen selected={selected} setSelected={setSelected} setScreen={setScreen}/>;
    if (screen === "requesting") return <RequestingScreen selected={selected} setScreen={setScreen}/>;
    if (screen === "tracking") return <TrackingScreen selected={selected} setScreen={setScreen}/>;
    if (screen === "requests") return <Placeholder title="Requests" setScreen={setScreen}/>;
    if (screen === "activity") return <Placeholder title="Activity" setScreen={setScreen}/>;
    if (screen === "profile") return <Placeholder title="Profile" setScreen={setScreen}/>;
  }, [screen, selected]);
  return <PhoneFrame><AnimatePresence mode="wait"><motion.div key={screen} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-18}} transition={{duration:.22}} className="app">{content}</motion.div></AnimatePresence>{!["requesting","tracking"].includes(screen) && <BottomNav screen={screen} setScreen={setScreen}/>}</PhoneFrame>;
}

createRoot(document.getElementById("root")).render(<RyvoPrototype/>);
