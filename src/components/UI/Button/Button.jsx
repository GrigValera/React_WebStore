import React from "react";

export default function Button({ variant = "primary", onClick, children }) {
  const styles = {
    primary: { backgroundColor: "#2e7d32", color: "#fff", border: "none" },
    secondary: {
      backgroundColor: "#eee",
      color: "#333",
      border: "1px solid #ccc",
    },
  };

  return (
    <button
      style={{
        padding: "6px 12px",
        borderRadius: "4px",
        cursor: "pointer",
        ...styles[variant],
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
