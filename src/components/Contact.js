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
                    <h3><a href="#about-section" className="info-text">About</a></h3>
                    <h3><a href="#main" className="info-text">Works</a></h3>
                    <h3><a href="#contact-section" className="info-text">Services</a></h3>
                </div>
                <div className="info-social">
                    <h3 className="info-title">Social</h3>
                    <h3><a href="https://www.instagram.com/luky__to/" className="info-text">Instagram</a></h3>
                    <h3><a href="https://twitter.com/Lukyto_1" className="info-text">Twitter</a></h3>
                    <h3><a href="https://www.tiktok.com/@lukyto_" className="info-text">TikTok</a></h3>
                </div>
                <img src={require("../image/iconCat.png")} className="iconCat" href="#"/>
                <p className="info-rights">All Rights Reserved. 2023 &copy; LukyTO.</p>
            </div>
        </footer>
    )
}
