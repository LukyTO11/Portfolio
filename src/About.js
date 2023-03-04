import React, { useState, useEffect, useRef } from "react"
import Typed from "typed.js"
import Form from "./Form"

export default function About(props) {

    const handleShowmodal = () => {
        setShowModal(!showModal)
    }

    const [showModal, setShowModal] = useState(false)

    const typedElement = useRef(null)

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["Illustrator", "Animator", "Developper"],
            typeSpeed: 100,
            loop: true,
            backDelay: 1500,
            backSpeed: 80,
        })
        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <div className={props.darkMode ? "dark" : ""}>

            <div className="about" id="about-section">
                <h1 className="about-title">I'm {" "}
                    <span ref={typedElement} className="about-typed"></span>
                </h1>
                <p className="about-text">
                    Hello, my nickname is Luky, a Freelance Illustrator/Animator
                    based in France. With a passion in web development.
                </p>
                <div></div>
                <button
                    className="btn-work"
                >See my works
                </button>
                <button
                    onClick={handleShowmodal}
                    className="btn-contact">
                    Contact me
                </button>
                {showModal && (<Form handleShowmodal={handleShowmodal}/>
                )}
            </div>
        </div>
    )
}

