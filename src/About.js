import React, { useState, useEffect, useRef } from "react"
import Typed from "typed.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function About(props) {

    /* const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'luky.contact@gmail.com',
            pass: 'GojoSA23!'
        }
    })

    const mailOptions = {
        from: 'luky.contact@gmail.com',
        to: 'recipient-email@example.com',
        subject: 'Subject of your email',
        text: 'Content of your email'
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent:' + info.response)
        }
    }) */

    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState("")
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
                            <form onSubmit={handleSubmit} method="POST">
                                <label>
                                    <input
                                        className="label-name"
                                        placeholder="name"
                                        type="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        className="label-email"
                                        placeholder="email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <textarea
                                        className="label-message"
                                        placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}
                                    >
                                    </textarea>
                                </label>
                            </form>
                            <div className="btn-send" onClick={handleSubmit}>
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