import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebartitle">ABOUT ME</span>

                <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
                <p className='sidebarpara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tenetur esse adipisci? Amet odio ex omnis soluta eos temporibus nemo itaque non sunt minima, delectus adipisci tempora rerum dicta? Cupiditate!</p>

            </div>
            <div className="sidebarItem">
                <span className="sidebartitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Cinema</li>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebartitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                </div>

            </div>
        </div>
    )
}
