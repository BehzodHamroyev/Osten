import React from 'react'

const Collapse2 = (props) => {
    return (
        <div className={`${props.className}`}>
          <p>Монтаж лифтового оборудования производится в согласованные с клиентом сроки. Специалисты компании произведут все необходимые диагностические и пуско-наладочные работы.</p>  
          <p className="fw-bold">Преимущества монтажа</p>
          <ul className="ps-3">
              <li>Контактное лицо для каждого проекта по монтажу лифтового и эскалаторного оборудования</li>
              <li>Профессиональные консультации на каждом этапе монтажа оборудования</li>
          </ul>
        </div>
    )
}

export default Collapse2