"use client";

import { useState } from "react";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [college, setCollege] = useState("");

  const predictCollege = () => {
    const r = Number(rank);

    if (r <= 1000) {
      setCollege("IIT Hyderabad");
    } else if (r <= 5000) {
      setCollege("IIIT Hyderabad");
    } else if (r <= 10000) {
      setCollege("NIT Warangal");
    } else {
      setCollege("BITS Pilani");
    }
  };

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
        🤖 College Predictor
      </h1>

      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="number"
          placeholder="Enter Your Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        <button
          onClick={predictCollege}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Predict College
        </button>

        {college && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#dcfce7",
              borderRadius: "10px",
            }}
          >
            <h3>Recommended College</h3>
            <p>{college}</p>
          </div>
        )}
      </div>
    </div>
  );
}