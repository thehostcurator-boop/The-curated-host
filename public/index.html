import { useState, useEffect, useRef } from "react";
const TERRA = "#A0782A";
const WARM = "#9C8B6A";
const SAND = "#F5EDD8";
const CREAM = "#FAF7F2";
const BODY = "#2E2E2E";
const RULE = "#D8C898";
const WHITE = "#FFFFFF";
const DARK = "#1A1612";

// ── Portfolio images────────────────────────────────────────────────────────
const IMG_COVER_CLOSEUP = "/images/handbook-cover-closeup.jpg";
const IMG_COVER_FLATLAY = "/images/handbook-cover-flatlay.jpg";
const IMG_INTERIOR_WELCOME = "/images/handbook-interior-welcome.jpg";
const IMG_INTERIOR_QR = "/images/handbook-interior-qr.jpg";
const IMG_INTERIOR_HEATING = "/images/handbook-interior-heating.jpg";
const IMG_SPEAKING_ACTION = "/images/ruben-speaking-renaissance-ucla.jpg";
const IMG_HEADSHOT_PORTRAIT = "/images/ruben-headshot-portrait.jpg";
const IMG_AMSTERDAM_INTERIOR = "/images/amsterdam-canal-interior.jpg";
const IMG_ENGAGEMENT_TALK = "/images/ruben-speaking-mic-flags.jpg";
// ── Mobile hook──────────────────────────────────────────────────────────────
function useIsMobile() {
const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
useEffect(() => {
const h = () => setIsMobile(window.innerWidth < 900);
window.addEventListener("resize", h);
return () => window.removeEventListener("resize", h);
}, []);
return isMobile;
}
function Logo({ light }) {
const c = light ? WHITE : TERRA;
const sc = light ? "rgba(255,255,255,0.4)" : CREAM;
return (
<div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
<svg width="38" height="38" viewBox="0 0 400 400" fill="none">
<circle cx="200" cy="200" r="155" stroke={c} strokeWidth="8" fill="none" />
<circle cx="200" cy="200" r="140" stroke={c} strokeWidth="2" strokeOpacity="0.3"
fill="none" />
{[0,90,180,270].map(a => (
<circle key={a} cx={200+140*Math.cos(a*Math.PI/180)}
cy={200+140*Math.sin(a*Math.PI/180)} r="6" fill={c} fillOpacity="0.5" />
))}
<rect x="170" y="210" width="60" height="60" fill={c} />
<ellipse cx="200" cy="210" rx="30" ry="30" fill={c} />
<circle cx="200" cy="222" r="9" fill={sc} />
<polygon points="195,229 205,229 203,246 197,246" fill={sc} />
<line x1="200" y1="158" x2="143" y2="193" stroke={c} strokeWidth="7"
strokeLinecap="round"/>
<line x1="200" y1="158" x2="257" y2="193" stroke={c} strokeWidth="7"
strokeLinecap="round"/>

</svg>
<div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px", fontWeight:
"bold", color: light ? WHITE : TERRA, letterSpacing: "0.5px" }}>The Curated Host</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "9px", color: light ?
"rgba(255,255,255,0.6)" : WARM, letterSpacing: "2.5px", textTransform: "uppercase" }}>Property Management</div>
</div>
</div>
);
}
function Nav({ page, setPage }) {
const topLinks = ["Home", "About"];
const pmLinks = ["Property Management", "Guest Handbooks", "Interior Design"];
const moreLinks = ["Speaking", "Millennicast"];
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [moreOpen, setMoreOpen] = useState(false);
const [pmOpen, setPmOpen] = useState(false);
const isMobile = useIsMobile();
const moreRef = useRef(null);
const pmRef = useRef(null);
useEffect(() => {
const h = () => setScrolled(window.scrollY > 40);
window.addEventListener("scroll", h);
return () => window.removeEventListener("scroll", h);
}, []);
useEffect(() => {
const h = (e) => {
if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
if (pmRef.current && !pmRef.current.contains(e.target)) setPmOpen(false);
};
window.addEventListener("mousedown", h);
return () => window.removeEventListener("mousedown", h);
}, []);
const isHome = page === "Home";
const bg = (isHome && !scrolled && !menuOpen) ? "transparent" : WHITE;
const borderColor = (isHome && !scrolled && !menuOpen) ? "transparent" : RULE;
const light = isHome && !scrolled && !menuOpen;
const isMoreActive = moreLinks.includes(page);
const isPmActive = pmLinks.includes(page);
return (
<>
<nav style={{
position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
background: bg, borderBottom: `1px solid ${borderColor}`,
padding: isMobile ? "0 20px" : "0 48px", height: "64px",
display: "flex", alignItems: "center", justifyContent: "space-between",
transition: "background 0.3s, border-color 0.3s",
}}>
<div onClick={() => { setPage("Home"); setMenuOpen(false); }}><Logo light={light}
/></div>
{isMobile ? (
<button onClick={() => setMenuOpen(o => !o)} style={{
background: "transparent", border: "none", cursor: "pointer",
display: "flex", flexDirection: "column", gap: "5px", padding: "8px",

}}>
{[0,1,2].map(i => (
<div key={i} style={{ width: "22px", height: "2px", background: light ? WHITE : TERRA,
borderRadius: "1px" }} />
))}
</button>
):(
<div style={{ display: "flex", gap: "4px", alignItems: "center", flexWrap: "nowrap" }}>
<button onClick={() => setPage("Home")} style={{
padding: "8px 10px", background: "transparent", border: "none",
borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase",
color: page === "Home" ? TERRA : light ? WHITE : WARM,
fontWeight: page === "Home" ? "bold" : "normal",
transition: "color 0.2s", whiteSpace: "nowrap", flexShrink: 0,
}}>Home</button>
<div ref={pmRef} style={{ position: "relative", flexShrink: 0 }}>
<button onClick={() => setPmOpen(o => !o)} style={{
padding: "8px 10px", background: "transparent", border: "none",
borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase",
color: isPmActive ? TERRA : light ? WHITE : WARM,
fontWeight: isPmActive ? "bold" : "normal",
whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "4px",
}}>Property Management {pmOpen ? "▴" : "▾"}</button>
{pmOpen && (
<div style={{
position: "absolute", top: "calc(100% + 8px)", left: 0,
background: WHITE, border: `1px solid ${RULE}`, borderRadius: "2px",
minWidth: "200px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", overflow: "hidden",
}}>
{pmLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setPmOpen(false); }} style={{
display: "block", width: "100%", padding: "12px 16px", background: "transparent",
border: "none", cursor: "pointer", textAlign: "left",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase",
color: page === l ? TERRA : BODY, fontWeight: page === l ? "bold" : "normal",
}}>{l === "Property Management" ? "Overview" : l}</button>
))}
</div>
)}
</div>
<button onClick={() => setPage("About")} style={{
padding: "8px 10px", background: "transparent", border: "none",
borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase",
color: page === "About" ? TERRA : light ? WHITE : WARM,
fontWeight: page === "About" ? "bold" : "normal",
transition: "color 0.2s", whiteSpace: "nowrap", flexShrink: 0,
}}>About</button>
<div ref={moreRef} style={{ position: "relative", flexShrink: 0 }}>
<button onClick={() => setMoreOpen(o => !o)} style={{
padding: "8px 10px", background: "transparent", border: "none",
borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase",
color: isMoreActive ? TERRA : light ? WHITE : WARM,
fontWeight: isMoreActive ? "bold" : "normal",
whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "4px",
}}>More {moreOpen ? "▴" : "▾"}</button>
{moreOpen && (
<div style={{
position: "absolute", top: "calc(100% + 8px)", right: 0,
background: WHITE, border: `1px solid ${RULE}`, borderRadius: "2px",
minWidth: "160px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", overflow: "hidden",
}}>
{moreLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setMoreOpen(false); }} style={{
display: "block", width: "100%", padding: "12px 16px", background: "transparent",
border: "none", cursor: "pointer", textAlign: "left",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase",
color: page === l ? TERRA : BODY, fontWeight: page === l ? "bold" : "normal",
}}>{l}</button>
))}
</div>
)}
</div>
<button onClick={() => setPage("Contact")} style={{
padding: "9px 16px", background: TERRA, border: "none",
borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase",
color: WHITE, fontWeight: "bold", marginLeft: "4px", whiteSpace: "nowrap",
flexShrink: 0,
}}>Get In Touch</button>
</div>
)}
</nav>
{/* Mobile menu dropdown */}
{isMobile && menuOpen && (
<div style={{
position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
background: WHITE, borderBottom: `1px solid ${RULE}`,
padding: "16px 20px", display: "flex", flexDirection: "column", gap: "4px",
maxHeight: "calc(100vh - 64px)", overflowY: "auto",
}}>
{topLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setMenuOpen(false); }} style={{
padding: "14px 0", background: "transparent", border: "none",
borderBottom: `1px solid ${RULE}`, cursor: "pointer", textAlign: "left",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase",
color: page === l ? TERRA : WARM, fontWeight: page === l ? "bold" : "normal",
}}>{l}</button>
))}
<button onClick={() => { setPage("Contact"); setMenuOpen(false); }} style={{
padding: "14px 0", background: "transparent", border: "none",
borderBottom: `1px solid ${RULE}`, cursor: "pointer", textAlign: "left",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase",
color: page === "Contact" ? TERRA : WARM, fontWeight: page === "Contact" ? "bold" : "normal",
}}>Contact</button>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
color: WARM, letterSpacing: "1.5px", textTransform: "uppercase", margin: "16px 0 4px"
}}>Property Management</div>
{pmLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setMenuOpen(false); }} style={{
padding: "14px 0", background: "transparent", border: "none",
borderBottom: `1px solid ${RULE}`, cursor: "pointer", textAlign: "left",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase",
color: page === l ? TERRA : WARM, fontWeight: page === l ? "bold" : "normal",
}}>{l === "Property Management" ? "Overview" : l}</button>
))}
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
color: WARM, letterSpacing: "1.5px", textTransform: "uppercase", margin: "16px 0 4px"
}}>More</div>
{moreLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setMenuOpen(false); }} style={{
padding: "14px 0", background: "transparent", border: "none",
borderBottom: `1px solid ${RULE}`, cursor: "pointer", textAlign: "left",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase",
color: page === l ? TERRA : WARM, fontWeight: page === l ? "bold" : "normal",
}}>{l}</button>
))}
</div>
)}
</>
);
}
function FormBtn({ text = "Start Your Handbook", setPage, light }) {
return (
<button onClick={() => { if (setPage) { setPage("Contact"); window.scrollTo({ top: 0, behavior:
"smooth" }); } }} style={{
display: "inline-flex", alignItems: "center", gap: "10px",
padding: "16px 32px", background: TERRA,
border: "none", borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
color: WHITE, fontWeight: "bold", textDecoration: "none",
}}>
{text} →
</button>
);
}
function WhatsAppBtn({ text = "Chat on WhatsApp" }) {
return (
<a href="https://wa.me/447736503848" target="_blank" rel="noopener noreferrer"
style={{
display: "inline-flex", alignItems: "center", gap: "10px",
padding: "14px 24px", background: "transparent",
border: "1px solid #25D366", borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
color: "#25D366", fontWeight: "bold", textDecoration: "none",
}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.671.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.454-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
</svg>
{text}
</a>
);
}
function Divider() {
return <div style={{ height: "1px", background: RULE, margin: "64px 0" }} />;
}
function SectionLabel({ text }) {
return <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
WARM, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>{text}</div>;
}
function Heading({ children, center, light }) {
return (
<h2 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "36px", fontWeight:
"bold", color: light ? WHITE : TERRA, margin: "0 0 16px", lineHeight: "1.2", textAlign: center ?
"center" : "left" }}>
{children}
</h2>
);
}
// ── BEFORE / AFTER COMPONENT──────────────────────────────────────────────────
function BeforeAfter() {
const [pos, setPos] = useState(50);
const containerRef = useRef(null);
const updatePos = (clientX) => {
if (!containerRef.current) return;
const rect = containerRef.current.getBoundingClientRect();
const p = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
setPos(p);
};
useEffect(() => {
const handleMouseMove = (e) => {

if (e.buttons !== 1) return;
updatePos(e.clientX);
};
const handleTouchMove = (e) => {
e.preventDefault();
updatePos(e.touches[0].clientX);
};
const el = containerRef.current;
if (!el) return;
el.addEventListener('mousemove', handleMouseMove);
el.addEventListener('touchmove', handleTouchMove, { passive: false });
return () => {
el.removeEventListener('mousemove', handleMouseMove);
el.removeEventListener('touchmove', handleTouchMove);
};
}, []);
return (
<div ref={containerRef} style={{ position: "relative", borderRadius: "4px", overflow: "hidden",
cursor: "col-resize", userSelect: "none", border: `1px solid ${RULE}`, touchAction: "none" }}
onMouseDown={e => updatePos(e.clientX)}
onTouchStart={e => updatePos(e.touches[0].clientX)}>
{/* BEFORE — messy notes style */}
<div style={{ position: "relative", background: WHITE, padding: "32px", minHeight: "440px"
}}>
<div style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
<div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "16px", textAlign:
"center" }}>
WELCOME TO THE PROPERTY!!!!
</div>
<div style={{ marginBottom: "12px" }}>
<span style={{ fontWeight: "bold" }}>WIFI:</span> NetworkName123 password:
mypassword2019!! (case sensitive)<br/>
<span style={{ fontSize: "11px", color: "#888" }}>*if it doesn't work try turning it off and on
again</span>
</div>
<div style={{ marginBottom: "12px", background: "#ffffcc", padding: "8px", border: "1px solid #ccc" }}>
IMPORTANT - do not use the red button on the boiler!!<br/>
The heating is the dial thing on the wall turn it clockwise for hot
</div>
<div style={{ marginBottom: "12px" }}>
<span style={{ fontWeight: "bold" }}>Checkout:</span> 10am SHARP please, cleaner
comes at 10:30<br/>

