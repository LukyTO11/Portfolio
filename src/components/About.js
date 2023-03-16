import React, { useState, useEffect, useRef } from "react"
import Typed from "typed.js"
import Form from "./Form"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import Gif from "../img/anim-website_test2.gif"
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function About(props) {

    About.propTypes = {
        darkMode: PropTypes.bool.isRequired,
    }

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
            backSpeed: 80
        })
        return () => {
            typed.destroy()
        }
    }, [])

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
            <div className={props.darkMode ? "dark" : ""} >
                <div className="about" id="about-section" data-aos="fade-up">
                    <h1 className="about-title">I&apos;m {" "}
                        <span ref={typedElement} className="about-typed"></span>
                    </h1>
                    <p className="about-text">
                        Hello, my nickname is Luky, a Freelance Illustrator/Animator
                        based in France. With a passion in web development.
                    </p>
                    <Link to="/see-my-works">
                        <button className="btn-work">
                            See my work
                        </button>
                    </Link>
                    <button
                        onClick={handleShowmodal}
                        className="btn-contact">
                        Contact me
                    </button>
                    {showModal && (<Form handleShowmodal={handleShowmodal} />
                    )}
                    <img src={Gif} className="gif-luky"/>
                </div>
            </div>
    )
}

