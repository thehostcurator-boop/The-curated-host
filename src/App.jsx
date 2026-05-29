import { useState, useEffect } from "react";

const TERRA = "#A0782A";
const WARM = "#9C8B6A";
const SAND = "#F5EDD8";
const CREAM = "#FAF7F2";
const BODY = "#2E2E2E";
const RULE = "#D8C898";
const WHITE = "#FFFFFF";
const DARK = "#1A1612";

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

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const isHome = page === "Home";
  const bg = isHome && !scrolled ? "transparent" : WHITE;
  const borderColor = isHome && !scrolled ? "transparent" : RULE;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: bg, borderBottom: `1px solid ${borderColor}`,
      padding: "0 48px", height: "64px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "background 0.3s, border-color 0.3s",
    }}>
      <div onClick={() => setPage("Home")}><Logo light={isHome && !scrolled} /></div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {links.map(l => (
          <button key={l} onClick={() => setPage(l)} style={{
            padding: "8px 18px", background: "transparent",
            border: l === "Contact" ? `1px solid ${isHome && !scrolled ? WHITE : TERRA}` : "none",
            borderRadius: "2px", cursor: "pointer",
            fontFamily: "'Futura','Century Gothic',sans-serif",
            fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
            color: page === l ? TERRA : isHome && !scrolled ? WHITE : l === "Contact" ? TERRA : WARM,
            fontWeight: page === l ? "bold" : "normal",
            transition: "color 0.2s",
          }}>{l}</button>
        ))}
      </div>
    </nav>
  );
}

