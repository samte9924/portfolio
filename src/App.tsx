import NavBar from "./components/NavBar";
import "./styles/App.css";
import Html from "./components/icons/Html";
import Css from "./components/icons/Css";
import JavaScript from "./components/icons/JavaScript";
import React from "./components/icons/React";
import MySql from "./components/icons/MySql";
import Node from "./components/icons/Node";
import LinkedIn from "./components/icons/LinkedIn";
import GitHub from "./components/icons/GitHub";
import ProjectCard from "./components/ProjectCard";

function App() {
  /*const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme) {
    document.querySelector("body")?.setAttribute("data-theme", selectedTheme);
  }*/

  return (
    <>
      <NavBar />
      <header>
        <h1>
          Hi, I am <span>Samuel</span>
        </h1>
        <div className="my-contacts">
          <a href="https://github.com/samte9924">
            <GitHub />
          </a>
          <a href="https://linkedin.com/in/samuel-tedaldi-44ab44329">
            <LinkedIn />
          </a>
        </div>
      </header>
      <div className="my-stack">
        <div className="row">
          <Html />
          <Css />
          <JavaScript />
          <React />
        </div>
        <div className="row">
          <Node />
          <MySql />
        </div>
      </div>
      <div className="my-projects">
        <ProjectCard
          name="cnvrtr.io"
          stack={["React", "NextJS", "Tailwind"]}
          previewLink="https://cnvrtr-io.vercel.app/"
          sourceLink="https://github.com/samte9924/cnvrtr"
        />
        <ProjectCard
          name="Youtube video downloader"
          stack={["Python"]}
          sourceLink="https://github.com/samte9924/yt-video-downloader"
        />
        <ProjectCard
          name="AI Content Generator"
          stack={["React", "NextJS", "Tailwind"]}
          sourceLink="https://github.com/samte9924/ai-content-generator"
        />
      </div>
      <div className="contact-me">
        <h1>Contact Me!</h1>
        <form>Form</form>
      </div>
      <footer>&copy; Samuel Tedaldi 2025</footer>
    </>
  );
}

export default App;
