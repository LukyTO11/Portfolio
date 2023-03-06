import React, { useState, useEffect, useRef } from "react"
import Typed from "typed.js"
import Form from "./Form"
import {Link} from "react-router-dom"

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
            backSpeed: 80
        })
        return () => {
            typed.destroy()
        }
    }, [])

<<<<<<< HEAD
    const handleSubmit = (e) => {
        e.preventDefault()
        /* const mailOptions = {
            from: email,
            to: 'luky.contact@gmail.com',
            subject: 'Message from your website',
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
                setShowModal(false)
            }
        }) */
    }

=======
>>>>>>> master
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
            </div>
        </div>
    )
}

