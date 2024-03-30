import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <main>
            <Dictionary />
          </main>
        </header>
        <footer className="text-end">
          This is an open sourced code{" "}
          <a
            href="https://github.com/JJpink31/dictionary-app.git"
            target="_blank"
            rel="noreferrer"
          >
            open sourced code
          </a>{" "}
          Hosted on
          <a
            href="https://jj-dictionary-app.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
