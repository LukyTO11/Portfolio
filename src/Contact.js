import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Contact(props) {
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(false)
    }
    return (
        <footer id="footer" className={props.darkMode ? "dark" : ""}>
            <h1 className="footer-title"> Interested to collaborate together ? </h1>
            <div className="container-btn">
                <button
                    onClick={() => setShowModal(true)}
                    className="btn-contactTwo">
                    Contact Me
                </button>
            </div>
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

            <div className="info">
                <div className="info-luky">
                    <h3 className="info-title">Luky</h3>
                    <h3 className="info-text">About</h3>
                    <h3 className="info-text">Contact</h3>
                    <h3 className="info-text">Services</h3>
                </div>
                <div className="info-social">
                    <h3 className="info-title">Social</h3>
                    <h3 className="info-text">Instagram</h3>
                    <h3 className="info-text">Twitter</h3>
                    <h3 className="info-text">TikTok</h3>
                </div>
                <img src={require("./image/iconCat.png")} alt="" className="iconCat" />
                <p className="info-rights">All Rights Reserved. 2023 &copy; LukyTO.</p>
            </div>
        </footer>
    )
}
