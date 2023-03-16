import React, { useEffect } from "react"
import PropTypes from "prop-types"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Services(props) {

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

    Services.propTypes = {
        darkMode: PropTypes.bool.isRequired,
    }

    return (
        <div id="services" className={props.darkMode ? "dark" : ""}>
            <div data-aos="fade-up">
                <h1 className="services-title">Services</h1>
            </div>
        </div>
    )
}