import React, { useState, useEffect, useRef } from "react"
import Typed from "typed.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function About(props) {

    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
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

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(false)
    }

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
                    onClick={() => setShowModal(true)}
                    className="btn-contact">
                    Contact me
                </button>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Contact me</h2>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    <input className="label-email" placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>
                                <label>
                                    <textarea className="label-message" placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                </label>
                            </form>
                            <div className="btn-send" onClick={() => setShowModal(false)}>
                                <FontAwesomeIcon icon={faPaperPlane} className="fa-paper" />
                            </div>
                            <div className="close-icon" onClick={() => setShowModal(false)}>
                                <FontAwesomeIcon icon={faXmark} className="fa-xmark" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}