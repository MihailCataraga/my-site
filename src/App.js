import { HashRouter, Route, Routes } from "react-router-dom";
import './style/index.scss'
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
