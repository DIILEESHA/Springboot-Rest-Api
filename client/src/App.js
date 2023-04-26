import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./components/Login/Log";
import Sign from "./components/Sign/Sign";
import Home from "./pages/Home";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Navbar from "./components/Navbar/Navbar";
import Protect from "./components/protected/Protect";
import Create from "./components/Create/Create";
import Profileview from "./components/Profileviewpost/Profileview";
import Singlepost from "./components/SinglepostModal/Singlepost";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        {/* <BrowserRouter> */}
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/signup" element={<Sign />} />
          <Route
            path="/home"
            element={
              <Protect>
                <Home />
              </Protect>
            }
          />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profileview />} />
          <Route exact path="/single/:id" element={<Singlepost />} />

          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
        {/* </BrowserRouter> */}
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
