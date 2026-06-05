export default function DashboardPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f5f7fb",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "30px",
        }}
      >
        📊 Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>⭐ Saved Colleges</h2>
          <h1>3</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>📊 Comparisons</h2>
          <h1>5</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>🤖 Predictions</h2>
          <h1>2</h1>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Recent Activity</h2>
        <ul>
          <li>Compared IIT Hyderabad & NIT Warangal</li>
          <li>Predicted College using Rank 4500</li>
          <li>Added IIIT Hyderabad to Favorites</li>
        </ul>
      </div>
    </div>
  );
}