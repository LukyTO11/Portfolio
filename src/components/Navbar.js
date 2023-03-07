import { React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


export default function Navbar(props) {

    function handleMouseOver() {
        const shop = document.getElementById('shop');
        shop.classList.add('show-text');
    }

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

    const scrollToSection = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className="background" id="background">
            <nav id="navbar" className={props.darkMode ? "dark" : ""}>
                    <li onClick={() => scrollToSection('#background')}>
                        <img src={require("../image/icon-catv2.png")} alt="" className="nav-icon" />
                    </li>
                
                <ul className="navbar-center">
                    <li onClick={() => scrollToSection('#about-section')}>About</li>
                    <li onClick={() => scrollToSection('#main')}>Works</li>
                    <li onClick={() => scrollToSection('#contact-section')}>Contact</li>
                    <li id="shop" onMouseOver={() => handleMouseOver()}>Shop</li>
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
