import { React } from "react"
import ReactPlayer from 'react-player'
import videoBg from "./img/video.mp4"

export default function Navbar() {
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
            <nav className="navbar">
                <a href="#"><img src={require("./image/icon-catv2.png")} alt="" className="nav-icon" /></a>
                <ul className="navbar-center">
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Works</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="#" className="nav-shop"><li>Shop</li></a>
                </ul>
                <a href="#"><img src={require("./image/d-l.png")} alt="" className="d-l_mode" /></a>
            </nav>
        </div >
    )
}
