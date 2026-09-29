import { useState, useEffect, useLayoutEffect, useRef } from "react";
const TERRA = "#A0782A";
const WARM = "#9C8B6A";
const SAND = "#F5EDD8";
const CREAM = "#FAF7F2";
const BODY = "#2E2E2E";
const RULE = "#D8C898";
const WHITE = "#FFFFFF";
const DARK = "#1A1612";

// ── Portfolio images────────────────────────────────────────────────────────
const IMG_COVER_CLOSEUP = "/handbook-cover-closeup.jpg";
const IMG_COVER_FLATLAY = "/handbook-cover-flatlay.jpg";
const IMG_INTERIOR_WELCOME = "/handbook-interior-welcome.jpg";
const IMG_INTERIOR_QR = "/handbook-interior-qr.jpg";
const IMG_INTERIOR_HEATING = "/handbook-interior-heating.jpg";
const IMG_SPEAKING_ACTION = "/ruben-speaking-renaissance-ucla.jpg";
const IMG_HEADSHOT_PORTRAIT = "/ruben-headshot-portrait.jpg";
const IMG_BOURNEMOUTH_BEACH = "/bournemouth-beach.jpg";
const IMG_BOURNEMOUTH_HUTS_BANNER = "/bournemouth-huts-banner.jpg";
const IMG_ENGAGEMENT_TALK = "/ruben-speaking-mic-flags.jpg";
const IMG_AMSTERDAM_CANAL = "/amsterdam-canal.jpg";
const IMG_INTERIOR_DESIGN_HERO = "/interior-design-hero.jpg";
const IMG_GH_QUESTIONS = "/handbook-ig-questions.jpg";
const IMG_GH_INCLUDE = "/handbook-ig-include.jpg";
const IMG_GH_FOR_HOSTS = "/handbook-ig-for-hosts.jpg";
const IMG_GH_FOR_GUESTS = "/handbook-ig-for-guests.jpg";
const IMG_GH_PRINTED = "/handbook-ig-printed.jpg";
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
function Logo({ light, big }) {
const c = light ? WHITE : TERRA;
const sc = light ? "rgba(255,255,255,0.4)" : CREAM;
return (
<div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
<svg width={big ? 54 : 38} height={big ? 54 : 38} viewBox="0 0 400 400" fill="none">
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
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: big ? "23px" : "16px", fontWeight:
"bold", color: light ? WHITE : TERRA, letterSpacing: "0.5px" }}>The Curated Host</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: big ? "11px" : "9px", color: light ?
"rgba(255,255,255,0.6)" : WARM, letterSpacing: "2.5px", textTransform: "uppercase" }}>Property Management</div>
</div>
</div>
);
}
function useWidth() {
const [w, setW] = useState(window.innerWidth);
useEffect(() => {
const h = () => setW(window.innerWidth);
window.addEventListener("resize", h);
return () => window.removeEventListener("resize", h);
}, []);
return w;
}
const SEARCH_INDEX = [
{ title: "Home", page: "Home", blurb: "Welcome to The Curated Host",
kw: "home start welcome superhost reviews thuis" },
{ title: "Property Management", page: "Property Management",
blurb: "Airbnb co-hosting, services, pricing and where we operate",
kw: "property management airbnb co-hosting cohosting services pricing fees commission essential full-service portfolio guest messaging revenue cleaning turnover maintenance netherlands uk europe where we operate how it works beheer verhuur vastgoed tarieven prijzen kosten schoonmaak onderhoud" },
{ title: "Guest Handbooks", page: "Guest Handbooks",
blurb: "Professionally designed guest handbooks for your property",
kw: "guest handbook handbooks welcome book house manual qr code printed gasten handboek" },
{ title: "Interior Design", page: "Interior Design",
blurb: "Interior design and styling for short-term rentals",
kw: "interior design styling furnishing decor interieur inrichting" },
{ title: "About", page: "About", blurb: "About The Curated Host",
kw: "about us who ruben story values over ons" },
{ title: "Speaking", page: "Speaking", blurb: "Talks, guest lectures and appearances",
kw: "speaking public speaker talks engagements events ucla lecture spreker" },
{ title: "Millennicast", page: "Millennicast", blurb: "The podcast and its episodes",
kw: "millennicast podcast episodes listen spotify apple" },
{ title: "Contact", page: "Contact", blurb: "Get in touch or request a free property assessment",
kw: "contact get in touch whatsapp email enquiry free property assessment form phone reach neem contact op" },
];
function SearchBox({ setPage, mode = "inline", onDone }) {
const [q, setQ] = useState("");
const [open, setOpen] = useState(false);
const [focus, setFocus] = useState(false);
const boxRef = useRef(null);
useEffect(() => {
const h = (e) => {
if (boxRef.current && !boxRef.current.contains(e.target)) { setFocus(false); setOpen(false); }
};
window.addEventListener("mousedown", h);
window.addEventListener("touchstart", h);
return () => { window.removeEventListener("mousedown", h); window.removeEventListener("touchstart", h); };
}, []);
const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
const results = tokens.length ? SEARCH_INDEX.map(e => {
const t = e.title.toLowerCase();
const hay = t + " " + e.blurb.toLowerCase() + " " + e.kw;
if (!tokens.every(k => hay.includes(k))) return null;
return { e, score: tokens.some(k => t.includes(k)) ? 0 : 1 };
}).filter(Boolean).sort((a, b) => a.score - b.score).map(x => x.e) : [];
const go = (e) => { setPage(e.page); setQ(""); setFocus(false); setOpen(false); if (onDone) onDone(); };
const font = "'Futura','Century Gothic',sans-serif";
const glass = (
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="2"
strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
);
const field = (
<div style={{ display: "flex", alignItems: "center", gap: "10px", background: CREAM,
border: `1px solid ${RULE}`, borderRadius: "999px", padding: "0 18px", height: "46px",
width: "100%", boxSizing: "border-box" }}>
{glass}
<input value={q} placeholder="Search the site" autoFocus={mode === "icon"}
onChange={e => { setQ(e.target.value); setFocus(true); }} onFocus={() => setFocus(true)}
onKeyDown={e => {
if (e.key === "Enter" && results[0]) go(results[0]);
if (e.key === "Escape") { setQ(""); setFocus(false); setOpen(false); }
}}
style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
fontFamily: font, fontSize: "16px", color: BODY }} />
</div>
);
const list = tokens.length > 0 && (mode === "mobile" || focus || open) ? (
<div style={{ background: WHITE, borderRadius: "18px", overflow: "hidden",
boxShadow: mode === "mobile" ? "none" : "0 12px 36px rgba(26,22,18,0.16)",
border: mode === "mobile" ? `1px solid ${RULE}` : "none", marginTop: "8px" }}>
{results.length === 0 ? (
<div style={{ padding: "16px 18px", fontFamily: font, fontSize: "13px", color: WARM }}>
No matches. Try "pricing", "handbook" or "contact".</div>
) : results.slice(0, 6).map(r => (
<button key={r.page} onClick={() => go(r)} style={{ display: "block", width: "100%",
textAlign: "left", padding: "12px 18px", background: "transparent", border: "none",
borderBottom: `1px solid ${SAND}`, cursor: "pointer" }}>
<div style={{ fontFamily: font, fontSize: "14px", fontWeight: "bold", color: TERRA }}>{r.title}</div>
<div style={{ fontFamily: font, fontSize: "12px", color: WARM, marginTop: "2px" }}>{r.blurb}</div>
</button>
))}
</div>
) : null;
if (mode === "mobile") {
return <div ref={boxRef} style={{ marginBottom: "12px" }}>{field}{list}</div>;
}
if (mode === "icon") {
return (
<div ref={boxRef} style={{ position: "relative" }}>
<button onClick={() => setOpen(o => !o)} aria-label="Search" style={{ width: "46px", height: "46px",
borderRadius: "50%", background: CREAM, border: `1px solid ${RULE}`, cursor: "pointer",
display: "flex", alignItems: "center", justifyContent: "center" }}>{glass}</button>
{open && (
<div style={{ position: "absolute", right: 0, top: "calc(100% + 14px)", width: "min(360px, 86vw)",
background: WHITE, borderRadius: "22px", padding: "12px", boxShadow: "0 12px 36px rgba(26,22,18,0.18)" }}>
{field}{list}
</div>
)}
</div>
);
}
return (
<div ref={boxRef} style={{ position: "relative", width: "190px", flexShrink: 0 }}>
{field}
{list && <div style={{ position: "absolute", top: "100%", left: 0, width: "300px", zIndex: 5 }}>{list}</div>}
</div>
);
}
function Nav({ page, setPage }) {
const topLinks = ["Home", "About"];
const pmLinks = ["Property Management", "Guest Handbooks", "Interior Design"];
const moreLinks = ["Speaking", "Millennicast"];
const [menuOpen, setMenuOpen] = useState(false);
const [moreOpen, setMoreOpen] = useState(false);
const [pmOpen, setPmOpen] = useState(false);
const isMobile = useIsMobile();
const width = useWidth();
const moreRef = useRef(null);
const pmRef = useRef(null);
useEffect(() => {
const h = (e) => {
if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
if (pmRef.current && !pmRef.current.contains(e.target)) setPmOpen(false);
};
window.addEventListener("mousedown", h);
return () => window.removeEventListener("mousedown", h);
}, []);
const font = "'Futura','Century Gothic',sans-serif";
const isMoreActive = moreLinks.includes(page);
const isPmActive = pmLinks.includes(page);
const edge = "clamp(10px, 2vw, 28px)";
const linkStyle = (active) => ({
padding: "10px 10px", background: "transparent", border: "none", cursor: "pointer",
fontFamily: font, fontSize: "14px", letterSpacing: "0.6px", textTransform: "uppercase",
color: active ? TERRA : BODY, fontWeight: active ? "bold" : "normal",
whiteSpace: "nowrap", flexShrink: 0, display: "flex", alignItems: "center", gap: "5px",
});
const dropStyle = {
position: "absolute", top: "calc(100% + 14px)", background: WHITE, borderRadius: "18px",
minWidth: "230px", boxShadow: "0 12px 36px rgba(26,22,18,0.16)", overflow: "hidden", padding: "6px",
};
const dropItem = (active) => ({
display: "block", width: "100%", padding: "13px 16px", background: "transparent", border: "none",
cursor: "pointer", textAlign: "left", fontFamily: font, fontSize: "13px", letterSpacing: "1px",
textTransform: "uppercase", color: active ? TERRA : BODY, fontWeight: active ? "bold" : "normal",
borderRadius: "12px",
});
const mobileItem = (active) => ({
padding: "15px 4px", background: "transparent", border: "none", borderBottom: `1px solid ${SAND}`,
cursor: "pointer", textAlign: "left", fontFamily: font, fontSize: "15px", letterSpacing: "1.5px",
textTransform: "uppercase", color: active ? TERRA : BODY, fontWeight: active ? "bold" : "normal",
});
const mobileHead = { fontFamily: font, fontSize: "11px", color: WARM, letterSpacing: "2px",
textTransform: "uppercase", margin: "18px 0 4px" };
return (
<>
<nav style={{
position: "fixed", top: "12px", left: edge, right: edge, zIndex: 100,
background: "rgba(255,255,255,0.97)", backdropFilter: "blur(10px)", borderRadius: "26px",
boxShadow: "0 6px 30px rgba(26,22,18,0.12)", padding: isMobile ? "0 18px" : "0 28px",
height: isMobile ? "68px" : "84px", display: "flex", alignItems: "center",
justifyContent: "space-between", gap: "16px",
}}>
<div onClick={() => { setPage("Home"); setMenuOpen(false); }} style={{ flexShrink: 0 }}>
<Logo big />
</div>
{isMobile ? (
<button onClick={() => setMenuOpen(o => !o)} aria-label="Menu" style={{
background: "transparent", border: "none", cursor: "pointer", display: "flex",
flexDirection: "column", gap: "6px", padding: "10px",
}}>
{[0, 1, 2].map(i => (
<div key={i} style={{ width: "28px", height: "3px", background: TERRA, borderRadius: "2px" }} />
))}
</button>
) : (
<div style={{ display: "flex", gap: "2px", alignItems: "center", flexWrap: "nowrap" }}>
<button onClick={() => setPage("Home")} style={linkStyle(page === "Home")}>Home</button>
<div ref={pmRef} style={{ position: "relative", flexShrink: 0 }}>
<button onClick={() => setPmOpen(o => !o)} style={linkStyle(isPmActive)}>
Property Management <span style={{ fontSize: "10px" }}>{pmOpen ? "▴" : "▾"}</span></button>
{pmOpen && (
<div style={{ ...dropStyle, left: 0 }}>
{pmLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setPmOpen(false); }} style={dropItem(page === l)}>
{l === "Property Management" ? "Overview" : l}</button>
))}
</div>
)}
</div>
<button onClick={() => setPage("About")} style={linkStyle(page === "About")}>About</button>
<div ref={moreRef} style={{ position: "relative", flexShrink: 0 }}>
<button onClick={() => setMoreOpen(o => !o)} style={linkStyle(isMoreActive)}>
More <span style={{ fontSize: "10px" }}>{moreOpen ? "▴" : "▾"}</span></button>
{moreOpen && (
<div style={{ ...dropStyle, right: 0, minWidth: "190px" }}>
{moreLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setMoreOpen(false); }} style={dropItem(page === l)}>{l}</button>
))}
</div>
)}
</div>
<div style={{ marginLeft: "10px", marginRight: "8px" }}>
<SearchBox setPage={setPage} mode={width >= 1200 ? "inline" : "icon"} />
</div>
<button onClick={() => setPage("Contact")} style={{
padding: "13px 24px", background: TERRA, border: "none", borderRadius: "999px", cursor: "pointer",
fontFamily: font, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase",
color: WHITE, fontWeight: "bold", whiteSpace: "nowrap", flexShrink: 0,
}}>Get In Touch</button>
</div>
)}
</nav>
{isMobile && menuOpen && (
<div style={{
position: "fixed", top: "90px", left: edge, right: edge, zIndex: 99, background: WHITE,
borderRadius: "26px", boxShadow: "0 12px 40px rgba(26,22,18,0.18)", padding: "18px 22px 22px",
display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 110px)", overflowY: "auto",
}}>
<SearchBox setPage={setPage} mode="mobile" onDone={() => setMenuOpen(false)} />
{topLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setMenuOpen(false); }} style={mobileItem(page === l)}>{l}</button>
))}
<button onClick={() => { setPage("Contact"); setMenuOpen(false); }} style={mobileItem(page === "Contact")}>Contact</button>
<div style={mobileHead}>Property Management</div>
{pmLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setMenuOpen(false); }} style={mobileItem(page === l)}>
{l === "Property Management" ? "Overview" : l}</button>
))}
<div style={mobileHead}>More</div>
{moreLinks.map(l => (
<button key={l} onClick={() => { setPage(l); setMenuOpen(false); }} style={mobileItem(page === l)}>{l}</button>
))}
</div>
)}
</>
);
}
function FormBtn({ text = "Start Your Handbook", setPage, light, trackConversion }) {
const handleClick = () => {
if (trackConversion && typeof window.gtag === "function") {
window.gtag('event', 'conversion', {
'send_to': 'AW-18441082610/5WgSCKXYx_gcEPKtstlE',
'value': 1.0,
'currency': 'GBP'
});
}
if (setPage) { setPage("Contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }
};
return (
<button onClick={handleClick} style={{
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
function BuzzsproutEmbed({ episodeId, slug }) {
const containerId = `buzzsprout-player-${episodeId}`;
useEffect(() => {
const container = document.getElementById(containerId);
if (!container) return;
const script = document.createElement("script");
script.src = `https://www.buzzsprout.com/1463422/episodes/${episodeId}-${slug}.js?container_id=${containerId}&player=small`;
script.type = "text/javascript";
script.charset = "utf-8";
container.appendChild(script);
return () => { if (container.contains(script)) container.removeChild(script); };
}, [episodeId, slug]);
return <div id={containerId} style={{ minHeight: "56px" }} />;
}
function WhatsAppBtn({ text = "Chat on WhatsApp", wide }) {
const whatsappUrl = "https://wa.me/447736503848";
const handleClick = (e) => {
e.preventDefault();
const newTab = window.open("", "_blank", "noopener,noreferrer");
if (!newTab) {
window.open(whatsappUrl, "_blank", "noopener,noreferrer");
return;
}
if (typeof window.gtag_report_conversion === "function") {
window.gtag_report_conversion(whatsappUrl, newTab);
} else {
newTab.location = whatsappUrl;
}
};
return (
<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleClick}
style={{
display: "inline-flex", alignItems: "center", gap: "10px",
padding: "14px 24px", background: "transparent",
justifyContent: "center", minWidth: wide ? "240px" : undefined, boxSizing: "border-box",
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
function EmailBtn({ text = "Send an Email", wide }) {
const email = "hello@thecuratedhost.com";
const subject = "Free property assessment enquiry";
const body = [
"Hi,", "",
"I'd like a free property assessment for my property.", "",
"Property location:",
"Number of bedrooms:",
"Currently listed on Airbnb? (yes/no):",
"Best way and time to reach me:", "",
"Thanks,",
].join("\r\n");
const enc = encodeURIComponent;
const href = `mailto:${email}?subject=${enc(subject)}&body=${enc(body)}`;
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(email)}&su=${enc(subject)}&body=${enc(body)}`;
const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${enc(email)}&subject=${enc(subject)}&body=${enc(body)}`;
const [showAlt, setShowAlt] = useState(false);
const [copied, setCopied] = useState(false);
const copy = () => {
const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2200); };
const legacy = () => {
const t = document.createElement("textarea");
t.value = email; t.style.position = "fixed"; t.style.opacity = "0";
document.body.appendChild(t); t.select();
try { document.execCommand("copy"); done(); } catch (e) {}
document.body.removeChild(t);
};
if (navigator.clipboard && navigator.clipboard.writeText) {
navigator.clipboard.writeText(email).then(done).catch(legacy);
} else legacy();
};
const font = "'Futura','Century Gothic',sans-serif";
const alt = { color: WHITE, fontWeight: "bold", textDecoration: "underline", cursor: "pointer",
background: "none", border: "none", padding: 0, fontSize: "12px", fontFamily: font };
return (
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
<a href={href} onClick={() => setShowAlt(true)} style={{
display: "inline-flex", alignItems: "center", gap: "10px",
padding: "14px 24px", background: "transparent",
justifyContent: "center", minWidth: wide ? "240px" : undefined, boxSizing: "border-box",
border: "1px solid rgba(255,255,255,0.85)", borderRadius: "2px", cursor: "pointer",
fontFamily: font,
fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
color: WHITE, fontWeight: "bold", textDecoration: "none",
}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={WHITE} strokeWidth="2"
strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
{text}
</a>
{showAlt && (
<div style={{ fontFamily: font, fontSize: "12px", color: "rgba(255,255,255,0.85)", textAlign: "center",
lineHeight: "1.9", maxWidth: "290px" }}>
Email app didn't open? Write to <b>{email}</b> or open in{" "}
<a href={gmail} target="_blank" rel="noopener noreferrer" style={alt}>Gmail</a>
{" · "}
<a href={outlook} target="_blank" rel="noopener noreferrer" style={alt}>Outlook</a>
{" · "}
<button type="button" onClick={copy} style={alt}>{copied ? "Copied ✓" : "Copy address"}</button>
</div>
)}
</div>
);
}
function Flag({ type, size = 22 }) {
const uid = useRef("ukc" + Math.random().toString(36).slice(2, 9)).current;
return (
<span style={{ display: "inline-block", width: size + "px", height: size + "px", borderRadius: "50%",
overflow: "hidden", flexShrink: 0, lineHeight: 0, boxShadow: "0 0 0 1.5px rgba(255,255,255,0.9), 0 1px 4px rgba(0,0,0,0.25)" }}>
{type === "NL" ? (
<svg width={size} height={size} viewBox="0.5 0 2 2" preserveAspectRatio="xMidYMid slice" aria-label="Netherlands flag" role="img">
<rect width="3" height="0.6667" fill="#AE1C28" />
<rect y="0.6667" width="3" height="0.6667" fill="#FFFFFF" />
<rect y="1.3333" width="3" height="0.6667" fill="#21468B" />
</svg>
) : (
<svg width={size} height={size} viewBox="15 0 30 30" preserveAspectRatio="xMidYMid slice" aria-label="United Kingdom flag" role="img">
<clipPath id={uid}><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
<path d="M0,0 v30 h60 v-30 z" fill="#012169" />
<path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
<path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${uid})`} stroke="#C8102E" strokeWidth="4" />
<path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
</svg>
)}
</span>
);
}
function FlagPair({ size = 22 }) {
return (
<span style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
<Flag type="NL" size={size} />
<span style={{ marginLeft: -Math.round(size * 0.28) + "px", display: "inline-flex" }}><Flag type="UK" size={size} /></span>
</span>
);
}
function RegionBadge({ variant = "light", label = "Netherlands & UK", sub, full }) {
const dark = variant === "dark";
const font = "'Futura','Century Gothic',sans-serif";
return (
<div style={{
display: full ? "flex" : "inline-flex", alignItems: "center", gap: "12px", boxSizing: "border-box",
justifyContent: full ? "center" : "flex-start",
padding: sub ? "14px 20px" : "9px 18px 9px 12px",
background: dark ? "rgba(255,255,255,0.06)" : WHITE,
border: dark ? "1px solid rgba(255,255,255,0.12)" : `1px solid ${RULE}`,
borderRadius: "999px", width: full ? "100%" : undefined,
}}>
<FlagPair size={sub ? 28 : 22} />
<div style={{ textAlign: sub ? "left" : undefined }}>
<div style={{ fontFamily: font, fontSize: sub ? "14px" : "11px", fontWeight: "bold",
letterSpacing: sub ? "0.3px" : "1.5px", textTransform: sub ? undefined : "uppercase",
color: sub ? TERRA : (dark ? "rgba(255,255,255,0.85)" : BODY) }}>{label}</div>
{sub && (
<div style={{ fontFamily: font, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase",
color: dark ? "rgba(255,255,255,0.5)" : WARM, marginTop: "3px" }}>{sub}</div>
)}
</div>
</div>
);
}
function Divider() {
return <div style={{ height: "1px", background: RULE, margin: "64px 0" }} />;
}
function SectionLabel({ text }) {
return <div data-fade style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "16px" }}>{text}</div>;
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
<div className="tch-page">
{/* Thin location banner — first thing visible on load */}
<div style={{ position: "relative", width: "100%", height: "clamp(140px, 20vw, 220px)",
overflow: "hidden" }}>
<img src={IMG_BOURNEMOUTH_HUTS_BANNER} alt="Beach huts on the UK coast"
style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
</div>
{/* Hero */}
<div style={{
minHeight: "calc(100vh - 130px - clamp(140px, 20vw, 220px))", background: DARK,
display: "flex", alignItems: "center",
padding: "80px 10% 80px", position: "relative", overflow: "hidden",
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
and maintenance coordination — run by an Airbnb Superhost already managing properties
across the Netherlands & UK.
</p>
<div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
<FormBtn text="Get a Free Property Assessment" setPage={setPage} trackConversion />
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
fontWeight: "bold", color: TERRA }}>66+</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase",
marginTop: "4px" }}>5-Star Reviews, Managed Portfolio</div>
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
<div style={{ marginTop: "12px" }}>
<RegionBadge variant="dark" full label="Netherlands & UK" sub="Where we operate" />
</div>
</div>
</div>
</div>

{/* Services */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: CREAM }}>
<div style={{ maxWidth: "900px", margin: "0 auto" }}>
<SectionLabel text="Property Management" />
<Heading>Everything hosting requires — handled.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
We take over the day-to-day of running a short or long-term rental, so you get the
income without the admin.
</p>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
{[
{ title: "Guest Messaging", desc: "Enquiries and in-stay support, handled promptly day or night.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
{ title: "Pricing & Revenue", desc: "Dynamic pricing that keeps occupancy and revenue optimised.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M3 3v18h18"/><path d="M18 9l-5 5-3-3-5 5"/></svg> },
{ title: "Cleaning & Turnover", desc: "Every arrival spotless and on time, guest after guest.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M20 6L9 17l-5-5"/></svg> },
{ title: "Maintenance", desc: "Repairs organised and followed through before they become complaints.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
].map((item, i) => (
<div key={i} data-reveal style={{ flex: "0 1 380px", padding: "36px 32px", background: WHITE,
borderRadius: "16px", boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
<div style={{ width: "56px", height: "56px", borderRadius: "14px",
background: "rgba(160,120,42,0.1)", display: "flex", alignItems: "center",
justifyContent: "center", marginBottom: "20px" }}>{item.icon}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px",
fontWeight: "bold", color: BODY, marginBottom: "10px", letterSpacing: "0.5px",
textTransform: "uppercase" }}>{item.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.6" }}>{item.desc}</div>
</div>
))}
</div>
<div style={{ marginTop: "40px", textAlign: "center" }}>
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

{/* Values */}
<div style={{ padding: "clamp(56px, 9vw, 112px) clamp(18px, 4vw, 48px)", background: CREAM }}>
<h2 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "clamp(30px, 5.2vw, 58px)",
fontWeight: "bold", color: DARK, textAlign: "center", textTransform: "uppercase",
letterSpacing: "-0.5px", lineHeight: "1.1", margin: "0 0 18px" }}>
The <span style={{ color: TERRA }}>Curated Host</span> Values</h2>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "clamp(15px, 2vw, 19px)",
color: "#6F644E", textAlign: "center", margin: 0 }}>
Why choose The Curated Host? Let us show you.</p>
<div className="tch-values">
{[
{ title: "Guest First", desc: "Every decision is made with the guest experience in mind.",
icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg> },
{ title: "Integrity", desc: "Transparent pricing and honest reporting, always.",
icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg> },
{ title: "Ownership", desc: "We treat every property we manage like our own.",
icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="2"><circle cx="8" cy="8" r="4"/><path d="M10.8 10.8L21 21m-5 0v-4m0 4h4"/></svg> },
{ title: "Attention to Detail", desc: "The small things earn Superhost status — and keep it.",
icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="2"><path d="M12 3l2.2 5.5L20 10l-4.5 3.6L17 19l-5-3.2L7 19l1.5-5.4L4 10l5.8-1.5z"/></svg> },
{ title: "Responsiveness", desc: "Quick, clear communication with owners and guests alike.",
icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
].map((item, i) => (
<div key={i} data-reveal style={{ padding: "44px 38px 46px", background: WHITE, borderRadius: "28px",
boxShadow: "0 4px 28px rgba(26,22,18,0.06)" }}>
<div style={{ width: "68px", height: "68px", borderRadius: "18px", background: "rgba(160,120,42,0.12)",
display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px" }}>{item.icon}</div>
<h3 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "20px", fontWeight: "bold",
color: DARK, margin: "0 0 12px", letterSpacing: "0.3px", textTransform: "uppercase" }}>{item.title}</h3>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15.5px", color: "#6F644E",
lineHeight: "1.7", margin: 0 }}>{item.desc}</p>
</div>
))}
</div>
</div>

{/* CTA */}
<div style={{ position: "relative", background: DARK, textAlign: "center",
padding: "clamp(80px, 13vw, 160px) clamp(20px, 8%, 10%)" }}>
<img src={IMG_BOURNEMOUTH_BEACH} alt="" style={{ position: "absolute", inset: 0, width: "100%",
height: "100%", objectFit: "cover", opacity: 0.4 }} />
<div style={{ position: "absolute", inset: 0,
background: "linear-gradient(180deg, rgba(26,22,18,0.5) 0%, rgba(26,22,18,0.82) 100%)" }} />
<div style={{ position: "relative" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", letterSpacing: "3px",
textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "20px" }}>Let's talk</div>
<h2 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "clamp(28px, 5vw, 56px)",
fontWeight: "bold", color: WHITE, textTransform: "uppercase", letterSpacing: "-0.5px",
lineHeight: "1.1", margin: "0 0 20px" }}>
Ready to hand over <span style={{ color: TERRA }}>the hosting admin?</span></h2>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "clamp(14px, 2vw, 18px)",
color: "rgba(255,255,255,0.75)", margin: "0 auto 40px", maxWidth: "640px", lineHeight: "1.7" }}>
Message on WhatsApp or fill in the contact form to get a free property assessment.</p>
<div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap",
alignItems: "center", flexDirection: "column" }}>
<FormBtn text="Get a Free Property Assessment" setPage={setPage} trackConversion />
<div style={{ display: "flex", gap: "14px", alignItems: "center", flexDirection: "column" }}>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px",
color: "rgba(255,255,255,0.6)" }}>prefer to reach out directly?</span>
<WhatsAppBtn wide />
<EmailBtn wide />
</div>
</div>
</div>
</div>
</div>
);
}
// ── ABOUT PAGE────────────────────────────────────────────────────────────────
function AboutPage({ setPage }) {
const svgFont = "'Futura','Century Gothic',sans-serif";
return (
<div className="tch-page">
<div style={{ padding: "80px 10% 64px", background: DARK }}>
<div style={{ maxWidth: "760px", margin: "0 auto" }}>
<SectionLabel text="About" />
<Heading light>About The Curated Host</Heading>
<p style={{ fontFamily: svgFont, fontSize: "13px", color:
"rgba(255,255,255,0.6)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0" }}>
Property Management &amp; Guest Experience
</p>
<div style={{ marginTop: "24px" }}>
<RegionBadge variant="dark" label="Netherlands & UK" />
</div>
</div>
</div>
{/* Credential cards */}
<div style={{ padding: "clamp(40px, 6vw, 72px) clamp(20px, 8%, 10%)", background: CREAM }}>
<div style={{ maxWidth: "1000px", margin: "0 auto" }}>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
{[
{ title: "Legal Background", desc: "Clear processes and accountability, carried over from a career in legal practice.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M12 3v18M5 8l-3 6a3 3 0 0 0 6 0zM19 8l-3 6a3 3 0 0 0 6 0zM5 8h14M8 8l4-3 4 3"/></svg> },
{ title: "Anglo-Dutch, By Background", desc: "British and Dutch, personally as well as professionally — hence the two markets.",
icon: <FlagPair size={26} /> },
{ title: "Hands-On Standard", desc: "Every property managed the way we manage our own Superhost listing.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg> },
].map((item, i) => (
<div key={i} data-reveal style={{ flex: "0 1 280px", padding: "30px 26px", background: WHITE,
borderRadius: "16px", boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
<div style={{ width: "52px", height: "52px", borderRadius: "13px",
background: "rgba(160,120,42,0.1)", display: "flex", alignItems: "center",
justifyContent: "center", marginBottom: "18px" }}>{item.icon}</div>
<div style={{ fontFamily: svgFont, fontSize: "13.5px",
fontWeight: "bold", color: BODY, marginBottom: "8px", letterSpacing: "0.3px",
textTransform: "uppercase" }}>{item.title}</div>
<div style={{ fontFamily: svgFont, fontSize: "12.5px", color:
WARM, lineHeight: "1.6" }}>{item.desc}</div>
</div>
))}
</div>
</div>
</div>
<div style={{ padding: "clamp(40px, 6vw, 72px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "760px", margin: "0 auto" }}>
<p style={{ fontFamily: svgFont, fontSize: "15px", color:
BODY, lineHeight: "1.9", marginBottom: "24px" }}>
We manage short and long-term rental properties for Airbnb hosts — guest
messaging, pricing and revenue management, cleaning and turnover coordination,
and maintenance coordination.
</p>
<p style={{ fontFamily: svgFont, fontSize: "15px", color:
BODY, lineHeight: "1.9", marginBottom: "24px" }}>
British and Dutch by background, and now running properties across both countries
— which is less a business strategy than a reflection of where home already is on
both sides of the water. Every property we manage, in the Netherlands or the UK, is
run to the same standard as our own Airbnb Superhost listing, including those we
now co-host for clients.
</p>
<p style={{ fontFamily: svgFont, fontSize: "15px", color:
BODY, lineHeight: "1.9", marginBottom: "24px" }}>
Our background is in legal practice — which is where the emphasis on clear
processes, accountability and attention to detail comes from. The guest experience
sits at the centre of it: a well-run property isn't just about occupancy and
returns, it's about how a guest feels the moment they arrive.
</p>
<p style={{ fontFamily: svgFont, fontSize: "15px", color:
BODY, lineHeight: "1.9", marginBottom: "40px" }}>
Every property we manage gets treated the way we treat our own.
</p>
<p style={{ fontFamily: svgFont, fontSize: "12px", color:
WARM, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0" }}>
— Ruben de Bruin, Founder
</p>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "40px" }}>
<button onClick={() => setPage("Property Management")} style={{
padding: "12px 28px", background: TERRA, border: "none", borderRadius: "999px",
cursor: "pointer",
fontFamily: svgFont, fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", color: WHITE,
}}>View Property Management</button>
<button onClick={() => setPage("Contact")} style={{
padding: "12px 28px", background: "transparent", border: `1px solid ${TERRA}`,
borderRadius: "999px", cursor: "pointer",
fontFamily: svgFont, fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", color: TERRA,
}}>Get In Touch</button>
</div>
</div>
</div>
</div>
);
}
function EngagementsPage({ setPage }) {
const upcoming = [
{
title: "The U.S. Midterms and the World: Transatlantic and Global Perspectives on America's Political Future",
org: "UCLA Alumni UK Network × UChicago Booth UK",
role: "Delivering the introductory remarks",
date: "22 Oct 2026",
location: "Institution of Mechanical Engineers, London",
image: "https://uploads.tickettailorassets.com/c_scale,w_800/v1/production/userfiles/rrrfwiudy1ny2jjtjoga.jpg",
url: "https://www.tickettailor.com/events/uclaeurope/2350451",
},
{
title: "Guest Lecture — Privacy, Data & Cyber Security Law",
org: "UCLA School of Law",
role: "Guest speaker",
date: "Pending — Fall Semester",
location: "Virtual",
pending: true,
},
];
const past = [
{
title: "Guest talk", org: "Renaissance Foundation × UCLA", date: "2026", location: "London, UK",
image: IMG_SPEAKING_ACTION,
instagramUrl: "https://www.instagram.com/p/DUX9j3MjoJK/",
},
];
return (
<div className="tch-page">
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
<img src={IMG_ENGAGEMENT_TALK} alt="Ruben de Bruin speaking to a room" style={{
width: "100%", display: "block", borderRadius: "2px", border: `1px solid ${RULE}` }} />
</div>
</div>
</div>
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Past engagements & media" />
<Heading>Recent appearances.</Heading>
<div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "32px", marginBottom: "64px" }}>
{past.map((e, i) => (
<div key={i} data-reveal style={{ padding: "24px 28px", background: CREAM, border: `1px solid ${RULE}`,
borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "space-between",
flexWrap: "wrap", gap: "16px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "20px", minWidth: 0, flexWrap: "wrap" }}>
{e.image && (
<img src={e.image} alt={e.title} style={{ width: "104px", height: "104px",
objectFit: "cover", borderRadius: "2px", flexShrink: 0 }} />
)}
<div style={{ minWidth: 0 }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px",
fontWeight: "bold", color: BODY, marginBottom: "6px" }}>{e.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM, marginBottom: e.instagramUrl ? "14px" : "0" }}>{e.org} · {e.location}</div>
{e.instagramUrl && (
<a href={e.instagramUrl} target="_blank" rel="noopener noreferrer" style={{
display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px",
background: "transparent", border: `1px solid ${TERRA}`, borderRadius: "2px",
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
letterSpacing: "1.5px", textTransform: "uppercase", color: TERRA,
fontWeight: "bold", textDecoration: "none",
}}>
<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="2">
<rect x="2" y="2" width="20" height="20" rx="5" />
<circle cx="12" cy="12" r="4" />
<circle cx="17.5" cy="6.5" r="1" fill={TERRA} stroke="none" />
</svg>
View on Instagram
</a>
)}
</div>
</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px",
color: WARM, fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase" }}>{e.date}</div>
</div>
))}
<div style={{ padding: "24px 28px", background: CREAM, border: `1px solid ${RULE}`,
borderRadius: "2px" }}>
<div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
marginBottom: "18px" }}>
<div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px",
fontWeight: "bold", color: BODY, marginBottom: "6px" }}>Podcast guest, Episode 66</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM }}>Superhosts Down Under with Silvia and Ray · Remote</div>
</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px",
color: WARM, fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase" }}>Sep 2026</div>
</div>
<iframe
style={{ borderRadius: "12px", display: "block" }}
src="https://open.spotify.com/embed/episode/5Gw0oc9KXCDC7KAiPIggAO?utm_source=generator"
width="100%"
height="152"
frameBorder="0"
allowFullScreen
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
loading="lazy"
title="Superhosts Down Under — Episode 66 with Ruben de Bruin"
/>
</div>
</div>
<SectionLabel text="Upcoming" />
<Heading>What's next.</Heading>
<div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "32px" }}>
{upcoming.map((e, i) => {
const CardTag = e.url ? "a" : "div";
const cardProps = e.url ? { href: e.url, target: "_blank", rel: "noopener noreferrer" } : {};
return (
<CardTag key={i} {...cardProps} style={{
padding: "24px 28px", background: SAND, border: `1px solid ${RULE}`,
borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "space-between",
flexWrap: "wrap", gap: "16px", textDecoration: "none" }}>
<div style={{ display: "flex", alignItems: "center", gap: "20px", minWidth: 0, flexWrap: "wrap" }}>
{e.image ? (
<img src={e.image} alt={e.title} style={{ width: "104px", height: "104px",
objectFit: "cover", borderRadius: "2px", flexShrink: 0 }} />
) : (
<div style={{ width: "104px", height: "104px", borderRadius: "2px", flexShrink: 0,
background: DARK, display: "flex", flexDirection: "column", alignItems: "center",
justifyContent: "center", gap: "6px" }}>
<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.5">
<path d="M12 3L2 8l10 5 10-5-10-5z" />
<path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
<path d="M22 8v6" strokeLinecap="round" />
</svg>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "8px",
color: "rgba(255,255,255,0.5)", letterSpacing: "0.5px", textTransform: "uppercase" }}>UCLA Law</span>
</div>
)}
<div style={{ minWidth: 0 }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px",
fontWeight: "bold", color: BODY, marginBottom: "6px", maxWidth: "480px" }}>{e.title}</div>
{e.role && (
<div style={{ display: "inline-block", padding: "3px 10px", background: TERRA,
borderRadius: "2px", marginBottom: "8px" }}>
<span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px",
color: WHITE, letterSpacing: "1px", textTransform: "uppercase", fontWeight: "bold"
}}>{e.role}</span>
</div>
)}
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM, marginBottom: "4px" }}>{e.org}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM }}>{e.location}</div>
</div>
</div>
<div style={e.pending ? {
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
color: TERRA, fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase",
padding: "6px 12px", border: `1px dashed ${TERRA}`, borderRadius: "2px", whiteSpace: "nowrap"
} : {
fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px",
color: TERRA, fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase"
}}>{e.date}</div>
</CardTag>
);
})}
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
const episodes = [
{
title: "Seizing the Digital Revolution and Embracing Adversity",
date: "23 Sep 2026",
description: "A conversation with Bas Wakker, managing partner at Inteleads, on helping sales teams grow with the help of his own sales software, and his broader take on how businesses can put technology to work more effectively.",
episodeId: "19853482",
slug: "seizing-the-digital-revolution-and-embracing-adversity",
},
{
title: "Building Courage Muscles and Effective Time-Management",
date: "23 Sep 2026",
description: "A conversation with Caroline Carter on making travel and culture a lasting priority, and practical approaches to building courage and managing time well.",
episodeId: "19853464",
slug: "building-courage-muscles-and-effective-time-management",
},
{
title: "Building Your Professional Toolkit and Adapting to Dynamic Industries",
date: "23 Sep 2026",
description: "A conversation with Ameer Ibrahim, a Masayoshi Son Fellow on the Schwarzman Scholars Program at Tsinghua University, on building a strong professional toolkit and adapting to fast-changing industries.",
episodeId: "19853457",
slug: "building-your-professional-toolkit-and-adapting-to-dynamic-industries",
},
];
return (
<div className="tch-page">
<div style={{ padding: "80px 10% 64px", background: CREAM, borderBottom: `1px solid ${RULE}` }}>
<div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "40px",
alignItems: "center", flexWrap: "wrap-reverse" }}>
<div style={{ flex: "1 1 380px", minWidth: 0 }}>
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
<div style={{ flex: "0 0 auto" }}>
<img src="https://millennicast.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MjYwNTMyNjQsInB1ciI6ImJsb2JfaWQifX0=--05cfb19fcccdaa8c3b00aa30285ede091c2bdcf4/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZmlsbCI6WzE0MDAsMTQwMCx7ImNyb3AiOiJjZW50cmUifV0sImRlZmF1bHRfdXJsIjoiaHR0cHM6Ly93d3cuYnV6enNwcm91dC5jb20vaW1hZ2VzL2FydHdvcmtzX2xhcmdlLmpwZyIsInNhdmVyIjp7InF1YWxpdHkiOjYwfSwiY29sb3Vyc3BhY2UiOiJzcmdiIn0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--2454c883dcd12a10059f243d8ea753f8b5c1613e/The%20Millennicast%20(1).jpg"
alt="The Millennicast podcast artwork" style={{ width: "220px", height: "220px",
objectFit: "cover", borderRadius: "8px", border: `1px solid ${RULE}`, display: "block" }} />
</div>
</div>
</div>
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "min(700px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Episodes" />
<Heading>Listen now.</Heading>
<div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "32px" }}>
{episodes.map((e, i) => (
<div key={i} data-reveal style={{ padding: "24px 28px", background: CREAM, border: `1px solid ${RULE}`,
borderRadius: "2px" }}>
<div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
marginBottom: "14px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px",
fontWeight: "bold", color: BODY }}>{e.title}</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px",
color: WARM, fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase" }}>{e.date}</div>
</div>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
WARM, lineHeight: "1.8", marginBottom: "18px" }}>{e.description}</p>
<BuzzsproutEmbed episodeId={e.episodeId} slug={e.slug} />
</div>
))}
</div>
</div>
</div>
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: SAND }}>
<div style={{ maxWidth: "min(700px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Listen" />
<Heading>Follow the show</Heading>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
{[
{ name: "Spotify", href: "https://open.spotify.com/show/2kYp8FOpiknhrKKCqzY01v" },
{ name: "Apple Podcasts", href: "https://podcasts.apple.com/gb/podcast/millennicast-where-curious-minds-meet-inspiring-professionals/id1542531436" },
{ name: "Amazon Music", href: "https://music.amazon.com/podcasts/6fe116a9-58b8-4748-83d9-228ae45a23b0" },
{ name: "RSS Feed", href: "https://feeds.buzzsprout.com/1463422.rss" },
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
More episodes coming soon — follow now so you don't miss the next one.
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
const svgFont = "'Futura','Century Gothic',sans-serif";
return (
<div className="tch-page">
{/* Hero */}
<div style={{ padding: "56px 10% 0", background: CREAM }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<SectionLabel text="Property Management" />
<h1 style={{ fontFamily: svgFont, fontSize: "clamp(30px, 4.5vw, 46px)",
fontWeight: "bold", color: BODY, lineHeight: "1.1", margin: "0 0 20px" }}>
More income.<br /><span style={{ color: TERRA }}>Less hassle.</span>
</h1>
<p style={{ fontFamily: svgFont, fontSize: "14px", color:
WARM, lineHeight: "1.8", marginBottom: "28px", maxWidth: "440px" }}>
Boutique short-term rental management for property owners who want more from their
investment and less from their to-do list.
</p>
<div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "18px" }}>
{[
{ stat: "Superhost", label: "Airbnb Status" },
{ stat: "66+", label: "5-Star Reviews" },
].map((s, i) => (
<div key={i} data-fade style={{ display: "flex", alignItems: "center", gap: "10px" }}>
{i > 0 && <div style={{ width: "1px", height: "28px", background: RULE, marginRight: "6px" }} />}
<div>
<div style={{ fontFamily: svgFont, fontSize: "17px",
fontWeight: "bold", color: TERRA }}>{s.stat}</div>
<div style={{ fontFamily: svgFont, fontSize: "10px",
color: WARM, letterSpacing: "0.5px" }}>{s.label}</div>
</div>
</div>
))}
</div>
<div style={{ marginBottom: "32px" }}>
<RegionBadge variant="light" label="Operating in the Netherlands & UK" />
</div>
</div>
</div>
{/* Amsterdam canal scene */}
<div style={{ position: "relative", width: "100%", aspectRatio: isMobileHero ? "16 / 9" : "21 / 9",
overflow: "hidden" }}>
<img src={IMG_AMSTERDAM_CANAL} alt="Amsterdam canal houses at sunset, with boats along the water"
style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
<div style={{ position: "absolute", inset: 0,
background: "linear-gradient(180deg, rgba(26,22,18,0) 55%, rgba(26,22,18,0.55) 100%)" }} />
<div style={{ position: "absolute", top: "24px", right: "24px", maxWidth: "250px",
background: "rgba(26,22,18,0.9)", borderRadius: "16px", padding: "22px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
<FlagPair size={20} />
<span style={{ fontFamily: svgFont, fontSize: "11px",
color: TERRA, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "bold"
}}>Operational Expertise</span>
</div>
<div style={{ fontFamily: svgFont, fontSize: "15px",
color: WHITE, fontWeight: "bold", marginBottom: "8px" }}>Netherlands &amp; UK</div>
<div style={{ fontFamily: svgFont, fontSize: "11px",
color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>Hands-on, in person — not spread thin across a continent.</div>
</div>
</div>
{/* Credibility badge */}
<div style={{ padding: "36px clamp(20px, 8%, 10%) 0", background: SAND, display: "flex",
justifyContent: "center" }}>
<div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: "14px",
padding: "14px 26px", background: WHITE, borderRadius: "999px",
boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
<span style={{ width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
background: "rgba(160,120,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg width="15" height="15" viewBox="0 0 24 24" fill={TERRA}><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9l-6.2 3.4 1.6-6.8L2.2 8.9l6.9-.6L12 2z"/></svg>
</span>
<span style={{ fontFamily: svgFont, fontSize: "13.5px",
color: BODY, fontWeight: "bold" }}>Every property, managed to Superhost standard.</span>
</div>
</div>
{/* Services detail */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: SAND }}>
<div style={{ maxWidth: "1100px", margin: "0 auto" }}>
<SectionLabel text="What we handle" />
<Heading>Four services. Full peace of mind.</Heading>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "40px" }}>
{[
{ title: "Guest Messaging", desc: "Every message answered promptly, day or night.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
{ title: "Pricing & Revenue", desc: "Dynamic pricing that keeps revenue optimised.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M3 3v18h18"/><path d="M18 9l-5 5-3-3-5 5"/></svg> },
{ title: "Cleaning & Turnover", desc: "Every arrival spotless and on time.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M20 6L9 17l-5-5"/></svg> },
{ title: "Maintenance", desc: "Repairs resolved before they become complaints.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
].map((item, i) => (
<div key={i} data-reveal style={{ flex: "0 1 260px", padding: "32px 28px", background: WHITE,
borderRadius: "16px", boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
<div style={{ width: "56px", height: "56px", borderRadius: "14px",
background: "rgba(160,120,42,0.1)", display: "flex", alignItems: "center",
justifyContent: "center", marginBottom: "20px" }}>{item.icon}</div>
<div style={{ fontFamily: svgFont, fontSize: "14px",
fontWeight: "bold", color: BODY, marginBottom: "10px", letterSpacing: "0.5px",
textTransform: "uppercase" }}>{item.title}</div>
<div style={{ fontFamily: svgFont, fontSize: "13px", color:
WARM, lineHeight: "1.6" }}>{item.desc}</div>
</div>
))}
</div>
</div>
</div>
{/* How it works */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: DARK }}>
<div style={{ maxWidth: "1100px", margin: "0 auto" }}>
<SectionLabel text="How it works" />
<Heading light>From first message to first guest.</Heading>
<div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "40px" }}>
{[
{ step: "01", title: "Free Assessment", desc: "We look and tell you honestly what's possible." },
{ step: "02", title: "Agreement", desc: "Clear terms — no hidden fees, no long tie-in." },
{ step: "03", title: "Onboarding", desc: "We take over messaging and pricing — live in days." },
{ step: "04", title: "Monthly Reporting", desc: "A clear summary of performance and revenue." },
].map((s, i) => (
<div key={i} data-reveal style={{ flex: "1 1 220px", padding: "26px 22px", background:
"rgba(255,255,255,0.05)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" }}>
<div style={{ width: "34px", height: "34px", borderRadius: "10px", background: TERRA,
display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px",
fontFamily: svgFont, fontSize: "13px", fontWeight: "bold", color: WHITE }}>{s.step}</div>
<div style={{ fontFamily: svgFont, fontSize: "13.5px",
fontWeight: "bold", color: WHITE, marginBottom: "8px" }}>{s.title}</div>
<div style={{ fontFamily: svgFont, fontSize: "11.5px", color:
"rgba(255,255,255,0.55)", lineHeight: "1.6" }}>{s.desc}</div>
</div>
))}
</div>
</div>
</div>
{/* Where we operate */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: SAND }}>
<div style={{ maxWidth: "1100px", margin: "0 auto" }}>
<SectionLabel text="Where we operate" />
<Heading>Hands-on in the Netherlands &amp; UK, reach across Europe.</Heading>
<p style={{ fontFamily: svgFont, fontSize: "13px", color:
WARM, lineHeight: "1.8", marginBottom: "8px", maxWidth: "640px" }}>
Personal. Responsive. Present.
</p>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "24px" }}>
<div data-reveal style={{ flex: "1 1 280px", padding: "28px", background: WHITE, borderRadius: "16px",
boxShadow: "0 2px 20px rgba(0,0,0,0.05)", border: `2px solid ${TERRA}` }}>
<div style={{ fontFamily: svgFont, fontSize: "10px",
letterSpacing: "2px", textTransform: "uppercase", color: TERRA, fontWeight: "bold",
marginBottom: "10px" }}>Primary — Full-Service</div>
<div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
<FlagPair size={30} />
<div style={{ fontFamily: svgFont, fontSize: "18px",
fontWeight: "bold", color: BODY }}>The Netherlands &amp; UK</div>
</div>
<div style={{ fontFamily: svgFont, fontSize: "13px", color:
WARM, lineHeight: "1.6" }}>Full hands-on management with regular in-person attention.</div>
</div>
<div data-reveal style={{ flex: "1 1 280px", padding: "28px", background: WHITE, borderRadius: "16px",
boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
<div style={{ fontFamily: svgFont, fontSize: "10px",
letterSpacing: "2px", textTransform: "uppercase", color: WARM, fontWeight: "bold",
marginBottom: "10px" }}>Also Available</div>
<div style={{ fontFamily: svgFont, fontSize: "18px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>Europe-wide</div>
<div style={{ fontFamily: svgFont, fontSize: "13px", color:
WARM, lineHeight: "1.6" }}>Messaging and pricing, delivered remotely. Get in touch to discuss your property.</div>
</div>
</div>
</div>
</div>
{/* Pricing */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "1100px", margin: "0 auto" }}>
<SectionLabel text="Pricing" />
<Heading>Simple, performance-aligned pricing.</Heading>
<p style={{ fontFamily: svgFont, fontSize: "14px", color:
WARM, lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
A percentage of your booking revenue — we only do well when your property does well.
</p>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
{[
{
tier: "Essential Co-Hosting", price: "20%", popular: false,
tagline: "Messaging & pricing.",
items: ["Guest messaging & communication", "Pricing & revenue management", "Monthly performance summary"],
},
{
tier: "Full-Service Management", price: "30%", popular: true,
tagline: "Everything, handled.",
items: ["Everything in Essential", "Cleaning & turnover coordination", "Maintenance coordination", "Guest handbook included"],
},
{
tier: "Portfolio", price: "Custom", popular: false,
tagline: "Multiple properties.",
items: ["Everything in Full-Service", "Multi-property dashboard", "Dedicated point of contact"],
},
].map((pkg, i) => (
<div key={i} data-reveal style={{
flex: "1 1 280px", padding: "36px 30px",
background: WHITE, boxShadow: pkg.popular ? "0 8px 34px rgba(160,120,42,0.18)" : "0 2px 20px rgba(0,0,0,0.05)",
border: `1.5px solid ${pkg.popular ? TERRA : RULE}`,
borderRadius: "20px", position: "relative",
}}>
{pkg.popular && (
<div style={{
position: "absolute", top: "-12px", left: "30px",
background: TERRA, color: WHITE, padding: "5px 14px", borderRadius: "999px",
fontFamily: svgFont, fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "bold",
}}>Most Popular</div>
)}
<div style={{ fontFamily: svgFont, fontSize: "10px",
letterSpacing: "2px", textTransform: "uppercase", color: WARM, marginBottom: "10px" }}>{pkg.tier}</div>
<div style={{ fontFamily: svgFont, fontSize: "36px",
fontWeight: "bold", color: TERRA, marginBottom: "4px"
}}>{pkg.price}<span style={{ fontSize: "14px", fontWeight: "normal", color: WARM }}>{pkg.price !== "Custom" ? " of revenue" : ""}</span></div>
<div style={{ fontFamily: svgFont, fontSize: "12px", color:
WARM, marginBottom: "22px", fontStyle: "italic"
}}>{pkg.tagline}</div>
<div style={{ height: "1px", background: RULE, marginBottom: "20px" }} />
{pkg.items.map((item, j) => (
<div key={j} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom:
"14px" }}>
<span style={{ width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0,
background: "rgba(160,120,42,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="3"
strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
</span>
<span style={{ fontFamily: svgFont, fontSize: "12.5px",
color: BODY, lineHeight: "1.5" }}>{item}</span>
</div>
))}
<div style={{ marginTop: "26px" }}>
<button onClick={() => setPage("Contact")} style={{
width: "100%", padding: "13px", cursor: "pointer", borderRadius: "999px",
fontFamily: svgFont, fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "bold",
background: pkg.popular ? TERRA : "transparent",
color: pkg.popular ? WHITE : TERRA, border: `1.5px solid ${TERRA}`,
}}>Get Started</button>
</div>
</div>
))}
</div>
</div>
</div>
{/* Explore our services */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: CREAM }}>
<div style={{ maxWidth: "1100px", margin: "0 auto" }}>
<SectionLabel text="Explore further" />
<Heading>Two more ways we help hosts.</Heading>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "32px" }}>
<div data-reveal style={{ flex: "1 1 300px", padding: "32px 28px", background: WHITE, borderRadius: "16px",
boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
<div style={{ width: "56px", height: "56px", borderRadius: "14px",
background: "rgba(160,120,42,0.1)", display: "flex", alignItems: "center",
justifyContent: "center", marginBottom: "20px" }}>
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M7 7h10M7 11h10M7 15h6"/></svg>
</div>
<div style={{ fontFamily: svgFont, fontSize: "15px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>Guest Handbooks</div>
<div style={{ fontFamily: svgFont, fontSize: "13px", color:
WARM, lineHeight: "1.6", marginBottom: "20px" }}>Our signature printed A5 guide — included with Full-Service.</div>
<button onClick={() => setPage("Guest Handbooks")} style={{
background: "transparent", border: "none", cursor: "pointer", padding: 0,
fontFamily: svgFont, fontSize: "11px",
letterSpacing: "1.5px", textTransform: "uppercase", color: TERRA, fontWeight: "bold",
}}>See a Sample →</button>
</div>
<div data-reveal style={{ flex: "1 1 300px", padding: "32px 28px", background: WHITE, borderRadius: "16px",
boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
<div style={{ width: "56px", height: "56px", borderRadius: "14px",
background: "rgba(160,120,42,0.1)", display: "flex", alignItems: "center",
justifyContent: "center", marginBottom: "20px" }}>
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>
</div>
<div style={{ fontFamily: svgFont, fontSize: "15px",
fontWeight: "bold", color: BODY, marginBottom: "10px" }}>Interior Design &amp; Styling</div>
<div style={{ fontFamily: svgFont, fontSize: "13px", color:
WARM, lineHeight: "1.6", marginBottom: "20px" }}>Increase appeal and rental value, in partnership with an architect.</div>
<button onClick={() => setPage("Interior Design")} style={{
background: "transparent", border: "none", cursor: "pointer", padding: 0,
fontFamily: svgFont, fontSize: "11px",
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
<p style={{ fontFamily: svgFont, fontSize: "14px", color:
"rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: "1.8" }}>
Get a free assessment of your property and a straightforward quote — no obligation.
</p>
<div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap",
alignItems: "center", flexDirection: "column" }}>
<FormBtn text="Get a Free Property Assessment" setPage={setPage} trackConversion />
<div style={{ display: "flex", gap: "14px", alignItems: "center", flexDirection: "column" }}>
<span style={{ fontFamily: svgFont, fontSize: "11px", color:
"rgba(255,255,255,0.5)" }}>prefer to reach out directly?</span>
<WhatsAppBtn wide />
<EmailBtn wide />
</div>
</div>
</div>
</div>
);
}
function IconRow({ icon, text, dark }) {
const svgFont = "'Futura','Century Gothic',sans-serif";
return (
<div data-reveal style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 0",
borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.1)" : RULE}` }}>
<div style={{ width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
background: dark ? "rgba(255,255,255,0.06)" : "rgba(160,120,42,0.1)",
display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
<div style={{ fontFamily: svgFont, fontSize: "14px", color: dark ? WHITE : BODY }}>{text}</div>
</div>
);
}
function GuestHandbooksPage({ setPage }) {
const svgFont = "'Futura','Century Gothic',sans-serif";
const ic = (path, color) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{path}</svg>;
const T = <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9l-6.2 3.4 1.6-6.8L2.2 8.9l6.9-.6L12 2z" />;
return (
<div className="tch-page">
{/* Header */}
<div style={{ padding: "80px 10% 64px", background: DARK }}>
<div style={{ maxWidth: "min(700px, 100%)" }}>
<SectionLabel text="Property Management · Guest Handbooks" />
<Heading light>Your signature guest handbook.</Heading>
<p style={{ fontFamily: svgFont, fontSize: "14px", color:
"rgba(255,255,255,0.6)", lineHeight: "1.8" }}>
Printed, bound and left on the table — not a PDF buried in a booking app.
</p>
</div>
</div>
{/* From the studio */}
<div style={{ padding: "clamp(48px, 8vw, 88px) clamp(20px, 8%, 10%)", background: CREAM }}>
<div style={{ maxWidth: "1100px", margin: "0 auto" }}>
<SectionLabel text="From the studio" />
<Heading>What guests get, what hosts get.</Heading>
<div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginTop: "36px" }}>
{[
{ img: IMG_GH_QUESTIONS, alt: "The questions guests ask, before a handbook answers them" },
{ img: IMG_GH_INCLUDE, alt: "Everything a Curated Host handbook can include" },
{ img: IMG_GH_FOR_HOSTS, alt: "What the handbook means for hosts" },
{ img: IMG_GH_FOR_GUESTS, alt: "What the handbook means for guests" },
].map((item, i) => (
<div key={i} data-reveal style={{ flex: "1 1 320px", borderRadius: "20px", overflow: "hidden",
boxShadow: "0 12px 40px rgba(26,22,18,0.1)" }}>
<img src={item.img} alt={item.alt} style={{ width: "100%", display: "block" }} />
</div>
))}
</div>
</div>
</div>
{/* Printed and bound */}
<div style={{ padding: "clamp(48px, 8vw, 88px) clamp(20px, 8%, 10%)", background: DARK }}>
<div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "56px",
flexWrap: "wrap", alignItems: "center" }}>
<div style={{ flex: "1 1 300px" }}>
<img src={IMG_GH_PRINTED} alt="Printed, bound and ready to leave in the property" data-reveal
style={{ width: "100%", borderRadius: "20px", boxShadow: "0 12px 40px rgba(0,0,0,0.35)", display: "block" }} />
</div>
<div style={{ flex: "1 1 340px" }}>
<SectionLabel text="The physical product" />
<div style={{ marginTop: "24px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
{[
{ label: "Printed & Laminated", desc: "Wipe-clean, built to last." },
{ label: "QR Codes", desc: "Wi-Fi & local maps, scannable." },
{ label: "Multiple Languages", desc: "EN, FR, ES, DE, NL & more." },
].map((f, i) => (
<div key={i} data-reveal style={{ flex: "1 1 160px" }}>
<div style={{ fontFamily: svgFont, fontSize: "12.5px", fontWeight: "bold", color: TERRA,
marginBottom: "4px" }}>{f.label}</div>
<div style={{ fontFamily: svgFont, fontSize: "11.5px", color: "rgba(255,255,255,0.5)",
lineHeight: "1.5" }}>{f.desc}</div>
</div>
))}
</div>
</div>
</div>
</div>
{/* Before & After */}
<div style={{ padding: "clamp(48px, 8vw, 88px) clamp(20px, 8%, 10%)", background: CREAM }}>
<div style={{ maxWidth: "min(1000px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Before & After" />
<Heading>What a difference design makes.</Heading>
<p style={{ fontFamily: svgFont, fontSize: "13px", color:
WARM, lineHeight: "1.7", marginBottom: "32px" }}>
Drag to compare a typical host-written guide with a Curated Host handbook.
</p>
<BeforeAfter />
</div>
</div>
{/* Sample pages grid */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "1100px", margin: "0 auto" }}>
<SectionLabel text="Sample pages" />
<Heading>Inside a Signature handbook.</Heading>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "32px" }}>
{[
{ img: IMG_INTERIOR_QR, caption: "QR codes & tech" },
{ img: IMG_INTERIOR_HEATING, caption: "Appliance instructions" },
{ img: IMG_COVER_CLOSEUP, caption: "Cover page" },
].map((p, i) => (
<div key={i} data-reveal style={{ flex: "1 1 280px", borderRadius: "16px", overflow: "hidden",
boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
<img src={p.img} alt={p.caption} style={{ width: "100%", height: "220px", display: "block",
objectFit: "cover", background: SAND }} />
<div style={{ padding: "16px 18px", background: CREAM }}>
<div style={{ fontFamily: svgFont, fontSize: "13px",
fontWeight: "bold", color: BODY }}>{p.caption}</div>
</div>
</div>
))}
</div>
</div>
</div>
{/* Testimonials */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background:
TERRA }}>
<div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
<SectionLabel text="What hosts say about the handbook" />
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
{[
{ quote: "My guests keep mentioning the handbook in their reviews.", name: "Sarah M.", location: "Brighton, UK" },
{ quote: "Haven't had a midnight heating question since.", name: "James T.", location: "Edinburgh, UK" },
{ quote: "Looks incredible on the kitchen table.", name: "Priya K.", location: "Manchester, UK" },
].map((t, i) => (
<div key={i} data-reveal style={{ flex: "1 1 240px", padding: "26px", background:
WHITE, borderRadius: "16px" }}>
<div style={{ fontFamily: svgFont, fontSize: "13px", color:
BODY, lineHeight: "1.7", marginBottom: "16px", fontStyle: "italic" }}>
"{t.quote}"
</div>
<div style={{ fontFamily: svgFont, fontSize: "11px", color:
WARM, letterSpacing: "0.5px" }}>
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
<p style={{ fontFamily: svgFont, fontSize: "14px", color:
"rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: "1.8" }}>
Order a standalone handbook, or ask about bundling it with Full-Service Management.
</p>
<div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap",
alignItems: "center", flexDirection: "column" }}>
<FormBtn text="Order a Handbook" setPage={setPage} />
<div style={{ display: "flex", gap: "14px", alignItems: "center", flexDirection: "column" }}>
<span style={{ fontFamily: svgFont, fontSize: "11px", color:
"rgba(255,255,255,0.5)" }}>prefer to reach out directly?</span>
<WhatsAppBtn wide />
<EmailBtn wide />
</div>
</div>
</div>
</div>
);
}
function InteriorDesignPage({ setPage }) {
const svgFont = "'Futura','Century Gothic',sans-serif";
return (
<div className="tch-page">
{/* Header */}
<div style={{ padding: "80px 10% 64px", background: DARK }}>
<div style={{ maxWidth: "min(700px, 100%)" }}>
<SectionLabel text="Property Management · Interior Design" />
<Heading light>Interior design &amp; styling.</Heading>
<p style={{ fontFamily: svgFont, fontSize: "14px", color:
"rgba(255,255,255,0.6)", lineHeight: "1.8" }}>
From a small styling refresh to a full layout redesign — in partnership with an
independent architect and his own design practice.
</p>
</div>
</div>
{/* Minimalist by design */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: CREAM }}>
<div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "56px",
flexWrap: "wrap-reverse", alignItems: "center" }}>
<div style={{ flex: "1 1 320px" }}>
<SectionLabel text="Our style" />
<Heading>Minimalist, considered spaces.</Heading>
<p style={{ fontFamily: svgFont, fontSize: "14px", color:
WARM, lineHeight: "1.8", marginTop: "8px" }}>
Clean lines, natural materials and calm proportions — designed to photograph
beautifully and feel just as good to stay in.
</p>
</div>
<div style={{ flex: "1 1 320px", maxWidth: "460px", margin: "0 auto" }}>
<img src={IMG_INTERIOR_DESIGN_HERO} alt="A minimalist, light-filled interior with natural wood and greenery"
data-reveal style={{ width: "100%", borderRadius: "20px",
boxShadow: "0 12px 40px rgba(26,22,18,0.15)", display: "block" }} />
</div>
</div>
</div>
{/* What's offered */}
<div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: SAND }}>
<div style={{ maxWidth: "1100px", margin: "0 auto" }}>
<SectionLabel text="What's offered" />
<Heading>From a refresh to a full redesign.</Heading>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "40px" }}>
{[
{ title: "Styling Refresh", desc: "Furniture and finishing touches that lift how a space presents.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M12 3l2.2 5.5L20 10l-4.5 3.6L17 19l-5-3.2L7 19l1.5-5.4L4 10l5.8-1.5z"/></svg> },
{ title: "Layout Consultation", desc: "A review of flow and functionality, with clear suggestions.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
{ title: "Fuller Design Projects", desc: "For renovations or new properties, scoped individually.",
icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TERRA} strokeWidth="1.8"><path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg> },
].map((item, i) => (
<div key={i} data-reveal style={{ flex: "0 1 300px", padding: "32px 28px", background: WHITE,
borderRadius: "16px", boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
<div style={{ width: "56px", height: "56px", borderRadius: "14px",
background: "rgba(160,120,42,0.1)", display: "flex", alignItems: "center",
justifyContent: "center", marginBottom: "20px" }}>{item.icon}</div>
<div style={{ fontFamily: svgFont, fontSize: "14px",
fontWeight: "bold", color: BODY, marginBottom: "10px", letterSpacing: "0.5px",
textTransform: "uppercase" }}>{item.title}</div>
<div style={{ fontFamily: svgFont, fontSize: "13px", color:
WARM, lineHeight: "1.6" }}>{item.desc}</div>
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
<p style={{ fontFamily: svgFont, fontSize: "14px", color:
WARM, lineHeight: "1.8", maxWidth: "700px" }}>
Available to any host, whether or not you use us for property management. We start
with a conversation, then scope and price the work individually.
</p>
</div>
</div>
{/* CTA */}
<div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background:
DARK, textAlign: "center" }}>
<Heading light center>Thinking about a refresh?</Heading>
<p style={{ fontFamily: svgFont, fontSize: "14px", color:
"rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: "1.8" }}>
Tell us about your property and what you'd like to change — we'll get back to you with
next steps.
</p>
<div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap",
alignItems: "center", flexDirection: "column" }}>
<FormBtn text="Enquire About Design" setPage={setPage} />
<div style={{ display: "flex", gap: "14px", alignItems: "center", flexDirection: "column" }}>
<span style={{ fontFamily: svgFont, fontSize: "11px", color:
"rgba(255,255,255,0.5)" }}>prefer to reach out directly?</span>
<WhatsAppBtn wide />
<EmailBtn wide />
</div>
</div>
</div>
</div>
);
}
function ContactPage() {
return (
<div className="tch-page">
<div style={{ padding: "80px 10% 64px", background: CREAM, borderBottom: `1px solid
${RULE}` }}>
<div style={{ maxWidth: "min(600px, 100%)" }}>
<SectionLabel text="Get In Touch" />
<Heading>Let's talk.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color:
WARM, lineHeight: "1.8" }}>
Whatever you're reaching out about, we'll be in touch within 24 hours. Pick the section
below that matches what you need.
</p>
</div>
</div>
{/* Property Management — primary */}
<div style={{ padding: "clamp(40px, 6vw, 64px) clamp(20px, 8%, 10%)", background: WHITE }}>
<div style={{ maxWidth: "min(860px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Property management enquiries" />
<div style={{ padding: "32px", background: TERRA, borderRadius: "2px",
display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", marginTop: "16px" }}>
<div style={{ flex: 1, minWidth: "220px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px",
fontWeight: "bold", color: WHITE, marginBottom: "8px" }}>Want us to manage your property?</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
"rgba(255,255,255,0.85)", lineHeight: "1.7" }}>Message on WhatsApp or email
hello@thecuratedhost.com for a free property assessment. No form to fill in — just get
in touch directly and we'll take it from there.</div>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
<WhatsAppBtn text="Message on WhatsApp" wide />
<EmailBtn text="Send an email" wide />
</div>
</div>
</div>
</div>
{/* Speaking & Communications */}
<div style={{ padding: "clamp(32px, 5vw, 48px) clamp(20px, 8%, 10%)", background: SAND }}>
<div style={{ maxWidth: "min(860px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Speaking & communications enquiries" />
<div style={{ padding: "24px 32px", background: WHITE, border: `1px solid ${RULE}`,
borderRadius: "2px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap",
marginTop: "16px" }}>
<div style={{ flex: 1, minWidth: "220px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px",
fontWeight: "bold", color: BODY, marginBottom: "6px" }}>Speaking or communications enquiry?</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
WARM, lineHeight: "1.6" }}>Same channels — WhatsApp or hello@thecuratedhost.com works
for these too. No form required here either.</div>
</div>
</div>
</div>
</div>
{/* Guest Handbook orders — fully separate */}
<div style={{ padding: "clamp(48px, 7vw, 80px) clamp(20px, 8%, 10%)", background: DARK }}>
<div style={{ maxWidth: "min(860px, 100%)", margin: "0 auto" }}>
<SectionLabel text="Ordering a guest handbook" />
<Heading light>This form is for handbook orders only.</Heading>
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color:
"rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px", maxWidth: "600px" }}>
If you're after property management, use the section above instead — no need to fill
this in. This questionnaire is only for ordering a standalone signature guest handbook,
and walks through the details we need to design yours.
</p>
<div style={{ background: WHITE, borderRadius: "2px", padding: "8px", overflow: "hidden" }}>
<iframe
src="https://tally.so/embed/b5vkAe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
width="100%"
height="800"
frameBorder="0"
marginHeight="0"
marginWidth="0"
title="Order a Guest Handbook"
style={{ border: "none", minHeight: "600px" }}
/>
</div>
</div>
</div>
</div>
);
}
// ── FOOTER────────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
return (
<footer className="tch-footer" style={{ background: DARK, padding: "64px 10% 32px" }}>
<div style={{ display: "flex", gap: "48px", flexWrap: "wrap", marginBottom: "48px",
paddingBottom: "48px", borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
<div style={{ flex: "1 1 240px" }}>
<Logo light />
<p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color:
"rgba(255,255,255,0.4)", lineHeight: "1.8", marginTop: "16px", maxWidth: "280px" }}>
Property management for Airbnb hosts, built on one belief: how you host people
defines the experience they take away.
</p>
<div style={{ marginTop: "20px" }}>
<RegionBadge variant="dark" label="Netherlands & UK" />
</div>
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
<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
"rgba(255,255,255,0.25)", letterSpacing: "1px" }}>© The Curated Host 2026. All rights
reserved.</div>
<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
"rgba(255,255,255,0.25)", letterSpacing: "1px" }}>The Curated Host Ltd is registered in
England and Wales, company number 17431364.</div>
</div>

