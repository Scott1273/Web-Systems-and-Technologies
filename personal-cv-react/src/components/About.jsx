import Card from "./Card";
import profilePhoto from "../assets/images/profile.jpg";

function About() {
  return (
    <Card title="About Me">
      <img src={profilePhoto} alt="Profile photo" />
      <p>
        Hello! My name is Scott Nels Quinaud, and I am a second-year BSIT
        (Bachelor of Science in Information Technology) student. I chose this
        course because I am interested in technology and how it helps make
        tasks easier and more efficient. I enjoy learning about programming,
        computer systems, and creating projects that improve my skills and
        creativity.
      </p>
      <p>
        Email: <a href="mailto:quinaud.scottnels@gmail.com">quinaud.scottnels@gmail.com</a><br />
        GitHub: <a href="https://github.com/Scott1273" target="_blank" rel="noreferrer">https://github.com/Scott1273</a>
      </p>
    </Card>
  );
}

export default About;