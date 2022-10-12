import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import UserSetting from "./pages/userSettings/UserSetting";
import CreateForm from "./pages/create/CreateForm";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Show from "./pages/show/Show";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogpost" element={<Show />} />
            <Route path="/setting" element={<UserSetting />} />
            <Route path="/createform" element={<CreateForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
