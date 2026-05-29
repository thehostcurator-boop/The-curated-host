import { useState, useEffect } from "react";

const TERRA = "#A0782A";
const WARM = "#9C8B6A";
const SAND = "#F5EDD8";
const CREAM = "#FAF7F2";
const BODY = "#2E2E2E";
const RULE = "#D8C898";
const WHITE = "#FFFFFF";
const DARK = "#1A1612";

// ── Mobile hook ──────────────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
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
        <circle cx="200" cy="200" r="140" stroke={c} strokeWidth="2" strokeOpacity="0.3" fill="none" />
        {[0,90,180,270].map(a => (
          <circle key={a} cx={200+140*Math.cos(a*Math.PI/180)} cy={200+140*Math.sin(a*Math.PI/180)} r="6" fill={c} fillOpacity="0.5" />
        ))}
        <rect x="170" y="210" width="60" height="60" fill={c} />
        <ellipse cx="200" cy="210" rx="30" ry="30" fill={c} />
        <circle cx="200" cy="222" r="9" fill={sc} />
        <polygon points="195,229 205,229 203,246 197,246" fill={sc} />
        <line x1="200" y1="158" x2="143" y2="193" stroke={c} strokeWidth="7" strokeLinecap="round"/>
        <line x1="200" y1="158" x2="257" y2="193" stroke={c} strokeWidth="7" strokeLinecap="round"/>
      </svg>
      <div>
        <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px", fontWeight: "bold", color: light ? WHITE : TERRA, letterSpacing: "0.5px" }}>The Curated Host</div>
        <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "9px", color: light ? "rgba(255,255,255,0.6)" : WARM, letterSpacing: "2.5px", textTransform: "uppercase" }}>Guest Handbook Studio</div>
      </div>
    </div>
  );
}

function Nav({ page, setPage }) {
  const links = ["Home", "Services", "Portfolio", "Contact"];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const isHome = page === "Home";
  const bg = (isHome && !scrolled && !menuOpen) ? "transparent" : WHITE;
  const borderColor = (isHome && !scrolled && !menuOpen) ? "transparent" : RULE;
  const light = isHome && !scrolled && !menuOpen;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: bg, borderBottom: `1px solid ${borderColor}`,
        padding: isMobile ? "0 20px" : "0 48px", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <div onClick={() => { setPage("Home"); setMenuOpen(false); }}><Logo light={light} /></div>
        {isMobile ? (
          <button onClick={() => setMenuOpen(o => !o)} style={{
            background: "transparent", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: "5px", padding: "8px",
          }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: "22px", height: "2px", background: light ? WHITE : TERRA, borderRadius: "1px" }} />
            ))}
          </button>
        ) : (
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {links.filter(l => l !== "Contact").map(l => (
              <button key={l} onClick={() => setPage(l)} style={{
                padding: "8px 18px", background: "transparent", border: "none",
                borderRadius: "2px", cursor: "pointer",
                fontFamily: "'Futura','Century Gothic',sans-serif",
                fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
                color: page === l ? TERRA : light ? WHITE : WARM,
                fontWeight: page === l ? "bold" : "normal",
                transition: "color 0.2s",
              }}>{l}</button>
            ))}
            <button onClick={() => setPage("Contact")} style={{
              padding: "10px 20px", background: TERRA, border: "none",
              borderRadius: "2px", cursor: "pointer",
              fontFamily: "'Futura','Century Gothic',sans-serif",
              fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
              color: WHITE, fontWeight: "bold", marginLeft: "8px",
            }}>Start Your Handbook</button>
          </div>
        )}
      </nav>
      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          background: WHITE, borderBottom: `1px solid ${RULE}`,
          padding: "16px 20px", display: "flex", flexDirection: "column", gap: "4px",
        }}>
          {links.map(l => (
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
    <button onClick={() => { if (setPage) { setPage("Contact"); window.scrollTo({ top: 0, behavior: "smooth" }); } }} style={{
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
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {text}
    </a>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: RULE, margin: "64px 0" }} />;
}

function SectionLabel({ text }) {
  return <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>{text}</div>;
}

function Heading({ children, center, light }) {
  return (
    <h2 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "36px", fontWeight: "bold", color: light ? WHITE : TERRA, margin: "0 0 16px", lineHeight: "1.2", textAlign: center ? "center" : "left" }}>
      {children}
    </h2>
  );
}

