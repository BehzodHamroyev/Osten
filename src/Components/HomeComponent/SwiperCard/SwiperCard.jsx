import React from 'react'
import './SwiperCard.css'


const SwiperCard = (props) => {
    return (
        <div className="SwiperCard">
            <img src={props.data.img} className="img-fluid" alt="" />
            <div className="SwiperBottom">
                <p className="text-center">{props.data.name} </p>
            </div>
        </div>
    )
}

export default SwiperCard
