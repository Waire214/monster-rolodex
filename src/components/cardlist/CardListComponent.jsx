import React from 'react'
import { CardComponent } from '../card/CardComponent'
import './card-list-component.css'
const CardListComponent = (props) => {
    return (
        <div className="card-list">
            {/* calling props children */}
            {/* {props.children} */}
            {
                props.monsters.map(monster => (
                    <CardComponent key={monster.id} monster={monster} />
                ))
            }

        </div>
    )
}

export default CardListComponent
