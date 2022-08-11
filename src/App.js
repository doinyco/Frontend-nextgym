import './App.css';
import Auth from "./components/Auth";
import { Link } from "react-router-dom";
// import CreateProfile from './components/CreateProfile';


function App() {
  let username = ""

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
            {/* <button onClick={navigateToProfile}>Go to Profile</button> */}
            {/* <Link to="/create-profile">
              <button id="get-started">Sign up</button>
            </Link> */}
        </div>
        
    
        {/* <Link to="/users">
          <div id="go-to-user">👤</div>
        </Link>
        <Link to="/map">
          <div id="go-to-map">🗺 </div>
        </Link> */}
        <div className="quote">
          <p>Finding the right gym <br/>has never been easier.</p>
        </div>
      </main>
      <footer> Doina Colun &copy; 2022</footer>
    </div>
  );
}

export default App;