<span style={{ fontWeight: "bold" }}>Bins:</span> just put them outside somewhere<br/>
<span style={{ fontWeight: "bold" }}>Keys:</span> leave on the side or post through
letterbox
</div>
<div style={{ marginBottom: "12px", fontFamily: "Comic Sans MS, cursive", fontSize:
"12px" }}>
local stuff - there's a tesco nearby (about 10 min?) and some restaurants on the high st.
Can't remember names sorry!! Google it
</div>
<div style={{ marginBottom: "8px" }}>
<span style={{ fontWeight: "bold" }}>TV:</span> the remote is somewhere, the netflix
password is in my other email hold on let me find it. Actually just use your own account<br/>
</div>
<div style={{ marginBottom: "8px", color: "#c00", fontWeight: "bold" }}>
IF ANYTHING BREAKS PLEASE LET ME KNOW ASAP!!!!
</div>
<div style={{ marginTop: "16px", fontSize: "11px", color: "#999", fontStyle: "italic" }}>
sent from my iPhone
</div>
</div>
{/* BEFORE label — fades out as slider moves right */}
<div style={{ position: "absolute", top: "16px", left: "16px", background: "#e74c3c", color:
WHITE, padding: "4px 12px", fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
letterSpacing: "2px", textTransform: "uppercase", zIndex: 10, opacity: Math.max(0, Math.min(1,
(40 - pos) / 20)), transition: "opacity 0.3s ease", pointerEvents: "none" }}>Before</div>
</div>
{/* AFTER overlay — TCH style */}
<div style={{
position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
clipPath: `inset(0 ${100-pos}% 0 0)`,
background: CREAM, padding: "32px",
fontFamily: "'Futura','Century Gothic',sans-serif",
}}>
{/* Mini TCH handbook preview */}
<div style={{ fontSize: "9px", color: WARM, letterSpacing: "2px", textTransform:
"uppercase", marginBottom: "6px" }}>Welcome</div>
<div style={{ height: "1px", background: RULE, marginBottom: "12px" }} />
<div style={{ fontSize: "12px", color: BODY, lineHeight: "1.7", marginBottom: "16px" }}>
Thank you for staying — I hope the flat feels like a little home from home.
</div>

