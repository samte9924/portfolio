import "./styles/App.css";

function App() {
  return (
    <>
      <nav>
        <button>Lingua</button>
        <button>Tema</button>
      </nav>
      <header>
        <h1>
          Hi, I am <span>Samuel</span>
        </h1>
        <div className="contacts">
          <div>GitHub</div>
          <div>LinkedIn</div>
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
        <div>cnvrtr.io</div>
        <div>Youtube video downloader</div>
        <div>AI Content Generator</div>
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
