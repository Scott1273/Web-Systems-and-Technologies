import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState("");

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {notification && (
        <div style={{
          backgroundColor: notification.includes("Thank you") ? "green" : "red",
          color: "white",
          padding: "15px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "16px"
        }}>
          {notification}
        </div>
      )}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Toggle Dark Mode"}
      </button>
      <Header />
      <main>
        <div className="container">
          <About />
          <Skills />
          <Education />
          <Contact setNotification={setNotification} />
        </div>
      </main>
      <footer>
        <p>&copy; 2026 Scott Nels Quinaud. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;