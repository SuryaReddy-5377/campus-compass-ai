export default function ComparePage() {
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
        📊 Compare Colleges
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "12px" }}>College</th>
              <th style={{ padding: "12px" }}>Rating</th>
              <th style={{ padding: "12px" }}>Fees</th>
              <th style={{ padding: "12px" }}>Placement</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px" }}>IIT Hyderabad</td>
              <td style={{ padding: "12px" }}>4.8</td>
              <td style={{ padding: "12px" }}>₹2,50,000</td>
              <td style={{ padding: "12px" }}>95%</td>
            </tr>

            <tr>
              <td style={{ padding: "12px" }}>NIT Warangal</td>
              <td style={{ padding: "12px" }}>4.7</td>
              <td style={{ padding: "12px" }}>₹1,80,000</td>
              <td style={{ padding: "12px" }}>92%</td>
            </tr>

            <tr>
              <td style={{ padding: "12px" }}>IIIT Hyderabad</td>
              <td style={{ padding: "12px" }}>4.9</td>
              <td style={{ padding: "12px" }}>₹3,00,000</td>
              <td style={{ padding: "12px" }}>98%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}