import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom"
import Test from '../../components/Test';

function App() {
  return (
    <div className="App">
      <h1>Page2</h1>
      <NavLink to={"/test"}>Test</NavLink>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
