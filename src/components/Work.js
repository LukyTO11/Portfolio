import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function Work(props) {

    Work.propTypes = {
        darkMode: PropTypes.bool.isRequired,
    }

    return (
        <main id="main" className={props.darkMode ? "dark" : ""}>
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