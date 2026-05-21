import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import { useNavigate } from "react-router-dom";

function VinkartLogo() {
  return (
    <svg width="100" height="36" viewBox="0 0 160 90"
      fill="none" stroke="#111" strokeWidth="3.5"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M80 5 C80 5 88 5 88 13 C88 20 80 22 80 22"/>
      <path d="M80 22 L10 62"/>
      <path d="M80 22 L150 62"/>
      <path d="M10 62 C10 62 5 62 5 70 C5 78 12 78 12 78 L50 78"/>
      <path d="M150 62 C150 62 155 62 155 70 C155 78 148 78 148 78 L110 78"/>
      <text x="80" y="75" textAnchor="middle"
        fontFamily="cursive" fontSize="18"
        fill="#111" stroke="none" fontWeight="500">
        Vinkart
      </text>
    </svg>
  );
}

function ShoppingFooter() {
  const navigate = useNavigate();

  return (
    <footer style={{ background: "#f8f8f8", borderTop: "1px solid #eee" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem 2rem" }}>

        {/* Top section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "2rem",
          marginBottom: "2.5rem"
        }}>

          {/* Brand column */}
          <div>
            <VinkartLogo />
            <p style={{
              fontSize: "0.85rem", color: "#888",
              lineHeight: "1.7", margin: "1rem 0",
              maxWidth: "260px"
            }}>
              Premium fashion store offering the latest trends at unbeatable prices. Shop with confidence.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>

              {/* Instagram */}
              <a href="https://www.instagram.com/shukla_vinayak_06/?hl=en"
                target="_blank" rel="noreferrer"
                style={{
                  width: "34px", height: "34px", background: "#111",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", cursor: "pointer"
                }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61550232698300"
                target="_blank" rel="noreferrer"
                style={{
                  width: "34px", height: "34px", background: "#111",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", cursor: "pointer"
                }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCV19aJQeLfOWHrjeHdigy8Q"
                target="_blank" rel="noreferrer"
                style={{
                  width: "34px", height: "34px", background: "#111",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", cursor: "pointer"
                }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Shop column */}
          <div>
            <p style={{
              fontSize: "0.7rem", fontWeight: "700",
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#111", marginBottom: "1rem"
            }}>
              Shop
            </p>
            {["Men", "Women", "Kids", "Footwear", "Accessories"].map((item) => (
              <p key={item}
                onClick={() => navigate("/shop/listing")}
                style={{
                  fontSize: "0.85rem", color: "#888",
                  margin: "0.5rem 0", cursor: "pointer"
                }}
                onMouseEnter={e => e.target.style.color = "#111"}
                onMouseLeave={e => e.target.style.color = "#888"}
              >
                {item}
              </p>
            ))}
          </div>

          {/* Help column */}
          <div>
            <p style={{
              fontSize: "0.7rem", fontWeight: "700",
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#111", marginBottom: "1rem"
            }}>
              Help
            </p>
            {["FAQ", "Shipping Info", "Returns", "Order Tracking", "Contact Us"].map((item) => (
              <p key={item} style={{
                fontSize: "0.85rem", color: "#888",
                margin: "0.5rem 0", cursor: "pointer"
              }}
                onMouseEnter={e => e.target.style.color = "#111"}
                onMouseLeave={e => e.target.style.color = "#888"}
              >
                {item}
              </p>
            ))}
          </div>

          {/* Newsletter column */}
          <div>
            <p style={{
              fontSize: "0.7rem", fontWeight: "700",
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#111", marginBottom: "1rem"
            }}>
              Newsletter
            </p>
            <p style={{
              fontSize: "0.85rem", color: "#888",
              marginBottom: "1rem", lineHeight: "1.6"
            }}>
              Subscribe to get exclusive deals and latest fashion updates.
            </p>
            <div style={{ display: "flex", gap: "6px" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1, height: "38px",
                  padding: "0 12px", fontSize: "0.8rem",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px", background: "white",
                  outline: "none", color: "#111"
                }}
              />
              <button style={{
                height: "38px", padding: "0 14px",
                background: "#111", color: "white",
                border: "none", borderRadius: "4px",
                fontSize: "0.8rem", cursor: "pointer",
                fontWeight: "600", letterSpacing: "0.05em"
              }}>
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid #e5e5e5",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem"
        }}>
          <p style={{ fontSize: "0.8rem", color: "#bbb", margin: 0 }}>
            © 2026 Vinkart. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <p key={item} style={{
                fontSize: "0.8rem", color: "#bbb",
                margin: 0, cursor: "pointer"
              }}
                onMouseEnter={e => e.target.style.color = "#111"}
                onMouseLeave={e => e.target.style.color = "#bbb"}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <ShoppingFooter />
    </div>
  );
}

export default ShoppingLayout;