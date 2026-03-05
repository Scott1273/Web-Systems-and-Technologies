import { useState } from "react";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>
      {visible && (
        <section className="card" id="skillsSection">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill.name}
                {skill.subcategories && (
                  <ul>
                    {skill.subcategories.map((sub, subIndex) => (
                      <li key={subIndex}>
                        {sub.name}
                        {sub.items && (
                          <ul>
                            {sub.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default Skills;