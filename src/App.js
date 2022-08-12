import './App.css';
import Auth from "./components/Auth";
import { Link } from "react-router-dom";
// import CreateProfile from './components/CreateProfile';


function App() {
  // const navigate = useNavigate();

  // const navigateToProfile = () => {
  //   navigate("/user");
  // };

  return (
    <div className="App">
      <header className="App-header">
          <h1>My next gym </h1>
      </header>
      <main>

        <div className="authentication">
          <Auth/>
        </div>
        
        <div className="quote">
          <p>Finding the right gym <br/>has never been easier.</p>
        </div>
      </main>
      <footer> Doina Colun &copy; 2022</footer>
    </div>
  );
}

export default App;