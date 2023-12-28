import { BrowserRouter, Route, Routes } from "react-router-dom";
import './style/index.scss'
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/my-site/">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      Hello Mihai
    </div>
  );
}

export default App;