<div style={{ fontSize: "9px", color: WARM, letterSpacing: "2px", textTransform:
"uppercase", marginBottom: "6px", marginTop: "16px" }}>Wi-Fi</div>
<div style={{ height: "1px", background: RULE, marginBottom: "12px" }} />
<div style={{ display: "flex", gap: "16px", marginBottom: "8px" }}>
<div style={{ fontSize: "11px", fontWeight: "bold", color: BODY, width: "80px"
}}>Network</div>
<div style={{ fontSize: "11px", color: BODY }}>PLUSNET-9FC9R9</div>
</div>
<div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
<div style={{ fontSize: "11px", fontWeight: "bold", color: BODY, width: "80px"
}}>Password</div>
<div style={{ fontSize: "11px", color: BODY }}>F4tXPFuhrkNpTQ</div>
</div>
<div style={{ fontSize: "9px", color: WARM, letterSpacing: "2px", textTransform:
"uppercase", marginBottom: "6px", marginTop: "16px" }}>Quiet Hours</div>
<div style={{ height: "1px", background: RULE, marginBottom: "12px" }} />
<div style={{ fontSize: "12px", color: BODY, lineHeight: "1.7", marginBottom: "16px" }}>
Please observe quiet hours between <strong>10pm</strong> and <strong>7am</strong>.
</div>
<div style={{ fontSize: "9px", color: WARM, letterSpacing: "2px", textTransform:
"uppercase", marginBottom: "6px", marginTop: "16px" }}>Getting in Touch</div>
<div style={{ height: "1px", background: RULE, marginBottom: "12px" }} />
<div style={{ display: "flex", gap: "16px" }}>
<div style={{ fontSize: "11px", fontWeight: "bold", color: BODY, width: "80px"
}}>Ruben</div>
<div style={{ fontSize: "11px", color: BODY }}>07736 503848</div>
</div>
</div>
{/* AFTER label — fades in as slider moves right */}
<div style={{ position: "absolute", top: "16px", right: "16px", background: TERRA, color:
WHITE, padding: "4px 12px", fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
letterSpacing: "2px", textTransform: "uppercase", zIndex: 10, opacity: Math.max(0, Math.min(1,
(pos - 60) / 20)), transition: "opacity 0.3s ease", pointerEvents: "none" }}>After</div>
{/* Slider handle */}
<div style={{
position: "absolute", top: 0, bottom: 0,
left: `${pos}%`, transform: "translateX(-50%)",
width: "3px", background: TERRA, pointerEvents: "none",
}}>

