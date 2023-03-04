import React, { useState } from "react"
import Form from "./Form"

export default function Contact(props) {

    const handleShowmodal = () => {
        setShowModal(!showModal)
    }

    const [showModal, setShowModal] = useState(false)

    return (
        <footer id="contact-section" className={props.darkMode ? "dark" : ""}>
            <h1 className="footer-title"> Interested to collaborate together ? </h1>
            <div className="container-btn">
                <div class="grid">
                    <button
                        onClick={() => setShowModal(true)}
                        className="btn">
                        Contact Me !
                    </button>
                </div>
            </div>
            {showModal && (<Form handleShowmodal={handleShowmodal} />
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
