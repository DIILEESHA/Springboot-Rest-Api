import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./components/Login/Log";
import Sign from "./components/Sign/Sign";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Log />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/" element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
