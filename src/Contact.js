import React from "react"

export default function Contact() {
    return (
        <footer className="footer">
            <h1 className="footer-title"> Interested to collaborate together ? </h1>
            <div className="container-btn">
                <button
                    className="btn-contactTwo"
                >Contact Me
                </button>
            </div>
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
                <img src={require("./image/iconCat.png")} alt="" className="iconCat"/>
                <p className="info-rights">All Rights Reserved. 2023 &copy; LukyTO.</p>
            </div>
        </footer>
    )
}