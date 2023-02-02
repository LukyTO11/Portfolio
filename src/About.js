import React from "react"

export default function About() {
    
    return (
        <div className="about">
            {/* <img src={require("./img/grid3.jpg")} className="img-bg"/> */}
            <h1 className="about-title">I'm Luky.</h1>
            <p className="about-text">
                Hello, my nickname is Luky, a Freelance Illustrator/Animator
                based in France. With a passion in web development.
            </p>
            <button
                className="btn-work"
            >See my works
            </button>
            <button
                className="btn-contact"
            >Contact Me
            </button>
        </div>
    )
}