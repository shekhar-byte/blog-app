import React from 'react'
import "./createForm.css"

export default function CreateForm() {
    return (
        <div className='write'>
            <img className='writeImg' src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                alt="" />
            <form className='writeForm'>
                <div className="writeGroup">
                    <label htmlFor="fileInput">
                        <i className='writeIcon fas fa-plus'></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeGroup">
                    <textarea name="" placeholder='Tell your story .....'
                        className='writeInput writeText'></textarea>
                </div>
                <button className='ui big secondary button writeSubmit'>
                    Publish
                </button>
            </form>
        </div>
    )
}
