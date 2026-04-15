import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponseMsg("");

fetch("http://localhost:8080/cv-api/process.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Server error: " + res.status);
        return res.json();
      })
      .then((data) => {
        if (data.message) {
          alert(data.message);
          setResponseMsg(data.message);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setError("Unexpected error occurred.");
        }
      })
      .catch((err) => {
        setError("Failed to connect to server. Is XAMPP running? " + err.message);
      })
      .finally(() => setLoading(false));
  }

  const inputStyle = {
    padding: "10px 14px",
    width: "100%",
    fontSize: "15px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    fontFamily: "inherit",
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "30px",
        maxWidth: "600px",
        margin: "30px auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      {/* Title - matches Education heading style */}
      <h2 style={{ fontWeight: "bold", fontSize: "22px", marginBottom: "20px", color: "#000" }}>
        Contact
      </h2>

      {/* Blue header bar - matches Education table header */}
      <div
        style={{
          backgroundColor: "#1a8fd1",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "15px",
          padding: "12px 16px",
          borderRadius: "4px 4px 0 0",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}
      >
        <span>Field</span>
        <span>Details</span>
      </div>

      {/* Form rows - matches Education table row style */}
      <form onSubmit={handleSubmit} style={{ border: "1px solid #ddd", borderTop: "none", borderRadius: "0 0 4px 4px" }}>

        {/* Name Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            padding: "12px 16px",
            gap: "12px",
          }}
        >
          <span style={{ fontWeight: "500", color: "#333" }}>Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={inputStyle}
          />
        </div>

        {/* Email Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            padding: "12px 16px",
            gap: "12px",
          }}
        >
          <span style={{ fontWeight: "500", color: "#333" }}>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={inputStyle}
          />
        </div>

        {/* Message Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            padding: "12px 16px",
            gap: "12px",
          }}
        >
          <span style={{ fontWeight: "500", color: "#333" }}>Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows={3}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        {/* Send Button Row */}
        <div style={{ padding: "16px" }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "11px",
              backgroundColor: "#1a8fd1",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "4px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      {responseMsg && (
        <p style={{ color: "green", marginTop: "12px", fontWeight: "500" }}>✅ {responseMsg}</p>
      )}
      {error && (
        <p style={{ color: "red", marginTop: "12px", fontWeight: "500" }}>❌ {error}</p>
      )}
    </div>
  );
}

export default Contact;