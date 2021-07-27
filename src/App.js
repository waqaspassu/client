import {
  BrowserRouter as Router,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/landing';

function App() {
  return (
    <div className="App">
      <Router>
        <LandingPage/>
      </Router>
    </div>
  );
}

export default App;