// ── BEFORE / AFTER COMPONENT ──────────────────────────────────────────────────
function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden", cursor: "col-resize", userSelect: "none", border: `1px solid ${RULE}` }}
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const p = Math.max(10, Math.min(90, ((e.clientX - rect.left) / rect.width) * 100));
        setPos(p);
      }}>
      {/* BEFORE — messy notes style */}
      <div style={{ position: "relative", background: WHITE, padding: "32px", minHeight: "440px" }}>
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
          <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "16px", textAlign: "center" }}>
            WELCOME TO THE PROPERTY!!!! 🏠
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: "bold" }}>WIFI:</span> NetworkName123 password: mypassword2019!! (case sensitive)<br/>
            <span style={{ fontSize: "11px", color: "#888" }}>*if it doesn't work try turning it off and on again</span>
          </div>
          <div style={{ marginBottom: "12px", background: "#ffffcc", padding: "8px", border: "1px solid #ccc" }}>
            ⚠️ IMPORTANT - do not use the red button on the boiler!!<br/>
            The heating is the dial thing on the wall turn it clockwise for hot
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: "bold" }}>Checkout:</span> 10am SHARP please, cleaner comes at 10:30<br/>
            <span style={{ fontWeight: "bold" }}>Bins:</span> just put them outside somewhere<br/>
            <span style={{ fontWeight: "bold" }}>Keys:</span> leave on the side or post through letterbox
          </div>
          <div style={{ marginBottom: "12px", fontFamily: "Comic Sans MS, cursive", fontSize: "12px" }}>
            local stuff - there's a tesco nearby (about 10 min?) and some restaurants on the high st. Can't remember names sorry!! Google it 😅
          </div>
          <div style={{ marginBottom: "8px" }}>
            <span style={{ fontWeight: "bold" }}>TV:</span> the remote is somewhere, the netflix password is in my other email hold on let me find it. Actually just use your own account<br/>
          </div>
          <div style={{ marginBottom: "8px", color: "#c00", fontWeight: "bold" }}>
            IF ANYTHING BREAKS PLEASE LET ME KNOW ASAP!!!!
          </div>
          <div style={{ marginTop: "16px", fontSize: "11px", color: "#999", fontStyle: "italic" }}>
            sent from my iPhone
          </div>
        </div>

        {/* BEFORE label */}
        <div style={{ position: "absolute", top: "16px", left: "16px", background: "#e74c3c", color: WHITE, padding: "4px 12px", fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>Before</div>
      </div>

      {/* AFTER overlay — TCH style */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        clipPath: `inset(0 ${100-pos}% 0 0)`,
        background: CREAM, padding: "32px",
        fontFamily: "'Futura','Century Gothic',sans-serif",
      }}>
        {/* Mini TCH handbook preview */}
        <div style={{ fontSize: "9px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>Welcome</div>
        <div style={{ height: "1px", background: RULE, marginBottom: "12px" }} />
        <div style={{ fontSize: "12px", color: BODY, lineHeight: "1.7", marginBottom: "16px" }}>
          Thank you for staying — I hope the flat feels like a little home from home.
        </div>

        <div style={{ fontSize: "9px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", marginTop: "16px" }}>Wi-Fi</div>
        <div style={{ height: "1px", background: RULE, marginBottom: "12px" }} />
        <div style={{ display: "flex", gap: "16px", marginBottom: "8px" }}>
          <div style={{ fontSize: "11px", fontWeight: "bold", color: BODY, width: "80px" }}>Network</div>
          <div style={{ fontSize: "11px", color: BODY }}>PLUSNET-9FC9R9</div>
        </div>
        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <div style={{ fontSize: "11px", fontWeight: "bold", color: BODY, width: "80px" }}>Password</div>
          <div style={{ fontSize: "11px", color: BODY }}>F4tXPFuhrkNpTQ</div>
        </div>

        <div style={{ fontSize: "9px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", marginTop: "16px" }}>Quiet Hours</div>
        <div style={{ height: "1px", background: RULE, marginBottom: "12px" }} />
        <div style={{ fontSize: "12px", color: BODY, lineHeight: "1.7", marginBottom: "16px" }}>
          Please observe quiet hours between <strong>10pm</strong> and <strong>7am</strong>.
        </div>

        <div style={{ fontSize: "9px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", marginTop: "16px" }}>Getting in Touch</div>
        <div style={{ height: "1px", background: RULE, marginBottom: "12px" }} />
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ fontSize: "11px", fontWeight: "bold", color: BODY, width: "80px" }}>Ruben</div>
          <div style={{ fontSize: "11px", color: BODY }}>07736 503848</div>
        </div>

        {/* AFTER label */}
        <div style={{ position: "absolute", top: "16px", right: "16px", background: TERRA, color: WHITE, padding: "4px 12px", fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>After</div>
      </div>

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
          <span style={{ color: WHITE, fontSize: "14px", letterSpacing: "-2px" }}>◂▸</span>
        </div>
      </div>
    </div>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div style={{
        minHeight: "100vh", background: DARK,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "120px 10% 80px", position: "relative", overflow: "hidden",
      }}>
        {/* Background texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 70% 50%, ${TERRA}18 0%, transparent 60%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: "min(600px, 100%)", position: "relative" }}>
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px" }}>
            Guest Handbook Studio
          </div>
          <h1 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "52px", fontWeight: "bold", color: WHITE, lineHeight: "1.1", margin: "0 0 24px" }}>
            Your property,<br />
            <span style={{ color: TERRA }}>beautifully</span><br />
            presented.
          </h1>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "40px", maxWidth: "440px" }}>
            Professional guest handbooks for short-term rental hosts across Airbnb, Booking.com, Vrbo and beyond. Designed, written and delivered.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <FormBtn text="Start Your Handbook" setPage={setPage} />
            <button onClick={() => setPage("Services")} style={{
              padding: "14px 28px", background: "transparent",
              border: `1px solid rgba(255,255,255,0.3)`, borderRadius: "2px", cursor: "pointer",
              fontFamily: "'Futura','Century Gothic',sans-serif",
              fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}>See Packages</button>
          </div>
          <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>or</span>
            <WhatsAppBtn text="Chat on WhatsApp first" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "40px", left: "10%", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "1px", background: WARM }} />
          <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "9px", color: WARM, letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </div>

      {/* Social proof strip */}
      <div style={{ background: SAND, padding: "20px 10%", display: "flex", gap: "48px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {["A5 print-ready PDF", "Editable Word document", "QR codes included", "3-day turnaround", "Available in multiple languages"].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: TERRA }} />
            <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color: BODY, letterSpacing: "1px" }}>{item}</span>
          </div>
        ))}
      </div>

      {/* What we do */}
      <div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: WHITE }}>
        <div style={{ maxWidth: "min(1100px, 100%)", margin: "0 auto", display: "flex", gap: "80px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 340px" }}>
            <SectionLabel text="What we do" />
            <Heading>Handbooks that impress from the moment guests arrive.</Heading>
            <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8", marginBottom: "24px" }}>
              Most Airbnb manuals are an afterthought — a notes app screenshot, a badly formatted Word doc, or nothing at all. We change that.
            </p>
            <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8", marginBottom: "32px" }}>
              Every handbook we produce is beautifully designed, clearly written, and tailored to your property — printed, laminated and ready to leave on the kitchen table.
            </p>
            <button onClick={() => setPage("Services")} style={{
              padding: "12px 28px", background: TERRA, border: "none", borderRadius: "2px", cursor: "pointer",
              fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
              letterSpacing: "1.5px", textTransform: "uppercase", color: WHITE,
            }}>View Packages</button>
          </div>
          <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { icon: "✦", title: "Bespoke design", desc: "Every handbook is tailored to your property — your name, your rules, your local area." },
              { icon: "◈", title: "Print-ready", desc: "A5 format, laminated and bound. Looks incredible on a kitchen table or bedside." },
              { icon: "◎", title: "QR codes included", desc: "Wi-Fi, how-to videos, local maps — all scannable directly from the page." },
              { icon: "⬡", title: "Fast turnaround", desc: "Most handbooks delivered within 3 working days of your intake form." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", padding: "20px", background: CREAM, borderRadius: "2px" }}>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "20px", color: TERRA, minWidth: "28px", paddingTop: "2px" }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", fontWeight: "bold", color: BODY, marginBottom: "4px" }}>{item.title}</div>
                  <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: WARM, lineHeight: "1.6" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why section — founder story */}
      <div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: DARK }}>
        <div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto", display: "flex", gap: "64px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "0 0 auto", textAlign: "center" }}>
            <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: TERRA, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <svg width="48" height="48" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="155" stroke="rgba(255,255,255,0.8)" strokeWidth="8" fill="none"/>
                <rect x="170" y="210" width="60" height="60" fill="rgba(255,255,255,0.9)"/>
                <ellipse cx="200" cy="210" rx="30" ry="30" fill="rgba(255,255,255,0.9)"/>
                <circle cx="200" cy="222" r="9" fill={TERRA}/>
                <polygon points="195,229 205,229 203,246 197,246" fill={TERRA}/>
                <line x1="200" y1="158" x2="143" y2="193" stroke="rgba(255,255,255,0.9)" strokeWidth="7" strokeLinecap="round"/>
                <line x1="200" y1="158" x2="257" y2="193" stroke="rgba(255,255,255,0.9)" strokeWidth="7" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", fontWeight: "bold", color: WHITE }}>Ruben</div>
            <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>Founder</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>Why we exist</div>
            <h2 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: "bold", color: WHITE, margin: "0 0 20px", lineHeight: "1.3" }}>
              "I was a host myself. I knew there had to be a better way."
            </h2>
            <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.9", marginBottom: "16px" }}>
              As an experienced short-term rental host, I saw first-hand how much the guest experience depends on the moment of arrival — and how poorly most properties handle it. A scrappy notes app message, a badly formatted Word document, or nothing at all.
            </p>
            <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.9", marginBottom: "16px" }}>
              Hosts work hard to create beautiful spaces — but the handbook is an afterthought. I recognised that a well-designed, clearly written guide doesn't just inform guests. It sets the tone, builds trust, reduces late-night messages, and elevates the entire stay.
            </p>
            <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.9" }}>
              The Curated Host exists to give every property — regardless of size or platform — the kind of handbook that used to only exist in boutique hotels.
            </p>
          </div>
        </div>
      </div>

      {/* The Product section */}
      <div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: SAND }}>
        <div style={{ maxWidth: "min(1000px, 100%)", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>What you receive</div>
          <h2 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: "bold", color: TERRA, margin: "0 0 16px" }}>A physical handbook your guests will actually read.</h2>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8", marginBottom: "48px", maxWidth: "620px" }}>
            Not a PDF attachment. Not a link in a message. A beautifully produced, printed and laminated A5 booklet — left on the kitchen table or bedside, ready for your guests the moment they arrive.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[
              {
                icon: "◻",
                title: "A5 Format",
                desc: "Compact, lightweight and easy to handle. A5 sits comfortably on a kitchen counter or bedside table without dominating the space. Small enough to feel personal, large enough to read comfortably."
              },
              {
                icon: "◈",
                title: "Printed & Laminated",
                desc: "Full colour, professionally printed and laminated for durability. Wipe-clean, water-resistant and built to last the entire season — no dog-eared corners or coffee stains."
              },
              {
                icon: "◎",
                title: "Bound & Finished",
                desc: "Spiral or saddle-stitched binding so it lays flat and stays open. Guests can read it easily without it flipping shut — a small detail that makes a real difference."
              },
              {
                icon: "✦",
                title: "QR Codes",
                desc: "Wi-Fi, appliance setup videos, local maps and more — all scannable directly from the page. No typing, no searching, no frustration."
              },
              {
                icon: "⬡",
                title: "Multiple Languages",
                desc: "We produce handbooks in English, French, Spanish, German, Dutch and more. Perfect for properties in international destinations or hosts welcoming guests from across the world."
              },
              {
                icon: "◉",
                title: "Digital Files Included",
                desc: "Every handbook comes with a print-ready A5 PDF and an editable Word document — so you can share it digitally, update it yourself, or reprint at any time."
              },
            ].map((item, i) => (
              <div key={i} style={{ flex: "1 1 280px", padding: "28px", background: WHITE, borderRadius: "2px", border: `1px solid ${RULE}` }}>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "22px", color: TERRA, marginBottom: "12px" }}>{item.icon}</div>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", fontWeight: "bold", color: BODY, marginBottom: "8px" }}>{item.title}</div>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: WARM, lineHeight: "1.7" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Before/After teaser */}
      <div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: CREAM }}>
        <div style={{ maxWidth: "min(800px, 100%)", margin: "0 auto" }}>
          <SectionLabel text="The difference" />
          <Heading>See it for yourself.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8", marginBottom: "40px" }}>
            Drag the slider to see what your guests could be reading instead.
          </p>
          <BeforeAfter />
          <div style={{ textAlign: "center", marginTop: "40px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <FormBtn text="Start Your Handbook" setPage={setPage} />
            <button onClick={() => setPage("Portfolio")} style={{
              padding: "12px 28px", background: "transparent", border: `1px solid ${TERRA}`, borderRadius: "2px", cursor: "pointer",
              fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
              letterSpacing: "1.5px", textTransform: "uppercase", color: TERRA,
            }}>See Portfolio</button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: TERRA }}>
        <div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
          <SectionLabel text="What hosts say" />
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[
              { quote: "My guests keep mentioning the handbook in their reviews. It sets the tone from the moment they walk through the door.", name: "Sarah M.", location: "Brighton, UK" },
              { quote: "I used to dread the 'how does the heating work?' messages at midnight. Haven't had one since.", name: "James T.", location: "Edinburgh, UK" },
              { quote: "Worth every penny. Professional, fast, and the printed version looks incredible on the kitchen table.", name: "Priya K.", location: "Manchester, UK" },
            ].map((t, i) => (
              <div key={i} style={{ flex: "1 1 240px", padding: "28px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", borderTop: `2px solid rgba(255,255,255,0.3)` }}>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color: WHITE, lineHeight: "1.8", marginBottom: "20px", fontStyle: "italic" }}>
                  "{t.quote}"
                </div>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.7)", letterSpacing: "1px" }}>
                  {t.name} · {t.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "clamp(48px, 8vw, 96px) clamp(20px, 8%, 10%)", background: DARK, textAlign: "center" }}>
        <SectionLabel text="Ready to start?" />
        <h2 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "40px", fontWeight: "bold", color: WHITE, margin: "0 0 16px" }}>
          Let's build yours.
        </h2>
        <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "40px" }}>
          Message us on WhatsApp or complete the intake form to get started.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center", flexDirection: "column" }}>
          <FormBtn text="Start Your Handbook — Fill in the Form" setPage={setPage} />
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>prefer to chat first?</span>
            <WhatsAppBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SERVICES PAGE ─────────────────────────────────────────────────────────────
