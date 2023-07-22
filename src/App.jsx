import "./styles/App.css";
import Home from "./pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
