import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import '../App.css'
const Dashboard = ({regdash}) => {
  return (
    <div>
        <Header/>
        <nav>
            <ul>
                <li>
                    {regdash.email}<br/>
                    {regdash.password}
                </li>
                <li>
                <Link to="/logout">logout</Link>

                </li>
            </ul>
        </nav>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Dashboard