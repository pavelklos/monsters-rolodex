import React from 'react'
import { Card } from '../card/card.component'
import './card-list.styles.css'

export const CardList = (props) => {
  return (
    // <div className='card-list'>{props.children}</div>
    <div className='card-list'>
      {
        props.monsters.map(monster => (
          // <h3 key={monster.id}>{ monster.name }</h3>
          <Card key={monster.id} monster={monster} />
          )
        )
      }
    </div>
  )
}
