import logo from './logo.svg';
import './App.css';
import Hovercounter from './Day6/Hovercounter';
import Clickcounter from './Day6/Clickcounter';
import About from './Day7/About';
import Home from './Day7/Home';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
