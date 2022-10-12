import React from 'react'
import Blogpost from '../../components/blogpost/Blogpost'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"

export default function Home() {
    return (
        <div>
            <Header />
            <div className='home'>
                <Blogpost />
                <Sidebar />
            </div>
        </div>
    )
}
