import React from "react"

export default function Cards(props) {

    return (
        <div className="containers">
            <div className="card">
                <img src={props.coverImg} alt="" className="card-image" />
                <p className="card-title">{props.title}</p>
            </div>
        </div>
    )
}

