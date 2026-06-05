export default function FavoritesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f5f7fb",
      }}
    >
      <h1>⭐ Favorite Colleges</h1>

      <div style={{ marginTop: "20px" }}>
        <div style={{
          background:"white",
          padding:"20px",
          borderRadius:"12px",
          marginBottom:"15px"
        }}>
          IIT Hyderabad
        </div>

        <div style={{
          background:"white",
          padding:"20px",
          borderRadius:"12px",
          marginBottom:"15px"
        }}>
          NIT Warangal
        </div>

        <div style={{
          background:"white",
          padding:"20px",
          borderRadius:"12px"
        }}>
          IIIT Hyderabad
        </div>
      </div>
    </div>
  );
}