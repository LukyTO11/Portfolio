import { React, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faTwitter, faTiktok} from '@fortawesome/free-brands-svg-icons'
import PropTypes from "prop-types"

export default function Navbar(props) {

    function handleMouseOver() {
        const shop = document.getElementById('shop');
        shop.classList.add('show-text');
    }

    Navbar.propTypes = {
        darkMode: PropTypes.bool.isRequired,
        toggleDarkMode: PropTypes.func.isRequired,
        toggleBodyClass: PropTypes.func.isRequired
    }

    useEffect(() => {
        const handleScroll = () => {
            const mediaQuery = window.matchMedia('(min-width: 1000px)')

            if (mediaQuery.matches) {
                const currentScroll = window.pageYOffset

                if (currentScroll <= 0) {
                    document.body.classList.remove("scroll-up")
                }

                if (currentScroll > lastScroll && !document.body.classList.contains("scroll-down")) {
                    document.body.classList.remove("scroll-up")
                    document.body.classList.add("scroll-down")
                }

                if (currentScroll < lastScroll && document.body.classList.contains("scroll-down")) {
                    document.body.classList.remove("scroll-down")
                    document.body.classList.add("scroll-up")
                }

                lastScroll = currentScroll
            }
        }

        let lastScroll = 0
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const scrollToSection = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        })
    }

    const navLinks = document.getElementById("navLinks")
    function showMenu() {
        navLinks.style.right = "0"
    }
    function hideMenu() {
        navLinks.style.right = "-300px"
    }

    return (
        <div className="background" id="background">
            <nav id="navbar" className={props.darkMode ? "dark" : ""}>
                <li onClick={() => scrollToSection('#background')}>
                    <img src={require("../image/icon-catv2.png")} alt="" className="nav-icon" />
                </li>
                <div className="nav-links">
                    <ul className="navbar-center" id="navLinks">
                        <FontAwesomeIcon icon={faTimes} className="fa-times" onClick={hideMenu} />
                        <li onClick={() => {scrollToSection('#about-section'); hideMenu()}}>About</li>
                        <li onClick={() => {scrollToSection('#main'); hideMenu()}}>Works</li>
                        <li onClick={() => {scrollToSection('#contact-section'); hideMenu()}}>Contact</li>
                        <li id="shop" onMouseOver={() => handleMouseOver()}>Shop</li>
                        <div className="fa-brands">
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faTiktok}/>
                        </div>
                    </ul>
                </div>
                <div className="toggler" onClick={() => { props.toggleDarkMode(); props.toggleBodyClass() }}>
                    <FontAwesomeIcon icon={faMoon} className="fa-moon" />
                    <FontAwesomeIcon icon={faSun} className="fa-sun" />
                    <div className="ball"></div>
                </div>
                <FontAwesomeIcon icon={faBars} className="fa fa-bars" onClick={showMenu} />
            </nav>
        </div >
    )
}
