import React from "react"


export default function Work(props) {
    return (
        <main id="main" className={props.darkMode ? "dark" : ""}>
            <h1 className="main-title">MY WORKS</h1>
            <div className="grid-container">
                <div className="grid-item1"></div>
                <div className="grid-item2"></div>
                <div className="grid-item3"></div>
                <div className="grid-item4"></div>
                <div className="grid-item5"></div>
            </div>
            <a href="#background" className="link-work">
                SEE ALL MY WORKS <i className="arrow">&#8594;</i>
            </a>
        </main >
    )
}