function ServicesPage({ setPage }) {
  return (
    <div style={{ paddingTop: "64px" }}>
      {/* Header */}
      <div style={{ padding: "80px 10% 64px", background: CREAM, borderBottom: `1px solid ${RULE}` }}>
        <div style={{ maxWidth: "min(600px, 100%)" }}>
          <SectionLabel text="Packages" />
          <Heading>Three tiers. Every property is different.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8" }}>
            Whether you're a single-property host or managing a portfolio across Airbnb, Booking.com, Vrbo or any other platform — there's a package built for you. All prices in GBP.
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {[
            {
              tier: "Essential", price: "£89", popular: false,
              tagline: "Clean, professional, done.",
              items: ["Up to 12 standard sections", "A5 print-ready PDF", "Editable Word document", "Host-supplied content", "2 rounds of revisions", "5-day turnaround"],
            },
            {
              tier: "Signature", price: "£175", popular: true,
              tagline: "The full experience.",
              items: ["Unlimited sections", "Custom cover page", "QR codes (Wi-Fi, videos, maps)", "Photos of key appliances", "A5 print-ready PDF", "Editable Word document", "3 rounds of revisions", "3-day turnaround"],
            },
            {
              tier: "Premium", price: "£295", popular: false,
              tagline: "Signature, plus the real thing.",
              items: ["Everything in Signature", "Printed, laminated & bound copy posted", "3 spare printed copies", "Canva editable version", "Unlimited revisions", "Priority 48hr turnaround", "Annual content refresh"],
            },
          ].map((pkg, i) => (
            <div key={i} style={{
              flex: "1 1 260px", padding: "36px 28px",
              background: pkg.popular ? TERRA : WHITE,
              border: `1px solid ${pkg.popular ? TERRA : RULE}`,
              borderRadius: "2px", position: "relative",
            }}>
              {pkg.popular && (
                <div style={{
                  position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)",
                  background: BODY, color: WHITE, padding: "4px 16px",
                  fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase",
                }}>Most Popular</div>
              )}
              <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: pkg.popular ? "rgba(255,255,255,0.7)" : WARM, marginBottom: "8px" }}>{pkg.tier}</div>
              <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "40px", fontWeight: "bold", color: pkg.popular ? WHITE : TERRA, marginBottom: "4px" }}>{pkg.price}</div>
              <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: pkg.popular ? "rgba(255,255,255,0.6)" : WARM, marginBottom: "24px", fontStyle: "italic" }}>{pkg.tagline}</div>
              <div style={{ height: "1px", background: pkg.popular ? "rgba(255,255,255,0.2)" : RULE, marginBottom: "24px" }} />
              {pkg.items.map((item, j) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ color: pkg.popular ? "rgba(255,255,255,0.5)" : TERRA, fontSize: "14px", marginTop: "1px" }}>—</span>
                  <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: pkg.popular ? "rgba(255,255,255,0.9)" : BODY, lineHeight: "1.5" }}>{item}</span>
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

        {/* Founding offer */}
        <div style={{ maxWidth: "1000px", margin: "40px auto 0", padding: "28px 32px", background: SAND, border: `1px solid ${RULE}`, borderRadius: "2px", display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "28px", fontWeight: "bold", color: TERRA }}>£49</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", fontWeight: "bold", color: BODY, marginBottom: "4px" }}>Founding Client Rate — Limited to 5 hosts</div>
            <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: WARM, lineHeight: "1.6" }}>An Essential handbook at a special introductory rate. In exchange we ask for an honest review. Available to the first 5 clients only.</div>
          </div>
          <button onClick={() => setPage("Contact")} style={{
            padding: "12px 24px", background: TERRA, border: "none", borderRadius: "2px", cursor: "pointer",
            fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: WHITE, whiteSpace: "nowrap",
          }}>Claim Offer</button>
        </div>
      </div>

      {/* Add-ons */}
      <div style={{ padding: "clamp(32px, 5vw, 64px) clamp(20px, 8%, 10%)", background: CREAM }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionLabel text="Add-ons" />
          <Heading>Need something extra?</Heading>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "32px" }}>
            {[
              { name: "Extra printed copy", price: "£18" },
              { name: "Canva editable version", price: "£35" },
              { name: "Additional property (same owner)", price: "£65" },
              { name: "Rush 24hr turnaround", price: "£40" },
              { name: "Annual content refresh", price: "£45" },
            ].map((a, i) => (
              <div key={i} style={{ padding: "16px 20px", background: WHITE, border: `1px solid ${RULE}`, borderRadius: "2px", display: "flex", justifyContent: "space-between", alignItems: "center", minWidth: "280px" }}>
                <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color: BODY }}>{a.name}</span>
                <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "16px", fontWeight: "bold", color: TERRA, marginLeft: "24px" }}>{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PORTFOLIO PAGE ────────────────────────────────────────────────────────────
function PortfolioPage({ setPage }) {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ padding: "80px 10% 64px", background: CREAM, borderBottom: `1px solid ${RULE}` }}>
        <div style={{ maxWidth: "min(600px, 100%)" }}>
          <SectionLabel text="Portfolio" />
          <Heading>The work.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8" }}>
            Every handbook is tailored to its property. Here's a selection of what we've produced.
          </p>
        </div>
      </div>

      {/* Before/After full */}
      <div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
        <div style={{ maxWidth: "min(860px, 100%)", margin: "0 auto" }}>
          <SectionLabel text="Before & After" />
          <Heading>What a difference design makes.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8", marginBottom: "40px" }}>
            Drag the slider to compare a typical host-written guide with a Curated Host handbook. Both contain the same information — the difference is entirely in presentation.
          </p>
          <BeforeAfter />
        </div>
      </div>

      {/* Sample handbook pages */}
      <div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: CREAM }}>
        <div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
          <SectionLabel text="Sample pages" />
          <Heading>Inside a Signature handbook.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8", marginBottom: "48px" }}>
            A5 format. Futura throughout. Warm ochre palette. Printed, laminated and bound.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              { section: "Cover Page", desc: "Property name centred on a clean A5 page — the first thing guests see.", icon: "◻" },
              { section: "Welcome", desc: "Personal welcome message, building notes and things to be aware of.", icon: "◈" },
              { section: "Wi-Fi & QR", desc: "Network credentials plus a scannable QR code for instant connection.", icon: "◎" },
              { section: "Heating", desc: "Clear instructions with a photo of the thermostat and arrows to key buttons.", icon: "◉" },
              { section: "Local Recs", desc: "Curated food & drink recommendations organised by area.", icon: "✦" },
              { section: "Departure", desc: "A clean checklist guests can follow before they leave.", icon: "⬡" },
            ].map((p, i) => (
              <div key={i} style={{ padding: "28px", background: WHITE, border: `1px solid ${RULE}`, borderRadius: "2px" }}>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "24px", color: TERRA, marginBottom: "12px" }}>{p.icon}</div>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", fontWeight: "bold", color: BODY, marginBottom: "8px" }}>{p.section}</div>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: WARM, lineHeight: "1.6" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: TERRA, textAlign: "center" }}>
        <Heading light center>Want yours to look like this?</Heading>
        <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "40px", lineHeight: "1.8" }}>
          Fill in the intake form and we'll have a first draft back to you within 3 working days.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center", flexDirection: "column" }}>
          <FormBtn text="Start Your Handbook — Fill in the Form" setPage={setPage} />
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>prefer to chat first?</span>
            <WhatsAppBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── CONTACT PAGE ──────────────────────────────────────────────────────────────
