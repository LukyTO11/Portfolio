import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Work(props) {

    Work.propTypes = {
        darkMode: PropTypes.bool.isRequired,
    }

    useEffect(() => {
        AOS.init({
            once: true,
            offset: 200,
            duration: 600,
            easing: 'ease-in-out',
            delay: 100,
            mirror: false
        })
    }, [])

    return (
        <main id="main" className={props.darkMode ? "dark" : ""} data-aos="fade-up">
            <h1 className="main-title">MY WORK</h1>
            <div className="grid-container">
                <div className="grid-item1"></div>
                <div className="grid-item2"></div>
                <div className="grid-item3"></div>
                <div className="grid-item4"></div>
                <div className="grid-item5"></div>
            </div>
            <Link to="/see-my-works" className="link">
                <span className="link-work">
                    SEE ALL MY WORKS <i className="arrow">&#8594;</i>
                </span>
            </Link>
        </main >
    )
}