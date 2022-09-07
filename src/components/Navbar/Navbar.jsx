import React, { useRef, useState, } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useScrollPosition} from '../../hooks/useScrollPosition'

export const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState (false)
    const nav = useRef (null);
    const navBtn = useRef (null);

    const toggleNav = () => {
        if (isNavExpanded) {
            nav.current.classList.add("nav-out")
            navBtn.current.textContent = 'menu'
            setTimeout(() => {
                setIsNavExpanded(!isNavExpanded)
            }, 350);
        } else {
            navBtn.current.textContent = 'close'
            setIsNavExpanded(!isNavExpanded)
        }
    }

    const scrollPosition = useScrollPosition()
    const windoWidth = window.innerWidth;

    return (
        <nav className={scrollPosition > 10 ? 'navbar-scrolled' : 'navbar-not-scrolled'}>
            <Link to="/"><img src="assets/white-logo.png" alt="logo" /></Link>

            <button ref={navBtn} className="material-symbols-outlined navbar-expand" 
            onClick={() => {toggleNav()}}>menu</button>

            <div ref={nav} className={isNavExpanded && windoWidth < 1024 ? 'navigation-menu expanded' : 'navigation-menu'}>
                <NavLink to="/" onClick={() => {toggleNav()}}>HOME</NavLink>
                <NavLink to="/about-me" onClick={() => {toggleNav()}}>ABOUT ME</NavLink>
                <NavLink to="/portfolio" onClick={() => {toggleNav()}}>PORTFOLIO</NavLink>
                <NavLink to="/services" onClick={() => {toggleNav()}}>SERVICES</NavLink>
                <NavLink to="/contact" onClick={() => {toggleNav()}}>CONTACT</NavLink>
            </div>
        </nav>
    )
}