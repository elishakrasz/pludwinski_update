import React from "react"
import { Image, Link } from "gatsby"
import Logo from '../images/logo3.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className="header-center">
            <div className="header-nav">
                <img src={Logo} className="header-logo" alt="logo" />
                <h4>Hebrew Calligraphy</h4>
            </div>
            <div className="nav-links">
               <Link className="link">
                Ketubot
               </Link>
               <Link className="link"> 
                Galleries
               </Link>
               <Link className="link">
                Exhibitions
               </Link>
               <Link className="link">
                 Books
               </Link>
               <Link className="link">
                 Courses
               </Link>
            </div>
            <div className="login">
                Login
            </div>
            </div>
        </div>
    )
}

export default Header