import React from 'react';
import '../styles/navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const navbar = () => {
    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <a href="#" className='logo nav-link'>My loremp</a>
                    <button onClick={()=>{active()}} className='nav-toggle'><i><FontAwesomeIcon icon={faBars}/></i></button>
                    <ul className='nav-menu'>
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link nav-menu-link-active">Welcome</a></li>
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link">Dropdown</a></li>
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link">Left Sidebar</a></li>
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link ">Right sedebar</a></li>
                    </ul>
                </nav>
            </header>
        </>

    )
    function active() {
     const navTogle = document.querySelector(".nav-toggle")  
     const navMenu = document.querySelector(".nav-menu")  
     navTogle.addEventListener("click",()=>{
         navMenu.classList.toggle("nav-menu_visible");
     })

    }
};

export default navbar;