<div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color:
"rgba(255,255,255,0.25)", letterSpacing: "1px" }}>Property Management · Speaking · Europe-Wide</div>
</div>
</footer>
);
}
const GLOBAL_CSS = `
.tch-page{padding-top:112px}
.tch-page > div{width:auto !important;margin:0 clamp(10px,2vw,28px) clamp(12px,1.6vw,20px);border-radius:clamp(22px,3vw,40px);overflow:hidden;border-bottom:none !important}
.tch-footer{margin:0 clamp(10px,2vw,28px) clamp(10px,2vw,28px);border-radius:clamp(22px,3vw,40px)}
@media (max-width:900px){.tch-page{padding-top:92px}}
.tch-page [style*="border-radius: 2px"],.tch-footer [style*="border-radius: 2px"]{border-radius:18px !important}
.tch-page button[style*="border-radius: 2px"],.tch-footer button[style*="border-radius: 2px"],.tch-page a[style*="border-radius: 2px"],.tch-footer a[style*="border-radius: 2px"]{border-radius:999px !important}
.tch-values{display:grid;grid-template-columns:repeat(6,1fr);gap:24px;max-width:1180px;margin:56px auto 0}
.tch-values > div{grid-column:span 2}
.tch-values > div:nth-child(4){grid-column:2 / span 2}
.tch-values > div:nth-child(5){grid-column:4 / span 2}
@media (max-width:900px){
.tch-values{grid-template-columns:repeat(2,1fr)}
.tch-values > div,.tch-values > div:nth-child(4){grid-column:auto}
.tch-values > div:nth-child(5){grid-column:1 / -1;justify-self:center;width:calc(50% - 12px)}
}
@media (max-width:600px){
.tch-values{grid-template-columns:1fr}
.tch-values > div:nth-child(5){width:auto}
}
.tch-reveal{opacity:0;translate:0 56px;transition:opacity .5s ease,translate .5s cubic-bezier(.16,.8,.2,1),scale .5s cubic-bezier(.16,.8,.2,1)}
.tch-reveal[data-reveal]{translate:0 72px;scale:.95}
.tch-reveal.tch-in{opacity:1;translate:0 0;scale:1;transition:opacity 1.3s ease var(--rd,0s),translate 1.3s cubic-bezier(.16,.8,.2,1) var(--rd,0s),scale 1.3s cubic-bezier(.16,.8,.2,1) var(--rd,0s)}
@media (prefers-reduced-motion:reduce){.tch-reveal{opacity:1;translate:none;transition:none}}
`;
function useScrollReveal(page) {
useLayoutEffect(() => {
const roots = Array.prototype.slice.call(document.querySelectorAll(".tch-page, .tch-footer"));
if (!roots.length) return;
if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
const SEL = 'h1,h2,h3,h4,p,[data-reveal],[data-fade],[style*="border-radius"]';
const order = new Map();
let counter = 0;
const io = new IntersectionObserver((entries) => {
const entering = [];
entries.forEach(en => {
const el = en.target;
if (en.isIntersecting) {
if (!el.classList.contains("tch-in")) entering.push(el);
} else {
el.classList.remove("tch-in");
el.style.removeProperty("--rd");
}
});
entering.sort((a, b) => (order.get(a) ?? 0) - (order.get(b) ?? 0));
const step = Math.min(0.15, 1.3 / Math.max(entering.length, 1));
entering.forEach((el, k) => {
el.style.setProperty("--rd", (k * step) + "s");
el.classList.add("tch-in");
});
}, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
const tag = () => {
roots.forEach(root => {
root.querySelectorAll(SEL).forEach(el => {
if (order.has(el)) return;
order.set(el, counter++);
el.classList.add("tch-reveal");
io.observe(el);
});
});
};
tag();
const mo = new MutationObserver(tag);
roots.forEach(r => mo.observe(r, { childList: true, subtree: true }));
return () => { io.disconnect(); mo.disconnect(); };
}, [page]);
}
// ── APP───────────────────────────────────────────────────────────────────────
export default function App() {
const [page, setPage] = useState("Home");
useScrollReveal(page);
const changePage = (p) => {
setPage(p);
window.scrollTo({ top: 0, behavior: "smooth" });
};
return (
<div style={{ background: "#E9E1CE", minHeight: "100vh" }}>
<style>{GLOBAL_CSS}</style>
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
