import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #2563eb, #7c3aed)",
        color: "white",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          marginTop: "120px",
        }}
      >
        Campus Compass AI
      </h1>

      <p
        style={{
          fontSize: "24px",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        Discover Top Colleges • Compare Institutions • Predict Admissions using
        AI-powered insights.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "60px",
        }}
      >
        <Link href="/colleges">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Colleges
          </button>
        </Link>

        <Link href="/compare">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Compare
          </button>
        </Link>

        <Link href="/predictor">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Predictor
          </button>
        </Link>

        <Link href="/favorites">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Favorites
          </button>
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>🎓 100+ Colleges</h2>
          <p>Explore top engineering colleges across India.</p>
        </div>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>📊 Compare Colleges</h2>
          <p>Compare fees, ratings and placement records.</p>
        </div>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>🤖 Admission Predictor</h2>
          <p>Predict your chances based on rank and score.</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "60px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
          }}
        >
          <h1>100+</h1>
          <p>Colleges Listed</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
          }}
        >
          <h1>50K+</h1>
          <p>Students Guided</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
          }}
        >
          <h1>95%</h1>
          <p>Prediction Accuracy</p>
        </div>
      </div>
    </main>
  );
}