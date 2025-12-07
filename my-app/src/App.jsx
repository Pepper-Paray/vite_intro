import { Routes, Route, Link } from "react-router-dom";
import About from "./About.jsx";

function Home() {
  return <h1>Home Page</h1>;
}

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
