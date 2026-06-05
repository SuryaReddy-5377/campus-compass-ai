"use client";

export default function CollegesPage() {
  const colleges = [
    {
      id: 1,
      name: "IIT Hyderabad",
      location: "Hyderabad",
      rating: 4.8,
      fees: "₹2,50,000",
      placement: "95%",
    },
    {
      id: 2,
      name: "NIT Warangal",
      location: "Warangal",
      rating: 4.7,
      fees: "₹1,80,000",
      placement: "92%",
    },
    {
      id: 3,
      name: "IIIT Hyderabad",
      location: "Hyderabad",
      rating: 4.9,
      fees: "₹3,00,000",
      placement: "98%",
    },
    {
      id: 4,
      name: "IIT Delhi",
      location: "Delhi",
      rating: 4.9,
      fees: "₹2,40,000",
      placement: "97%",
    },
    {
      id: 5,
      name: "IIT Bombay",
      location: "Mumbai",
      rating: 4.9,
      fees: "₹2,45,000",
      placement: "98%",
    },
    {
      id: 6,
      name: "IIT Madras",
      location: "Chennai",
      rating: 4.8,
      fees: "₹2,30,000",
      placement: "96%",
    },
  ];

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
        🎓 Top Engineering Colleges
      </h1>

      <input
        type="text"
        placeholder="Search colleges..."
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "30px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        {colleges.map((college) => (
          <div
            key={college.id}
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{college.name}</h2>

            <p>📍 {college.location}</p>
            <p>⭐ Rating: {college.rating}</p>
            <p>💰 Fees: {college.fees}</p>
            <p>📈 Placement: {college.placement}</p>

            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}