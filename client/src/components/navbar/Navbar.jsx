import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <h2 className="topIcon">
          Blog<i className="fa-solid fa-store"></i>
        </h2>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/createform">CREATE</Link>
          </li>
          <li className="topListItem">
            <Link to="/register">REGISTER</Link>
          </li>
          <li className="topListItem">
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
          alt=""
        />
        <i className=" topSearchIcon fa-brands fa-searchengin"></i>
      </div>
    </div>
  );
}
