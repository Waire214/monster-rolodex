import React from 'react'
import './card-component.css'

export const CardComponent = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt={`hello ${props.monster.name}`} />
            <h1> {props.monster.name} </h1>
            <p>{props.monster.email}</p>
        </div>
    )
}
