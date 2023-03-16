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
        <main id="main" className={props.darkMode ? "dark" : ""} >
            <div>
                <h1 className="main-title" data-aos="fade-up">MY WORK</h1>
                <div className="grid-container">
                    <div className="grid-item1" data-aos="fade-up"></div>
                    <div className="grid-item2" data-aos="fade-up"></div>
                    <div className="grid-item3" data-aos="fade-up"></div>
                    <div className="grid-item4" data-aos="fade-up"></div>
                    <div className="grid-item5" data-aos="fade-up"></div>
                </div>
                <Link to="/see-my-works" className="link">
                    <span className="link-work">
                        SEE ALL MY WORKS <i className="arrow">&#8594;</i>
                    </span>
                </Link>
            </div>
        </main >
    )
}