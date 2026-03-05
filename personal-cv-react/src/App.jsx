import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  {
    name: "Web Development",
    subcategories: [
      {
        name: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "React"]
      },
      {
        name: "Backend"
      }
    ]
  }
];

const education = [
  { year: "2028", program: "College", school: "USTP – CDO Campus" },
  { year: "2023", program: "SHS", school: "CDONHS-SHS" },
  { year: "2012", program: "CES", school: "FVS" },
  { year: "2010", program: "Kindergarten", school: "CHS" }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Toggle Dark Mode"}
      </button>
      <Header />
      <main>
        <div className="container">
          <About />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact />
        </div>
      </main>
      <footer>
        <p>&copy; 2026 Scott Nels Quinaud. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;