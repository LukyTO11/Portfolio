import { React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {

    const body = document.body
    let lastScroll = 0

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset

        if (currentScroll <= 0) {
            body.classList.remove("scroll-up")
        }

        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up")
            body.classList.add("scroll-down")
        }

        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-down")
            body.classList.add("scroll-up")
        }

        lastScroll = currentScroll
    })
    return (
        <div className="background">
            <nav id="navbar" className={props.darkMode ? "dark" : ""}>
                <a href="#"><img src={require("./image/icon-catv2.png")} alt="" className="nav-icon" /></a>
                <ul className="navbar-center">
                    <a href="#about-section"><li>About</li></a>
                    <a href="#main"><li>Works</li></a>
                    <a href="#contact-section"><li>Contact</li></a>
                    <a href="#" className="nav-shop"><li>Shop</li></a>
                </ul>
                <div className="toggler" onClick={() => { props.toggleDarkMode(); props.toggleBodyClass() }}>
                    <FontAwesomeIcon icon={faMoon} className="fa-moon" />
                    <FontAwesomeIcon icon={faSun} className="fa-sun" />
                    <div className="ball"></div>
                </div>
            </nav>
        </div >
    )
}