function ContactPage() {
  const [step, setStep] = useState(0);
  const steps = ["Your property", "Check-in", "Wi-Fi & Tech", "Heating", "House Rules", "Local Recs", "Final Details"];

  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ padding: "80px 10% 64px", background: CREAM, borderBottom: `1px solid ${RULE}` }}>
        <div style={{ maxWidth: "min(600px, 100%)" }}>
          <SectionLabel text="Get Started" />
          <Heading>Order your handbook.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8" }}>
            Fill in the form below — it takes around 10 minutes — and we'll be in touch within 24 hours to confirm your order.
          </p>
        </div>
      </div>

      <div style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8%, 10%)", background: WHITE }}>
        <div style={{ maxWidth: "min(860px, 100%)", margin: "0 auto" }}>
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
          {/* WhatsApp secondary */}
          <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: `1px solid ${RULE}`, display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color: WARM }}>Prefer to chat before ordering?</div>
            <WhatsAppBtn text="Message on WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer style={{ background: DARK, padding: "64px 10% 32px" }}>
      <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", marginBottom: "48px", paddingBottom: "48px", borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
        <div style={{ flex: "1 1 240px" }}>
          <Logo light />
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: "1.8", marginTop: "16px", maxWidth: "280px" }}>
            Professional guest handbooks for short-term rental hosts across Airbnb, Booking.com, Vrbo and beyond.
          </p>
        </div>
        <div style={{ flex: "0 1 160px" }}>
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Pages</div>
          {["Home","Services","Portfolio","Contact"].map(l => (
            <div key={l} onClick={() => setPage(l)} style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "10px", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
        <div style={{ flex: "0 1 200px" }}>
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Get Started</div>
          <button onClick={() => {}} style={{
            display: "inline-block", padding: "12px 20px", background: TERRA,
            border: "none", borderRadius: "2px", cursor: "pointer",
            fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
            letterSpacing: "1.5px", textTransform: "uppercase", color: WHITE, fontWeight: "bold",
            marginBottom: "12px", width: "100%", textAlign: "center",
          }}>Start Your Handbook</button>
          <WhatsAppBtn text="WhatsApp" />
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "12px" }}>hello@thecuratedhost.com</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.25)", letterSpacing: "1px" }}>© The Curated Host 2025. All rights reserved.</div>
        <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.25)", letterSpacing: "1px" }}>Guest Handbook Studio · UK & International</div>
      </div>
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("Home");

  const changePage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ background: CREAM, minHeight: "100vh" }}>
      <Nav page={page} setPage={changePage} />
      {page === "Home"      && <HomePage setPage={changePage} />}
      {page === "Services"  && <ServicesPage setPage={changePage} />}
      {page === "Portfolio" && <PortfolioPage setPage={changePage} />}
      {page === "Contact"   && <ContactPage />}
      <Footer setPage={changePage} />
    </div>
  );
}
