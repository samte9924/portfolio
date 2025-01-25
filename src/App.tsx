import { Github, Linkedin } from "lucide-react";
import NavBar from "./components/NavBar";
import "./styles/App.css";

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
            <Github />
          </a>
          <a href="https://linkedin.com/in/samuel-tedaldi-44ab44329">
            <Linkedin />
          </a>
        </div>
      </header>
      <div className="my-stack">
        <div>HTML5</div>
        <div>CSS3</div>
        <div>JS</div>
        <div>React</div>
        <div>Node</div>
      </div>
      <div className="my-projects">
        <div>
          <h3>cnvrtr.io</h3>
          <p>
            <a href="https://cnvrtr-io.vercel.app/" target="_blank">
              Live Preview
            </a>
          </p>
          <p>
            <a href="https://github.com/samte9924/cnvrtr" target="_blank">
              Source Code
            </a>
          </p>
        </div>
        <div>
          <h3>Youtube video downloader</h3>
        </div>
        <div>
          <h3>AI Content Generator</h3>
        </div>
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
