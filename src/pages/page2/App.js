import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom"
import About from '../../components/About';
import Home from '../../components/Home';

function App() {
  return (
    <div className="App">
      <h1>Page2</h1>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
