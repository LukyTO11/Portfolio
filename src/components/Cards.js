import React from "react"
import PropTypes from 'prop-types';


export default function Cards(props) {

    Cards.propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        coverImg: PropTypes.string.isRequired
    }

    return (
        <div className={`containers ${props.className}`}>
            <div className="card">
                <div className="card-item">
                    <div className="card-item_link">
                        <div className="card-item_bg"></div>
                        <div className="card-item_title">
                            <p className="card-title">{props.title}</p>
                        </div>
                        <img src={props.coverImg} className="card-icons" />
                    </div>
                </div>
            </div>
        </div>

    )
}

