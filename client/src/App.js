import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./components/Login/Log";
import Sign from "./components/Sign/Sign";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
        {/* <Navbar/> */}
          <Routes>
            <Route path="/login" element={<Log />} />
            <Route path="/signup" element={<Sign />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
