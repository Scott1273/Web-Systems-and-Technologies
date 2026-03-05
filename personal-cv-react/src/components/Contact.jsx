import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email && message) {
      alert(`Thank you {name}!`);
    } else {
      alert("Please fill in all fields!");
    }
  }

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          style={{ width: "100%" }}
        ></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;