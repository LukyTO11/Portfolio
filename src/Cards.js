import React from "react"

export default function Cards(props) {


    return (
        <div className={`containers ${props.className}`}>
            <div className="card">
                <div class="card-item">
                    <div class="card-item_link">
                        <div class="card-item_bg"></div>
                        <div class="card-item_title">
                            <p className="card-title">{props.title}</p>
                        </div>
                        <img src={props.coverImg} className="card-icons" />
                    </div>
                </div>
            </div>
        </div>

    )
}

