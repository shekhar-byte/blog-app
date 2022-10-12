import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./userSetting.css"

export default function UserSetting() {
    return (
        <div>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsTitleUpdate"><h1 class="ui medium header">
                            <div class="content">
                                Account Settings <i class="fa-solid fa-sliders"></i>

                            </div>
                        </h1></span>
                        <span className="settingsTitleDelete ui red button">Delete Account</span>
                    </div>
                    <form className="settingsForm ui form">
                        <label style={{ margin: "5px" }}>Profile Picture</label>
                        <div className="settingsPP field">
                            <img
                                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                style={{ display: "none" }}
                                className="settingsPPInput"
                            />
                        </div>
                        <div className="field">
                            <label>Username</label>
                            <input className='formInput' type="text" placeholder="Safak" name="name" />
                        </div>
                        <div class="two fields">
                            <div className="field">
                                <label>Email</label>
                                <input type="email" className='formInput' placeholder="safak@gmail.com" name="email" />
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input type="password" className='formInput' placeholder="Password" name="password" />
                            </div>
                        </div>
                        <button className="settingsSubmitButton ui primary button" type="submit">
                            Update
                        </button>
                    </form>
                </div>
                <Sidebar />
            </div>
        </div>
    )
}
