import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = () => {
    if (name && email && text) {
      setNotification("Thank you, " + name + "! Your message has been sent! 🎉");
    } else {
      setNotification("Please fill in all fields!");
    }
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>

      {notification && (
        <div style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: notification.includes("Thank you") ? "green" : "red",
          color: "white",
          padding: "15px 30px",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "16px",
          zIndex: 9999,
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}>
          {notification}
        </div>
      )}

      <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <textarea placeholder="Message" value={text} onChange={(e) => setText(e.target.value)}></textarea><br /><br />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </section>
  );
}

export default Contact;