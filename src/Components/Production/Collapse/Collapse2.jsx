import './Collapse.css';
import React from 'react'
import CollapsTitle from './CollapsTitle';

const Collapse2 = (props) => {
    return (
        <div className={`Collapse2 text-start ${props.className}`}>
            <CollapsTitle title="Лифт для коттеджей" subTitle="предназначенные для коттеджей, придерживаются идеи дизайна защиты окружающей среды и энергосбережения, а также в настоящее время объединяются с новейшей лифтовой технологией для обеспечения безопасности и надежности продуктов компании. Элегантно спроектированная кабина лифта, тонкая и изысканная техника демонстрируют выдающуюся производительность лифтов Osten данной серии."/>
            <img className="mt-3 w-100" src="https://osten.vercel.app/images/diff/img3.jpg" alt="" />
            <img className="mt-3 w-100" src="https://osten.vercel.app/images/diff/img4.jpg" alt="" />
            <img className="mt-3 w-100" src="https://osten.vercel.app/images/diff/img5.jpg" alt="" />
        </div>
    )
}

export default Collapse2

