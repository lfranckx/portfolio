import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/Navbar.scss';

export default function Header(props) {

    const [click, setClick] = useState(false);
    const handleClick = () => { setClick(!click) };
    const closeMobileMenu = () => { setClick(false) };

    return (
        <div id="navbar">
            <nav>
                <Link to={'/home'} id="logo-name">
                    Lachlan Franckx
                </Link>

                <div id='hamburger' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'active' : ''}>
                    <li>
                        <NavLink to='/home'
                            activeClassName={"selected"}
                            className='navlinks'
                            onClick={closeMobileMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'
                            activeClassName={"selected"}
                            className='navlinks'
                            onClick={closeMobileMenu}
                        >
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/work'
                            activeClassName={"selected"}
                            className='navlinks'
                            onClick={closeMobileMenu}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume'
                            activeClassName={"selected"}
                            className='navlinks'
                            onClick={closeMobileMenu}
                        >
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'
                            activeClassName={"selected"}
                            className='navlinks'
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                
            </nav>
        </div>
    )
}
