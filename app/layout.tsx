import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav
  style={{
    background: "rgba(15,23,42,0.9)",
    backdropFilter: "blur(10px)",
    padding: "18px 40px",
    display: "flex",
    gap: "30px",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
  }}
>
  <Link href="/" style={{ color: "white", fontWeight: "bold" }}>
    Campus Compass AI
  </Link>

  <Link href="/colleges" style={{ color: "white" }}>
    Colleges
  </Link>

  <Link href="/compare" style={{ color: "white" }}>
    Compare
  </Link>

  <Link href="/predictor" style={{ color: "white" }}>
    Predictor
  </Link>

  <Link href="/dashboard" style={{ color: "white" }}>
    Dashboard
  </Link>

  <Link href="/favorites" style={{ color: "white" }}>
    Favorites
  </Link>

  <Link href="/login" style={{ color: "white" }}>
    Login
  </Link>
</nav>

        {children}

        <footer
  style={{
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "20px",
  }}
>
  <h3>Campus Compass AI</h3>
  <p>Helping students choose the right college.</p>
  <p>© 2026 All Rights Reserved</p>
</footer>
      </body>
    </html>
  );
}