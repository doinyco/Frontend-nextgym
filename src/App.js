import './App.css';
import Auth from "./components/Auth";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>My next gym </h1>
      </header>
      <main>
        <div className="quote">
            <p>Finding the right gym <br/>has never been easier.</p>
          </div>

        <div className="authentication">
          <Auth/>
        </div>
      </main>
      <footer>Doina Colun &copy; 2022</footer>
    </div>
  );
}

export default App;