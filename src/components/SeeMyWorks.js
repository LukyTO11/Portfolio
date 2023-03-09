import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

export default function SeeMyWorks() {

    return (
        <div className="seemyworks">
            <div>
                <div className="btn-iconCat">
                    <img src={require("../image/iconCat.png")} className="seemywork_iconCat" href="#" />
                </div>
            </div>
            <div className="works-links">
                <div className="share-links">
                    <a href="https://www.instagram.com/luky__to/" className="works-links_insta">Instagram</a>
                    <a href="https://twitter.com/Lukyto_1" className="works-links_twitter">Twitter</a>
                    <a href="https://www.tiktok.com/@lukyto_" className="works-links_tiktok">TikTok</a>
                </div>
                <Link to="/Portfolio">
                    <button className="backHome">
                        <FontAwesomeIcon icon={faHouse} className="fa-House" />
                    </button>
                </Link>
            </div>
        </div>
    )
}