<div style={{
position: "absolute", top: "50%", left: "50%",
transform: "translate(-50%,-50%)",
width: "36px", height: "36px", borderRadius: "50%",
background: TERRA, display: "flex", alignItems: "center", justifyContent: "center",
}}>
<span style={{ color: WHITE, fontSize: "14px", letterSpacing: "-2px" }}> </span>
</div>
</div>
</div>
);
}
// ── PROPERTY ICON (custom graphic, not a photo)──────────────────────────────
function PropertyIcon() {
return (
<svg viewBox="0 0 400 300" style={{ width: "100%", height: "100%", display: "block" }}>
<rect width="400" height="300" fill={DARK} />
<circle cx="290" cy="90" r="130" fill={TERRA} opacity="0.08" />
<g transform="translate(120,70)">
<path d="M80 0L160 60V180H100V120H60V180H0V60L80 0Z" fill="none" stroke={TERRA} strokeWidth="4" strokeLinejoin="round" />
<rect x="60" y="120" width="40" height="60" fill="none" stroke={TERRA} strokeWidth="3" />
<circle cx="86" cy="150" r="3" fill={TERRA} />
</g>
<g transform="translate(230,150)">
<circle cx="18" cy="18" r="16" fill="none" stroke={WARM} strokeWidth="4" />
<rect x="30" y="14" width="46" height="8" fill={WARM} />
<rect x="62" y="22" width="8" height="14" fill={WARM} />
<rect x="74" y="22" width="8" height="10" fill={WARM} />
</g>
<text x="200" y="270" textAnchor="middle" fontFamily="'Futura','Century Gothic',sans-serif"
fontSize="13" letterSpacing="3" fill="rgba(255,255,255,0.5)">PROPERTY MANAGEMENT</text>
</svg>
);
}
// ── HOME PAGE─────────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
return (
<div>
{/* Hero */}
<div style={{
minHeight: "100vh", background: DARK,
display: "flex", alignItems: "center",
padding: "120px 10% 80px", position: "relative", overflow: "hidden",
}}>
<div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 70% 50%, ${TERRA}18 0%, transparent 60%)`, pointerEvents: "none" }} />
<div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "flex", gap: "64px", alignItems: "center", flexWrap: "wrap-reverse", position: "relative" }}>
<div style={{ flex: "1 1 420px", minWidth: 0 }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
WARM, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px" }}>
Property Management · Airbnb Co-Hosting
</div>
<h1 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "clamp(32px, 5vw, 52px)",
fontWeight: "bold", color: WHITE, lineHeight: "1.1", margin: "0 0 24px" }}>
Your property,
<br /><span style={{ color: TERRA }}>managed like</span><br />it's our own.
</h1>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px", color:
"rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "40px", maxWidth: "440px" }}>
The Curated Host manages short and long-term rental properties for Airbnb hosts —
guest messaging, pricing and revenue management, cleaning and turnover coordination,
and maintenance coordination — run by an Airbnb Superhost with proven results from
his own short-term rental in Bournemouth, UK.
</p>
<div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
<FormBtn text="Get a Free Property Assessment" setPage={setPage} />
<button onClick={() => setPage("Property Management")} style={{
padding: "14px 28px", background: "transparent",
border: `1px solid rgba(255,255,255,0.3)`, borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
color: "rgba(255,255,255,0.7)",
}}>Our Services →</button>
</div>
<div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color:
"rgba(255,255,255,0.4)" }}>or</span>
<WhatsAppBtn text="Chat on WhatsApp first" />
</div>
</div>
<div style={{ flex: "1 1 380px", minWidth: "280px" }}>
<div style={{ position: "relative", borderRadius: "2px", overflow: "hidden", border: `1px solid rgba(255,255,255,0.15)`, aspectRatio: "4 / 3" }}>
<PropertyIcon />
</div>
<div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
<div style={{ flex: 1, padding: "16px 20px", background: "rgba(255,255,255,0.06)",
border: "1px solid rgba(255,255,255,0.12)", borderRadius: "2px", textAlign: "center" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "24px",
fontWeight: "bold", color: TERRA }}>4.81★</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase",
marginTop: "4px" }}>Ruben's Own Airbnb Rating</div>
</div>
<div style={{ flex: 1, padding: "16px 20px", background: "rgba(255,255,255,0.06)",
border: "1px solid rgba(255,255,255,0.12)", borderRadius: "2px", textAlign: "center" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px",
fontWeight: "bold", color: TERRA, marginTop: "4px" }}>Superhost</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase",
marginTop: "4px" }}>Airbnb Status</div>
</div>
</div>
</div>
</div>
</div>

{/* Services */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "1100px", margin: "0 auto" }}>
<SectionLabel text="Property Management" />
<Heading>Everything hosting requires — handled.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8", marginBottom: "48px", maxWidth: "640px" }}>
We take over the day-to-day of running a short or long-term rental, so you get the
income without the admin.
</p>
<div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
{[
{ icon: "◆", title: "Guest Messaging", desc: "Enquiries, booking questions and in-stay support handled promptly and warmly — day or night." },
{ icon: "✦", title: "Pricing & Revenue", desc: "Dynamic pricing that responds to demand, seasonality and local events to keep occupancy and revenue optimised." },
{ icon: "⬡", title: "Cleaning & Turnover", desc: "Reliable turnover coordination between guests, so every arrival is spotless and on time." },
{ icon: "◆", title: "Maintenance Coordination", desc: "Repairs and upkeep organised and followed through, so small issues get handled before they become guest complaints." },
].map((item, i) => (
<div key={i} style={{ flex: "1 1 300px", padding: "32px 28px", background: CREAM,
borderRadius: "2px", border: `1px solid ${RULE}` }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "26px", color:
TERRA, marginBottom: "16px" }}>{item.icon}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>{item.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.7" }}>{item.desc}</div>
</div>
))}
</div>
<div style={{ marginTop: "32px" }}>
<button onClick={() => setPage("Property Management")} style={{
padding: "12px 28px", background: TERRA, border: "none", borderRadius: "2px",
cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", color: WHITE,
}}>See Full Service Details →</button>
</div>
</div>
</div>

{/* Signature differentiator strip */}
<div style={{ background: TERRA, padding: "20px clamp(20px, 8%, 10%)", display: "flex",
alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
<div style={{ width: "8px", height: "8px", borderRadius: "50%", background:
"rgba(255,255,255,0.5)" }} />
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WHITE }}>Every property we manage comes with a professionally designed guest handbook.</span>
</div>
<button onClick={() => setPage("Guest Handbooks")} style={{
padding: "10px 24px", background: "transparent",
border: "1px solid rgba(255,255,255,0.6)", borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif",
fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
color: WHITE, whiteSpace: "nowrap",
}}>See a Sample →</button>
</div>

{/* CTA */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: SAND,
textAlign: "center" }}>
<SectionLabel text="Let's talk" />
<h2 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight:
"bold", color: TERRA, margin: "0 0 16px" }}>
Ready to hand over the hosting admin?
</h2>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, marginBottom: "40px" }}>
Message on WhatsApp or fill in the contact form to get a free property assessment.
</p>
<div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap",
alignItems: "center", flexDirection: "column" }}>
<FormBtn text="Get a Free Property Assessment" setPage={setPage} />
<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color:
WARM }}>prefer to chat first?</span>
<WhatsAppBtn />
</div>
</div>
</div>
</div>
);
}
// ── ABOUT PAGE────────────────────────────────────────────────────────────────
function AboutPage({ setPage }) {
return (
<div style={{ paddingTop: "64px" }}>
<div style={{ padding: "80px 10% 64px", background: DARK }}>
<div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "56px",
alignItems: "flex-start", flexWrap: "wrap" }}>
<img src={IMG_HEADSHOT_PORTRAIT} alt="Ruben de Bruin" style={{ width: "220px", height: "270px",
objectFit: "cover", borderRadius: "2px", flex: "0 0 auto" }} />
<div style={{ flex: "1 1 320px", minWidth: 0 }}>
<SectionLabel text="About" />
<Heading light>Ruben de Bruin</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
"rgba(255,255,255,0.6)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0" }}>
Founder, The Curated Host — Property Management &amp; Guest Experience
</p>
</div>
</div>
</div>
<div style={{ padding: "clamp(48px, 8vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "760px", margin: "0 auto" }}>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px", color:
BODY, lineHeight: "1.9", marginBottom: "24px" }}>
I am a Dutch-British, internationally experienced professional based in Amsterdam,
bringing a cross-jurisdictional perspective to property management across Europe.
This international foundation lets me engage meaningfully with hosts and guests across
different countries, cultures and contexts.
</p>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px", color:
BODY, lineHeight: "1.9", marginBottom: "24px" }}>
At The Curated Host, I manage short and long-term rental properties for Airbnb hosts —
guest messaging, pricing and revenue management, cleaning and turnover coordination,
and maintenance coordination — bringing the same standard I hold my own Airbnb
Superhost listing in Bournemouth, UK to every property. The guest experience sits at
the centre of it all: a well-run property isn't just about occupancy and returns, it's
about how a guest feels the moment they arrive.
</p>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px", color:
BODY, lineHeight: "1.9", marginBottom: "24px" }}>
I bring to this work a foundation in legal practice, navigating regulatory frameworks,
managing risk, and supporting sound decision-making across corporate and international
environments — working at the intersection of legal, strategic, operational and
interpersonal dynamics to translate complexity into practical, dependable outcomes for
the property owners I work with.
</p>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px", color:
BODY, lineHeight: "1.9", marginBottom: "24px" }}>
I also serve as Vice President of the UCLA Alumni UK Network and as a Board Member of
the University of California Trust, contributing to governance, strategic direction and
stakeholder engagement — experience that shapes how I run this business: with clear
processes, accountability and attention to detail.
</p>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px", color:
WARM, lineHeight: "1.9", fontStyle: "italic" }}>
I am drawn to work where thoughtful hosting, trust and the guest experience are at the
heart of it — and I manage every property the way I manage my own.
</p>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "40px" }}>
<button onClick={() => setPage("Property Management")} style={{
padding: "12px 28px", background: TERRA, border: "none", borderRadius: "2px",
cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", color: WHITE,
}}>View Property Management</button>
<button onClick={() => setPage("Contact")} style={{
padding: "12px 28px", background: "transparent", border: `1px solid ${TERRA}`,
borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", color: TERRA,
}}>Get In Touch</button>
</div>
</div>
</div>
</div>
);
}
// ── ENGAGEMENTS PAGE──────────────────────────────────────────────────────────
function EngagementsPage({ setPage }) {
const upcoming = [
{ title: "[Talk title to be confirmed]", org: "[Organisation]", date: "[Date]", location: "[Location]" },
];
const past = [
{ title: "Guest talk", org: "Renaissance Foundation × UCLA", date: "2026", location: "London, UK" },
];
return (
<div style={{ paddingTop: "64px" }}>
<div style={{ padding: "80px 10% 64px", background: CREAM, borderBottom: `1px solid ${RULE}` }}>
<div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "48px",
alignItems: "center", flexWrap: "wrap-reverse" }}>
<div style={{ flex: "1 1 380px", minWidth: 0 }}>
<SectionLabel text="Public Speaking" />
<Heading>Engagements.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8" }}>
I speak on communication, clarity and connection — drawing on experience across
legal, international and entrepreneurial environments. Below is a selection of past and
upcoming engagements.
</p>
</div>
<div style={{ flex: "1 1 340px", minWidth: "260px" }}>
<img src={IMG_SPEAKING_ACTION} alt="Ruben de Bruin addressing a room at a UCLA event" style={{
width: "100%", display: "block", borderRadius: "2px", border: `1px solid ${RULE}` }} />
</div>
</div>
</div>
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Upcoming" />
<Heading>What's next.</Heading>
<div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "32px", marginBottom: "64px" }}>
{upcoming.map((e, i) => (
<div key={i} style={{ padding: "24px 28px", background: SAND, border: `1px solid ${RULE}`,
borderRadius: "2px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
<div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px",
fontWeight: "bold", color: BODY, marginBottom: "6px" }}>{e.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM }}>{e.org} · {e.location}</div>
</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px",
color: TERRA, fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase" }}>{e.date}</div>
</div>
))}
</div>
<SectionLabel text="Past engagements" />
<Heading>Where I've spoken.</Heading>
<div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "32px" }}>
{past.map((e, i) => (
<div key={i} style={{ padding: "24px 28px", background: CREAM, border: `1px solid ${RULE}`,
borderRadius: "2px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
<div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px",
fontWeight: "bold", color: BODY, marginBottom: "6px" }}>{e.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM }}>{e.org} · {e.location}</div>
</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px",
color: WARM, fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase" }}>{e.date}</div>
</div>
))}
</div>
</div>
</div>
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: DARK, textAlign: "center" }}>
<Heading light center>Invite me to speak.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
"rgba(255,255,255,0.6)", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
For speaking enquiries, get in touch with details of your event, audience and topic.
</p>
<FormBtn text="Enquire About a Talk" setPage={setPage} />
</div>
</div>
);
}
// ── MILLENNICAST PAGE─────────────────────────────────────────────────────────
function MillennicastPage({ setPage }) {
return (
<div style={{ paddingTop: "64px" }}>
<div style={{ padding: "80px 10% 64px", background: CREAM, borderBottom: `1px solid ${RULE}` }}>
<div style={{ maxWidth: "min(700px, 100%)" }}>
<div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
<div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4CAF50" }} />
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
WARM, letterSpacing: "3px", textTransform: "uppercase" }}>Live</span>
</div>
<Heading>The Millennicast.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px", color:
TERRA, fontStyle: "italic", marginBottom: "16px" }}>
"Where Curious Minds Meet Inspiring Professions"
</p>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8" }}>
A podcast exploring the paths, choices and lessons behind inspiring professions —
conversations with people shaping their fields, hosted by me.
</p>
</div>
</div>
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "min(700px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Listen" />
<Heading>Available on</Heading>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
{[
{ name: "Spotify", href: "#" },
{ name: "Apple Podcasts", href: "#" },
].map((p, i) => (
<a key={i} href={p.href} target="_blank" rel="noopener noreferrer" style={{
padding: "14px 28px", background: SAND, border: `1px solid ${RULE}`,
borderRadius: "2px", textDecoration: "none",
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px",
letterSpacing: "1px", textTransform: "uppercase", color: BODY, fontWeight: "bold",
}}>{p.name} →</a>
))}
</div>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM, marginTop: "16px" }}>
Platform links coming soon — check back shortly.
</p>
</div>
</div>
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: TERRA, textAlign: "center" }}>
<Heading light center>Have a story worth sharing?</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
"rgba(255,255,255,0.8)", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
Get in touch about being a guest on The Millennicast.
</p>
<FormBtn text="Get In Touch" setPage={setPage} />
</div>
</div>
);
}
// ── PROPERTY MANAGEMENT PAGE──────────────────────────────────────────────────
function PropertyManagementPage({ setPage }) {
const isMobileHero = useIsMobile();
return (
<div style={{ paddingTop: "64px" }}>
{/* Hero */}
<div style={{ padding: "56px 10% 0", background: CREAM }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<SectionLabel text="Property Management" />
<h1 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "clamp(30px, 4.5vw, 46px)",
fontWeight: "bold", color: BODY, lineHeight: "1.1", margin: "0 0 20px" }}>
More income.<br /><span style={{ color: TERRA }}>Less hassle.</span>
</h1>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8", marginBottom: "28px", maxWidth: "440px" }}>
Boutique short-term rental management for property owners who want more from their
investment and less from their to-do list.
</p>
<div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
{[
{ stat: "4.81", label: "Guest Rating" },
{ stat: "Superhost", label: "Airbnb Status" },
{ stat: "5-Star", label: "Reviews" },
].map((s, i) => (
<div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
{i > 0 && <div style={{ width: "1px", height: "28px", background: RULE, marginRight: "6px" }} />}
<div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "17px",
fontWeight: "bold", color: TERRA }}>{s.stat}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
color: WARM, letterSpacing: "0.5px" }}>{s.label}</div>
</div>
</div>
))}
</div>
</div>
</div>
<div style={{ position: "relative", width: "100%", aspectRatio: isMobileHero ? "3 / 4" : "21 / 9",
overflow: "hidden" }}>
<img src={IMG_AMSTERDAM_INTERIOR} alt="Amsterdam canal-side interior"
style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
<div style={{ position: "absolute", top: "24px", right: "24px", maxWidth: "260px",
background: "rgba(26,22,18,0.9)", borderRadius: "2px", padding: "24px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
<span style={{ color: TERRA, fontSize: "14px" }}>◆</span>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
color: TERRA, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "bold"
}}>Based in Amsterdam</span>
</div>
<div style={{ height: "1px", background: "rgba(255,255,255,0.15)", marginBottom: "12px" }} />
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
color: "rgba(255,255,255,0.7)", letterSpacing: "1px", textTransform: "uppercase",
marginBottom: "6px" }}>Operational expertise across</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px",
color: WHITE, fontWeight: "bold", marginBottom: "10px" }}>Europe</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>Combining local insight with
international standards. On-the-ground presence when it matters.</div>
</div>
</div>
{/* Credibility strip */}
<div style={{ padding: "24px clamp(20px, 8%, 10%)", background: TERRA, textAlign: "center" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px",
color: "rgba(255,255,255,0.9)", maxWidth: "560px", margin: "0 auto", lineHeight: "1.6" }}>
Proven results from Ruben's own short-term rental in Bournemouth, UK — every property
we manage gets the same standard.
</div>
</div>
{/* Services detail */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: SAND }}>
<div style={{ maxWidth: "min(1000px, 100%)", margin: "0 auto" }}>
<SectionLabel text="What we handle" />
<Heading>Four services. Full peace of mind.</Heading>
<div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "32px" }}>
{[
{ icon: "◆", title: "Guest Messaging & Communication", desc: "Every enquiry, booking question and in-stay message answered promptly and warmly — protecting your response rate and your reviews, without you needing to be online 24/7." },
{ icon: "✦", title: "Pricing & Revenue Management", desc: "Ongoing pricing adjustments based on demand, seasonality, local events and competitor rates — aimed at maximising occupancy and revenue across the year, not just filling calendar gaps." },
{ icon: "⬡", title: "Cleaning & Turnover Coordination", desc: "Reliable cleaning scheduled and coordinated around every check-out and check-in, so the property is guest-ready every time, with issues caught before the next guest arrives." },
{ icon: "◆", title: "Maintenance Coordination", desc: "Repairs, servicing and general upkeep organised and followed through with trusted tradespeople, so issues get resolved before they affect a guest's stay." },
].map((item, i) => (
<div key={i} style={{ display: "flex", gap: "24px", padding: "28px", background: WHITE,
borderRadius: "2px", border: `1px solid ${RULE}`, alignItems: "flex-start", flexWrap: "wrap" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "26px", color:
TERRA }}>{item.icon}</div>
<div style={{ flex: "1 1 240px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>{item.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.7" }}>{item.desc}</div>
</div>
</div>
))}
</div>
</div>
</div>
{/* How it works */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: DARK }}>
<div style={{ maxWidth: "min(1000px, 100%)", margin: "0 auto" }}>
<SectionLabel text="How it works" />
<Heading light>From first message to first guest.</Heading>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "40px" }}>
{[
{ step: "01", title: "Free Assessment", desc: "We look at your property, current listing and performance, and tell you honestly what we think we can improve." },
{ step: "02", title: "Agreement", desc: "A clear, straightforward agreement — no hidden fees, no long tie-in. You know exactly what you're paying and for what." },
{ step: "03", title: "Onboarding", desc: "We take over messaging, pricing and (if Full-Service) turnover and maintenance coordination — a short handover, then it's running." },
{ step: "04", title: "Monthly Reporting", desc: "A clear monthly summary of performance, occupancy and revenue, so you always know how your property is doing." },
].map((s, i) => (
<div key={i} style={{ flex: "1 1 220px", padding: "28px 24px", background:
"rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "28px",
fontWeight: "bold", color: TERRA, marginBottom: "12px" }}>{s.step}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px",
fontWeight: "bold", color: WHITE, marginBottom: "10px" }}>{s.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
"rgba(255,255,255,0.6)", lineHeight: "1.7" }}>{s.desc}</div>
</div>
))}
</div>
</div>
</div>
{/* Where we operate */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: SAND }}>
<div style={{ maxWidth: "min(1000px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Where we operate" />
<Heading>Based in Amsterdam, operating Europe-wide.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.8", marginBottom: "8px", maxWidth: "640px" }}>
Personal. Responsive. Present. Ruben visits, inspects and builds every relationship
in-person to make sure your property is in the best hands.
</p>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "24px" }}>
<div style={{ flex: "1 1 280px", padding: "28px", background: WHITE, borderRadius: "2px",
border: `2px solid ${TERRA}` }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
letterSpacing: "2px", textTransform: "uppercase", color: TERRA, fontWeight: "bold",
marginBottom: "10px" }}>Primary — Full-Service</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "18px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>Amsterdam</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.7" }}>Where we're based — full hands-on management including
guest messaging, pricing, cleaning &amp; turnover, and maintenance coordination, with
regular in-person attention.</div>
</div>
<div style={{ flex: "1 1 280px", padding: "28px", background: WHITE, borderRadius: "2px",
border: `1px solid ${RULE}` }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
letterSpacing: "2px", textTransform: "uppercase", color: WARM, fontWeight: "bold",
marginBottom: "10px" }}>Also Available</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "18px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>Europe-wide</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.7" }}>Guest messaging and pricing &amp; revenue management
deliverable remotely across Europe. We travel for onboarding and periodic visits — get
in touch to discuss what's realistic for your property.</div>
</div>
</div>
</div>
</div>
{/* Pricing */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "1000px", margin: "0 auto" }}>
<SectionLabel text="Pricing" />
<Heading>Simple, performance-aligned pricing.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8", marginBottom: "16px" }}>
Like most co-hosting services, we work on a percentage of your booking revenue — we
only do well when your property does well.
</p>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
Our rate reflects a proven track record, not a starting-out one — Ruben has run his own
Bournemouth property to Superhost status with a 4.81★ rating and consistent occupancy
and returns, and every property we manage gets that same standard.
</p>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
{[
{
tier: "Essential Co-Hosting", price: "20%", popular: false,
tagline: "Messaging & pricing.",
items: ["Guest messaging & communication", "Pricing & revenue management", "Monthly performance summary", "Direct WhatsApp line"],
},
{
tier: "Full-Service Management", price: "30%", popular: true,
tagline: "Everything, handled.",
items: ["Guest messaging & communication", "Pricing & revenue management", "Cleaning & turnover coordination", "Maintenance coordination", "Signature guest handbook included", "Monthly performance summary", "Priority support"],
},
{
tier: "Portfolio", price: "Custom", popular: false,
tagline: "Multiple properties.",
items: ["Everything in Full-Service", "Multi-property dashboard", "Dedicated point of contact", "Custom quote based on portfolio size"],
},
].map((pkg, i) => (
<div key={i} style={{
flex: "1 1 260px", padding: "36px 28px",
background: pkg.popular ? TERRA : CREAM,
border: `1px solid ${pkg.popular ? TERRA : RULE}`,
borderRadius: "2px", position: "relative",
}}>
{pkg.popular && (
<div style={{
position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)",
background: BODY, color: WHITE, padding: "4px 16px",
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "9px", letterSpacing:
"2px", textTransform: "uppercase",
}}>Most Popular</div>
)}
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
letterSpacing: "2px", textTransform: "uppercase", color: pkg.popular ? "rgba(255,255,255,0.7)" :
WARM, marginBottom: "8px" }}>{pkg.tier}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "36px",
fontWeight: "bold", color: pkg.popular ? WHITE : TERRA, marginBottom: "4px"
}}>{pkg.price}<span style={{ fontSize: "14px", fontWeight: "normal" }}>{pkg.price !== "Custom" ? " of revenue" : ""}</span></div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
pkg.popular ? "rgba(255,255,255,0.6)" : WARM, marginBottom: "24px", fontStyle: "italic"
}}>{pkg.tagline}</div>
<div style={{ height: "1px", background: pkg.popular ? "rgba(255,255,255,0.2)" : RULE,
marginBottom: "24px" }} />
{pkg.items.map((item, j) => (
<div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom:
"10px" }}>
<span style={{ color: pkg.popular ? "rgba(255,255,255,0.5)" : TERRA, fontSize:
"14px", marginTop: "1px" }}>—</span>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px",
color: pkg.popular ? "rgba(255,255,255,0.9)" : BODY, lineHeight: "1.5" }}>{item}</span>
</div>
))}
<div style={{ marginTop: "28px" }}>
<button onClick={() => setPage("Contact")} style={{
width: "100%", padding: "12px", cursor: "pointer", borderRadius: "2px",
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "bold",
background: pkg.popular ? WHITE : TERRA,
color: pkg.popular ? TERRA : WHITE, border: "none",
}}>Get Started</button>
</div>
</div>
))}
</div>
</div>
</div>
{/* Explore our services */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "min(1000px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Explore further" />
<Heading>Two more ways we help hosts.</Heading>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "32px" }}>
<div style={{ flex: "1 1 300px", padding: "32px 28px", background: CREAM, borderRadius: "2px",
border: `1px solid ${RULE}` }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "26px", color:
TERRA, marginBottom: "16px" }}>◆</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>Guest Handbooks</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.7", marginBottom: "20px" }}>Our signature printed, laminated A5
guest handbook — included with Full-Service, or available as a standalone product.</div>
<button onClick={() => setPage("Guest Handbooks")} style={{
background: "transparent", border: "none", cursor: "pointer", padding: 0,
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", color: TERRA, fontWeight: "bold",
}}>See a Sample →</button>
</div>
<div style={{ flex: "1 1 300px", padding: "32px 28px", background: CREAM, borderRadius: "2px",
border: `1px solid ${RULE}` }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "26px", color:
TERRA, marginBottom: "16px" }}>✦</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>Interior Design &amp; Styling</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.7", marginBottom: "20px" }}>For hosts looking to increase appeal
and rental value — in partnership with an independent architect running his own design
practice.</div>
<button onClick={() => setPage("Interior Design")} style={{
background: "transparent", border: "none", cursor: "pointer", padding: 0,
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", color: TERRA, fontWeight: "bold",
}}>Learn More →</button>
</div>
</div>
</div>
</div>
{/* CTA */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background:
DARK, textAlign: "center" }}>
<Heading light center>Let us take hosting off your plate.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
"rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: "1.8" }}>
Get a free assessment of your property and a straightforward quote — no obligation.
</p>
<div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap",
alignItems: "center", flexDirection: "column" }}>
<FormBtn text="Get a Free Property Assessment" setPage={setPage} />
<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color:
"rgba(255,255,255,0.5)" }}>prefer to chat first?</span>
<WhatsAppBtn />
</div>
</div>
</div>
</div>
);
}
// ── GUEST HANDBOOKS PAGE──────────────────────────────────────────────────────
function GuestHandbooksPage({ setPage }) {
return (
<div style={{ paddingTop: "64px" }}>
{/* Header */}
<div style={{ padding: "80px 10% 64px", background: DARK }}>
<div style={{ maxWidth: "min(700px, 100%)" }}>
<SectionLabel text="Property Management · Guest Handbooks" />
<Heading light>Your signature guest handbook.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
"rgba(255,255,255,0.6)", lineHeight: "1.8" }}>
Not a PDF attachment. Not a link in a message. A beautifully produced, printed and
laminated A5 booklet left on the kitchen table — ready for guests the moment they
arrive. Included as standard with Full-Service Management, and available as a
standalone product for any host.
</p>
</div>
</div>
{/* Features */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: CREAM }}>
<div style={{ maxWidth: "min(1000px, 100%)", margin: "0 auto" }}>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "48px" }}>
{[
{ icon: "◆", title: "Printed & Laminated", desc: "Full colour, wipe-clean and built to last the season." },
{ icon: "✦", title: "QR Codes", desc: "Wi-Fi, how-to videos and local maps — scannable from the page." },
{ icon: "⬡", title: "Multiple Languages", desc: "English, French, Spanish, German, Dutch and more." },
].map((item, i) => (
<div key={i} style={{ flex: "1 1 260px", padding: "24px", background: WHITE,
borderRadius: "2px", border: `1px solid ${RULE}` }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "20px", color:
TERRA, marginBottom: "10px" }}>{item.icon}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px",
fontWeight: "bold", color: BODY, marginBottom: "6px" }}>{item.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM, lineHeight: "1.6" }}>{item.desc}</div>
</div>
))}
</div>
<SectionLabel text="Before & After" />
<Heading>What a difference design makes.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8", marginBottom: "40px" }}>
Drag the slider to compare a typical host-written guide with a Curated Host handbook.
</p>
<BeforeAfter />
</div>
</div>
{/* Sample pages */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Sample pages" />
<Heading>Inside a Signature handbook.</Heading>
<div style={{ display: "flex", flexDirection: "column", marginTop: "32px" }}>
{[
{ img: IMG_COVER_CLOSEUP, caption: "Cover page", desc: "Property name centred on a clean A5 cover — the first thing guests see when they arrive." },
{ img: IMG_INTERIOR_WELCOME, caption: "Welcome & introduction", desc: "Warm, personal welcome copy with property-specific notes. Sets the tone immediately." },
{ img: IMG_INTERIOR_QR, caption: "QR codes & tech", desc: "Wi-Fi credentials with scannable QR code. TV and streaming instructions." },
{ img: IMG_INTERIOR_HEATING, caption: "Appliance instructions", desc: "Clear heating and appliance instructions with real photos — no more midnight messages." },
{ img: IMG_COVER_FLATLAY, caption: "The physical product", desc: "A5 format, spiral bound, laminated. Compact, durable and easy to handle." },
].map((p, i) => (
<div key={i} style={{ overflow: "hidden", borderBottom: `1px solid ${RULE}`,
background: i % 2 === 0 ? CREAM : WHITE }}>
<img src={p.img} alt={p.caption} style={{ width: "100%", display: "block", maxHeight:
"480px", objectFit: "contain", background: SAND }} />
<div style={{ padding: "28px 36px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px",
fontWeight: "bold", color: TERRA, marginBottom: "10px" }}>{p.caption}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.8", maxWidth: "600px" }}>{p.desc}</div>
</div>
</div>
))}
</div>
</div>
</div>
{/* Testimonials — handbook specific */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background:
TERRA }}>
<div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
<SectionLabel text="What hosts say about the handbook" />
<div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
{[
{ quote: "My guests keep mentioning the handbook in their reviews. It sets the tone from the moment they walk through the door.", name: "Sarah M.", location: "Brighton, UK" },
{ quote: "I used to dread the 'how does the heating work?' messages at midnight. Haven't had one since.", name: "James T.", location: "Edinburgh, UK" },
{ quote: "Worth every penny. Professional, fast, and the printed version looks incredible on the kitchen table.", name: "Priya K.", location: "Manchester, UK" },
].map((t, i) => (
<div key={i} style={{ flex: "1 1 240px", padding: "28px", background:
"rgba(255,255,255,0.1)", borderRadius: "2px", borderTop: `2px solid rgba(255,255,255,0.3)` }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WHITE, lineHeight: "1.8", marginBottom: "20px", fontStyle: "italic" }}>
"{t.quote}"
</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color:
"rgba(255,255,255,0.7)", letterSpacing: "1px" }}>
{t.name} · {t.location}
</div>
</div>
))}
</div>
</div>
</div>
{/* CTA */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background:
DARK, textAlign: "center" }}>
<Heading light center>Want yours to look like this?</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
"rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: "1.8" }}>
Order a standalone handbook, or ask about bundling it with Full-Service Management.
</p>
<div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap",
alignItems: "center", flexDirection: "column" }}>
<FormBtn text="Order a Handbook" setPage={setPage} />
<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color:
"rgba(255,255,255,0.5)" }}>prefer to chat first?</span>
<WhatsAppBtn />
</div>
</div>
</div>
</div>
);
}
// ── INTERIOR DESIGN PAGE──────────────────────────────────────────────────────
function InteriorDesignPage({ setPage }) {
return (
<div style={{ paddingTop: "64px" }}>
{/* Header */}
<div style={{ padding: "80px 10% 64px", background: DARK }}>
<div style={{ maxWidth: "min(700px, 100%)" }}>
<SectionLabel text="Property Management · Interior Design" />
<Heading light>Interior design &amp; styling.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
"rgba(255,255,255,0.6)", lineHeight: "1.8" }}>
For hosts looking to increase appeal and rental value — from small styling refreshes
to fuller layout and design consultations, delivered in partnership with an independent
architect with his own design practice and a proven track record.
</p>
</div>
</div>
{/* What's offered */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: SAND }}>
<div style={{ maxWidth: "min(1000px, 100%)", margin: "0 auto" }}>
<SectionLabel text="What's offered" />
<Heading>From a refresh to a full redesign.</Heading>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "32px" }}>
{[
{ icon: "◆", title: "Styling Refresh", desc: "Furniture arrangement, soft furnishings and small styling touches to lift how a property presents in photos and in person." },
{ icon: "✦", title: "Layout Consultation", desc: "A review of how a space is used, with suggestions to improve flow, functionality and guest experience." },
{ icon: "⬡", title: "Fuller Design Projects", desc: "For bigger renovations or new properties, more involved design input scoped and quoted individually." },
].map((item, i) => (
<div key={i} style={{ flex: "1 1 280px", padding: "28px", background: WHITE,
borderRadius: "2px", border: `1px solid ${RULE}` }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "26px", color:
TERRA, marginBottom: "16px" }}>{item.icon}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>{item.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.7" }}>{item.desc}</div>
</div>
))}
</div>
</div>
</div>
{/* How it works */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
<SectionLabel text="How it works" />
<Heading>A standalone engagement.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8", marginBottom: "16px", maxWidth: "700px" }}>
Interior design is available to any host — whether or not you use us for property
management. We start with a conversation about the space and what you're hoping to
achieve, then scope and price the work individually depending on what's involved.
</p>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.8", maxWidth: "700px" }}>
Priced separately on request — get in touch with a few details about your property and
what you have in mind.
</p>
</div>
</div>
{/* CTA */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background:
DARK, textAlign: "center" }}>
<Heading light center>Thinking about a refresh?</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
"rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: "1.8" }}>
Tell us about your property and what you'd like to change — we'll get back to you with
next steps.
</p>
<div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap",
alignItems: "center", flexDirection: "column" }}>
<FormBtn text="Enquire About Design" setPage={setPage} />
<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color:
"rgba(255,255,255,0.5)" }}>prefer to chat first?</span>
<WhatsAppBtn />
</div>
</div>
</div>
</div>
);
}
// ── CONTACT PAGE──────────────────────────────────────────────────────────────
function ContactPage() {
const [step, setStep] = useState(0);
const steps = ["Your property", "Check-in", "Wi-Fi & Tech", "Heating", "House Rules", "Local Recs", "Final Details"];
return (
<div style={{ paddingTop: "64px" }}>
<div style={{ padding: "80px 10% 64px", background: CREAM, borderBottom: `1px solid
${RULE}` }}>
<div style={{ maxWidth: "min(600px, 100%)" }}>
<SectionLabel text="Get In Touch" />
<Heading>Let's talk.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8" }}>
Ready for a free property assessment, have a speaking or communications enquiry, or
just want to order a guest handbook — reach out on WhatsApp or email and we'll be in
touch within 24 hours.
</p>
</div>
</div>
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background:
WHITE }}>
<div style={{ maxWidth: "min(860px, 100%)", margin: "0 auto" }}>
{/* Direct contact — property management (primary) */}
<div style={{ padding: "32px", background: TERRA, borderRadius: "2px",
marginBottom: "24px", display: "flex", alignItems: "center",
gap: "20px", flexWrap: "wrap" }}>
<div style={{ flex: 1, minWidth: "220px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px",
fontWeight: "bold", color: WHITE, marginBottom: "6px" }}>Want us to manage your property?</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
"rgba(255,255,255,0.85)", lineHeight: "1.6" }}>Message on WhatsApp or email
hello@thecuratedhost.com for a free property assessment — no form required.</div>
</div>
<WhatsAppBtn text="Message on WhatsApp" />
</div>
{/* Speaking / communications enquiries (secondary) */}
<div style={{ padding: "24px 32px", background: SAND, border: `1px solid ${RULE}`,
borderRadius: "2px", marginBottom: "48px", display: "flex", alignItems: "center",
gap: "20px", flexWrap: "wrap" }}>
<div style={{ flex: 1, minWidth: "220px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px",
fontWeight: "bold", color: BODY, marginBottom: "6px" }}>Speaking or communications enquiry?</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM, lineHeight: "1.6" }}>Same channels — WhatsApp or
hello@thecuratedhost.com works for these too.</div>
</div>
</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color:
WARM, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px" }}>Order a
standalone guest handbook</div>
{/* Tally embed */}
<iframe
src="https://tally.so/embed/b5vkAe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
width="100%"
height="800"
frameBorder="0"
marginHeight="0"
marginWidth="0"
title="Start Your Handbook"
style={{ border: "none", minHeight: "600px" }}
/>
</div>
</div>
</div>
);
}
// ── FOOTER────────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
return (
<footer style={{ background: DARK, padding: "64px 10% 32px" }}>
<div style={{ display: "flex", gap: "48px", flexWrap: "wrap", marginBottom: "48px",
paddingBottom: "48px", borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
<div style={{ flex: "1 1 240px" }}>
<Logo light />
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
"rgba(255,255,255,0.4)", lineHeight: "1.8", marginTop: "16px", maxWidth: "280px" }}>
Property management for Airbnb hosts, plus public speaking and communications — built
on one belief: how you host people defines the experience they take away.
</p>
</div>
<div style={{ flex: "0 1 160px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Pages</div>
{["Home","Property Management","Guest Handbooks","Interior Design","Speaking","About","Millennicast","Contact"].map(l => (
<div key={l} onClick={() => setPage(l)} style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "10px",
cursor: "pointer" }}>{l}</div>
))}
</div>
<div style={{ flex: "0 1 200px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Get
in Touch</div>
<button onClick={() => setPage("Contact")} style={{
display: "inline-block", padding: "12px 20px", background: TERRA,
border: "none", borderRadius: "2px", cursor: "pointer",
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", color: WHITE, fontWeight: "bold",

marginBottom: "12px", width: "100%", textAlign: "center",
}}>Get In Touch</button>
<WhatsAppBtn text="WhatsApp" />
<a href="https://www.instagram.com/thehostcurator" target="_blank" rel="noopener noreferrer" style={{
display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "16px",
textDecoration: "none",
}}>
{/* Instagram gradient icon */}
<svg width="28" height="28" viewBox="0 0 24 24">
<defs>
<radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
<stop offset="0%" stopColor="#fdf497"/>
<stop offset="5%" stopColor="#fdf497"/>
<stop offset="45%" stopColor="#fd5949"/>
<stop offset="60%" stopColor="#d6249f"/>
<stop offset="90%" stopColor="#285AEB"/>
</radialGradient>
</defs>
<rect x="0" y="0" width="24" height="24" rx="6" ry="6" fill="url(#igGrad)"/>
<circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.5"/>
<circle cx="17" cy="7" r="1" fill="white"/>
<rect x="1.5" y="1.5" width="21" height="21" rx="5" ry="5" fill="none" stroke="white"
strokeWidth="1" strokeOpacity="0.3"/>
</svg>
<div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color:
"rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "2px"
}}>Follow us</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WHITE, fontWeight: "bold" }}>@thehostcurator</div>
</div>
</a>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
"rgba(255,255,255,0.4)", marginTop: "8px" }}>hello@thecuratedhost.com</div>
</div>
</div>
<div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px"
}}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
"rgba(255,255,255,0.25)", letterSpacing: "1px" }}>© The Curated Host 2025. All rights
reserved.</div>

<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
"rgba(255,255,255,0.25)", letterSpacing: "1px" }}>Property Management · Speaking · Europe-Wide</div>
</div>
</footer>
);
}
// ── APP───────────────────────────────────────────────────────────────────────
export default function App() {
const [page, setPage] = useState("Home");
const changePage = (p) => {
setPage(p);
window.scrollTo({ top: 0, behavior: "smooth" });
};
return (
<div style={{ background: CREAM, minHeight: "100vh" }}>
<Nav page={page} setPage={changePage} />
{page === "Home"
&& <HomePage setPage={changePage} />}
{page === "About" && <AboutPage setPage={changePage} />}
{page === "Speaking" && <EngagementsPage setPage={changePage} />}
{page === "Millennicast" && <MillennicastPage setPage={changePage} />}
{page === "Property Management" && <PropertyManagementPage setPage={changePage} />}
{page === "Guest Handbooks" && <GuestHandbooksPage setPage={changePage} />}
{page === "Interior Design" && <InteriorDesignPage setPage={changePage} />}
{page === "Contact" && <ContactPage />}
<Footer setPage={changePage} />
</div>
);
}
