import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import '../App.css'
const Home = () => {
  return (
    <div>
        <Header/>
        <nav>
            <ul>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/register">Register Here</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Home