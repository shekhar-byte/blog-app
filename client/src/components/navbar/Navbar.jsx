import "./navbar.css"

export default function Navbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <h2 className="topIcon">Blog<i className="fa-solid fa-store"></i></h2>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImage"
          src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" alt="" />
        <i className=" topSearchIcon fa-brands fa-searchengin"></i>
      </div>
    </div>
  )
}


