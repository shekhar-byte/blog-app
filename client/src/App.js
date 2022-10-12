import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./pages/show/Show";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogpost" element={<Show />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
