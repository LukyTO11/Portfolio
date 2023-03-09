import React from "react"
import PropTypes from "prop-types"

export default function Services(props) {

    Services.propTypes = {
        darkMode: PropTypes.bool.isRequired,
    }

    return (
        <div id="services" className={props.darkMode ? "dark" : ""}>
            <h1 className="services-title">Services</h1>
        </div>
    )
}