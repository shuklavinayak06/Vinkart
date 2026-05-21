import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-1/2 px-12 relative overflow-hidden"
        style={{ background: "white", borderRight: "1px solid #eee" }}>

        {/* Fashion Silhouettes SVG Background */}
        <svg style={{
          position: "absolute", top: 0, left: 0,
          width: "100%", height: "100%"
        }} viewBox="0 0 600 900" preserveAspectRatio="xMidYMid slice">

          {/* TOP LEFT - small dress */}
          <g opacity="0.09" transform="translate(30, 40) scale(0.6)">
            <path d="M60 0 C60 0 45 8 35 20 L15 60 L38 60 L28 130 L92 130 L82 60 L105 60 L85 20 C75 8 60 0 60 0Z" fill="#111"/>
            <path d="M48 0 C48 0 52 14 60 14 C68 14 72 0 72 0" fill="none" stroke="#111" strokeWidth="3"/>
          </g>

          {/* TOP CENTER - small hanger */}
          <g opacity="0.08" transform="translate(240, 30) scale(0.55)">
            <path d="M60 10 C60 10 60 22 60 26 C45 26 10 48 10 65 L110 65 C110 48 75 26 60 26" fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round"/>
            <path d="M60 10 C60 10 63 10 63 14 C63 18 60 18 60 18" fill="none" stroke="#111" strokeWidth="3"/>
          </g>

          {/* TOP RIGHT - small skirt */}
          <g opacity="0.08" transform="translate(460, 50) scale(0.5)">
            <path d="M50 0 L15 0 L0 90 L100 90 Z" fill="#111"/>
            <rect x="15" y="0" width="70" height="12" rx="2" fill="#111"/>
          </g>

          {/* MIDDLE LEFT - hanger */}
          <g opacity="0.08" transform="translate(25, 350) scale(0.55)">
            <path d="M60 10 C60 10 60 22 60 26 C45 26 10 48 10 65 L110 65 C110 48 75 26 60 26" fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round"/>
            <path d="M60 10 C60 10 63 10 63 14 C63 18 60 18 60 18" fill="none" stroke="#111" strokeWidth="3"/>
          </g>

          {/* MIDDLE RIGHT - shopping bag */}
          <g opacity="0.08" transform="translate(440, 320) scale(0.55)">
            <rect x="5" y="35" width="90" height="90" rx="4" fill="#111"/>
            <path d="M22 35 C22 35 22 18 50 18 C78 18 78 35 78 35" fill="none" stroke="#111" strokeWidth="5"/>
            <line x1="35" y1="60" x2="65" y2="60" stroke="white" strokeWidth="3"/>
          </g>

          {/* MIDDLE CENTER - blazer */}
          <g opacity="0.06" transform="translate(80, 480) scale(0.5)">
            <path d="M80 0 L60 10 L40 0 L10 30 L20 50 L40 40 L40 120 L120 120 L120 40 L140 50 L150 30 L120 0 L100 10 Z" fill="#111"/>
            <path d="M60 10 L80 30 L80 120" fill="none" stroke="#111" strokeWidth="2"/>
            <path d="M100 10 L80 30" fill="none" stroke="#111" strokeWidth="2"/>
          </g>

          {/* BOTTOM LEFT - t-shirt */}
          <g opacity="0.08" transform="translate(20, 680) scale(0.55)">
            <path d="M40 0 L0 30 L20 40 L20 110 L100 110 L100 40 L120 30 L80 0 L65 20 C60 25 60 25 60 25 C60 25 60 25 55 20 Z" fill="#111"/>
          </g>

          {/* BOTTOM CENTER - handbag */}
          <g opacity="0.08" transform="translate(220, 720) scale(0.55)">
            <rect x="10" y="30" width="100" height="75" rx="8" fill="#111"/>
            <path d="M28 30 C28 30 28 12 60 12 C92 12 92 30 92 30" fill="none" stroke="#111" strokeWidth="4.5"/>
            <rect x="43" y="55" width="34" height="20" rx="3" fill="none" stroke="white" strokeWidth="2.5"/>
          </g>

          {/* BOTTOM RIGHT - dress */}
          <g opacity="0.08" transform="translate(430, 660) scale(0.55)">
            <path d="M60 0 C60 0 45 8 35 20 L15 60 L38 60 L28 130 L92 130 L82 60 L105 60 L85 20 C75 8 60 0 60 0Z" fill="#111"/>
            <path d="M48 0 C48 0 52 14 60 14 C68 14 72 0 72 0" fill="none" stroke="#111" strokeWidth="3"/>
          </g>

          {/* CENTER - coat */}
          <g opacity="0.05" transform="translate(180, 280) scale(0.45)">
            <path d="M80 0 L55 15 L30 0 L5 35 L20 55 L40 45 L40 160 L120 160 L120 45 L140 55 L155 35 L130 0 L105 15 Z" fill="#111"/>
            <line x1="80" y1="15" x2="80" y2="160" stroke="#111" strokeWidth="2.5"/>
            <path d="M60 80 L100 80" stroke="#111" strokeWidth="2"/>
            <path d="M60 100 L100 100" stroke="#111" strokeWidth="2"/>
          </g>

          {/* Sparkle stars */}
          <g opacity="0.1">
            <polygon points="530,200 533,210 543,210 535,216 538,226 530,220 522,226 525,216 517,210 527,210" fill="#111"/>
            <polygon points="70,600 73,608 81,608 75,613 77,621 70,616 63,621 65,613 59,608 67,608" fill="#111"/>
            <polygon points="370,780 372,787 379,787 374,791 376,798 370,794 364,798 366,791 361,787 368,787" fill="#111"/>
            <polygon points="160,160 162,167 169,167 164,171 166,178 160,174 154,178 156,171 151,167 158,167" fill="#111"/>
            <polygon points="490,520 492,527 499,527 494,531 496,538 490,534 484,538 486,531 481,527 488,527" fill="#111"/>
          </g>

          {/* Decorative circles */}
          <circle cx="300" cy="450" r="200" fill="none" stroke="#111" strokeWidth="0.5" opacity="0.04"/>
          <circle cx="300" cy="450" r="260" fill="none" stroke="#111" strokeWidth="0.4" opacity="0.03"/>
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-md space-y-8 text-center">

          {/* Vinkart Hanger Logo */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", margin: "0 auto"
          }}>
            <svg width="180" height="100" viewBox="0 0 160 90"
              fill="none" stroke="#111" strokeWidth="3.5"
              strokeLinecap="round" strokeLinejoin="round">
              {/* Hook at top */}
              <path d="M80 5 C80 5 88 5 88 13 C88 20 80 22 80 22"/>
              {/* Left arm */}
              <path d="M80 22 L10 62"/>
              {/* Right arm */}
              <path d="M80 22 L150 62"/>
              {/* Bottom left corner */}
              <path d="M10 62 C10 62 5 62 5 70 C5 78 12 78 12 78 L50 78"/>
              {/* Bottom right corner */}
              <path d="M150 62 C150 62 155 62 155 70 C155 78 148 78 148 78 L110 78"/>
              {/* Vinkart text inside hanger */}
              <text x="80" y="75" textAnchor="middle"
                fontFamily="cursive" fontSize="18"
                fill="#111" stroke="none" fontWeight="500">
                Vinkart
              </text>
            </svg>
          </div>

          {/* Brand text */}
          <div>
            <p style={{
              fontSize: "0.65rem", letterSpacing: "0.4em",
              color: "#aaa", marginBottom: "0.5rem",
              textTransform: "uppercase"
            }}>
              Welcome to
            </p>
            <h1 style={{
              fontSize: "3.2rem", fontWeight: "800", color: "#111",
              letterSpacing: "0.15em", textTransform: "uppercase",
              lineHeight: "1"
            }}>
              Vinkart
            </h1>
            <div style={{
              width: "40px", height: "2px",
              background: "#111", margin: "1rem auto"
            }} />
            <p style={{
              fontSize: "0.7rem", letterSpacing: "0.2em",
              color: "#999", textTransform: "uppercase"
            }}>
              Premium Fashion Store
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", justifyContent: "center",
            border: "1px solid #e5e5e5",
            background: "rgba(255,255,255,0.95)"
          }}>
            {[["500+", "Products"], ["10k+", "Customers"], ["4.9★", "Rating"]].map(([num, label], i) => (
              <div key={label} style={{
                flex: 1, padding: "1rem 0.5rem", textAlign: "center",
                borderRight: i < 2 ? "1px solid #e5e5e5" : "none"
              }}>
                <div style={{
                  color: "#111", fontWeight: "700",
                  fontSize: "1.1rem", letterSpacing: "0.05em"
                }}>{num}</div>
                <div style={{
                  color: "#999", fontSize: "0.65rem",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  marginTop: "2px"
                }}>{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;