function WhatsAppBtn({ text = "Get Started on WhatsApp" }) {
  return (
    <a href="https://wa.me/447736503848" target="_blank" rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: "10px",
        padding: "14px 28px", background: "#25D366",
        border: "none", borderRadius: "2px", cursor: "pointer",
        fontFamily: "'Futura','Century Gothic',sans-serif",
        fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
        color: WHITE, fontWeight: "bold", textDecoration: "none",
      }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
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

        <div style={{ maxWidth: "600px", position: "relative" }}>
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px" }}>
            Guest Handbook Studio
          </div>
          <h1 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "52px", fontWeight: "bold", color: WHITE, lineHeight: "1.1", margin: "0 0 24px" }}>
            Your property,<br />
            <span style={{ color: TERRA }}>beautifully</span><br />
            presented.
          </h1>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "40px", maxWidth: "440px" }}>
            Professional guest handbooks for Airbnb hosts who care about the guest experience. Designed, written and delivered.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <WhatsAppBtn />
            <button onClick={() => setPage("Services")} style={{
              padding: "14px 28px", background: "transparent",
              border: `1px solid rgba(255,255,255,0.3)`, borderRadius: "2px", cursor: "pointer",
              fontFamily: "'Futura','Century Gothic',sans-serif",
              fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}>See Packages</button>
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
        {["A5 print-ready PDF", "Editable Word document", "QR codes included", "3-day turnaround", "UK & international"].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: TERRA }} />
            <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", color: BODY, letterSpacing: "1px" }}>{item}</span>
          </div>
        ))}
      </div>

      {/* What we do */}
      <div style={{ padding: "96px 10%", background: WHITE }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "80px", alignItems: "center", flexWrap: "wrap" }}>
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

      {/* Before/After teaser */}
      <div style={{ padding: "96px 10%", background: CREAM }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionLabel text="The difference" />
          <Heading>See it for yourself.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8", marginBottom: "40px" }}>
            Drag the slider to see what your guests could be reading instead.
          </p>
          <BeforeAfter />
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button onClick={() => setPage("Portfolio")} style={{
              padding: "12px 28px", background: "transparent", border: `1px solid ${TERRA}`, borderRadius: "2px", cursor: "pointer",
              fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
              letterSpacing: "1.5px", textTransform: "uppercase", color: TERRA,
            }}>See the Full Portfolio</button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ padding: "96px 10%", background: TERRA }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionLabel text="What hosts say" />
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[
              { quote: "My guests keep mentioning the handbook in their reviews. It sets the tone from the moment they arrive.", name: "Sarah M.", location: "Brighton, UK" },
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
      <div style={{ padding: "96px 10%", background: DARK, textAlign: "center" }}>
        <SectionLabel text="Ready to start?" />
        <h2 style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "40px", fontWeight: "bold", color: WHITE, margin: "0 0 16px" }}>
          Let's build yours.
        </h2>
        <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "40px" }}>
          Message us on WhatsApp or complete the intake form to get started.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <WhatsAppBtn />
          <button onClick={() => setPage("Contact")} style={{
            padding: "14px 28px", background: "transparent",
            border: `1px solid rgba(255,255,255,0.3)`, borderRadius: "2px", cursor: "pointer",
            fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
            letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
          }}>Intake Form</button>
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
        <div style={{ maxWidth: "600px" }}>
          <SectionLabel text="Packages" />
          <Heading>Three tiers. Every property is different.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8" }}>
            Whether you're a single-property host or managing a portfolio, there's a package built for you. All prices in GBP.
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div style={{ padding: "80px 10%", background: WHITE }}>
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
      <div style={{ padding: "64px 10%", background: CREAM }}>
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
        <div style={{ maxWidth: "600px" }}>
          <SectionLabel text="Portfolio" />
          <Heading>The work.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8" }}>
            Every handbook is tailored to its property. Here's a selection of what we've produced.
          </p>
        </div>
      </div>

      {/* Before/After full */}
      <div style={{ padding: "80px 10%", background: WHITE }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <SectionLabel text="Before & After" />
          <Heading>What a difference design makes.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8", marginBottom: "40px" }}>
            Drag the slider to compare a typical host-written guide with a Curated Host handbook. Both contain the same information — the difference is entirely in presentation.
          </p>
          <BeforeAfter />
        </div>
      </div>

      {/* Sample handbook pages */}
      <div style={{ padding: "80px 10%", background: CREAM }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
      <div style={{ padding: "80px 10%", background: TERRA, textAlign: "center" }}>
        <Heading light center>Want yours to look like this?</Heading>
        <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "40px", lineHeight: "1.8" }}>
          Fill in the intake form and we'll have a first draft back to you within 3 working days.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <WhatsAppBtn />
          <button onClick={() => setPage("Contact")} style={{
            padding: "14px 28px", background: "transparent",
            border: `1px solid rgba(255,255,255,0.5)`, borderRadius: "2px", cursor: "pointer",
            fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px",
            letterSpacing: "1.5px", textTransform: "uppercase", color: WHITE,
          }}>Start Your Handbook</button>
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
        <div style={{ maxWidth: "600px" }}>
          <SectionLabel text="Get Started" />
          <Heading>Order your handbook.</Heading>
          <p style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", color: WARM, lineHeight: "1.8" }}>
            Fill in the form below — it takes around 10 minutes — and we'll be in touch within 24 hours to confirm your order.
          </p>
        </div>
      </div>

      <div style={{ padding: "80px 10%", background: WHITE }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", gap: "60px", flexWrap: "wrap" }}>

          {/* Form preview */}
          <div style={{ flex: "1 1 380px" }}>
            {/* Progress */}
            <div style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "1px", textTransform: "uppercase" }}>Section {step + 1} of {steps.length}</span>
                <span style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: TERRA }}>{Math.round(((step+1)/steps.length)*100)}%</span>
              </div>
              <div style={{ height: "2px", background: SAND }}>
                <div style={{ height: "100%", width: `${((step+1)/steps.length)*100}%`, background: TERRA, transition: "width 0.3s" }} />
              </div>
            </div>

            <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
              {steps[step]}
            </div>
            <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "22px", fontWeight: "bold", color: TERRA, marginBottom: "32px" }}>
              {["Tell us about the listing", "Arrival & departure", "Connectivity & entertainment", "Keeping guests comfortable", "What guests need to respect", "Your local knowledge", "Almost there"][step]}
            </div>

            {/* Sample fields per step */}
            {step === 0 && (
              <>
                {["Property name *", "Full address *", "Host name *", "WhatsApp / phone *", "Which package? *"].map((l, i) => (
                  <div key={i} style={{ marginBottom: "20px" }}>
                    <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", fontWeight: "bold", color: BODY, marginBottom: "6px" }}>{l}</div>
                    <div style={{ height: "40px", background: CREAM, border: `1px solid ${RULE}`, borderRadius: "2px" }} />
                  </div>
                ))}
              </>
            )}
            {step !== 0 && (
              <div style={{ padding: "40px", background: CREAM, border: `1px solid ${RULE}`, borderRadius: "2px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "13px", color: WARM }}>
                  This section covers {steps[step].toLowerCase()} details.<br />The full interactive form is ready to use.
                </div>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
              {step > 0 ? (
                <button onClick={() => setStep(s => s-1)} style={{ padding: "12px 24px", background: "transparent", border: `1px solid ${RULE}`, borderRadius: "2px", cursor: "pointer", fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: WARM }}>← Back</button>
              ) : <div />}
              <button onClick={() => step < steps.length-1 ? setStep(s => s+1) : null} style={{ padding: "12px 28px", background: TERRA, border: "none", borderRadius: "2px", cursor: "pointer", fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: WHITE, fontWeight: "bold" }}>
                {step === steps.length - 1 ? "Submit →" : "Continue →"}
              </button>
            </div>
          </div>

          {/* Contact info sidebar */}
          <div style={{ flex: "0 1 220px" }}>
            <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Or reach us directly</div>
            <WhatsAppBtn text="Message on WhatsApp" />
            <div style={{ marginTop: "40px" }}>
              <div style={{ height: "1px", background: RULE, marginBottom: "24px" }} />
              <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>What happens next</div>
              {["We confirm receipt within 24 hours", "First draft delivered in 3 days", "Revisions until you're happy", "Final files delivered by email", "Printed copy posted (Premium)"].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "12px", alignItems: "flex-start" }}>
                  <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "14px", fontWeight: "bold", color: RULE, minWidth: "20px" }}>0{i+1}</div>
                  <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: WARM, lineHeight: "1.5" }}>{s}</div>
                </div>
              ))}
            </div>
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
            Professional guest handbooks for Airbnb hosts who care about the guest experience.
          </p>
        </div>
        <div style={{ flex: "0 1 160px" }}>
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Pages</div>
          {["Home","Services","Portfolio","Contact"].map(l => (
            <div key={l} onClick={() => setPage(l)} style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "10px", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
        <div style={{ flex: "0 1 200px" }}>
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "10px", color: WARM, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Get in Touch</div>
          <WhatsAppBtn text="WhatsApp" />
          <div style={{ fontFamily: "'Futura','Century Gothic',sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "12px" }}>thecuratedhost.com</div>
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
      <Footer setP
        </div>
  );
}
  );
}

  );
}

  );
}


