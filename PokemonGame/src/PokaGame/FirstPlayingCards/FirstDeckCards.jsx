import React, { useContext , useEffect, useState } from 'react'
import cardContext from '../context/Context'
import useFetchone from '../Fetching/useFetchone'

const FirstDeckCards = () => {
    const { setFighterPokemon , gamestate , cards , cardz} = useContext(cardContext)
    
    useFetchone()

    const handleClick = (card) => {
        if(!gamestate ){
            setFighterPokemon({
                id:card.id,
                name:card.name,
                image:card.image,
                power:card.power
            })
        }
    }
    
    // Displaying the first deck's cards
    return (
        <>

            {cardz.length > 0  && cards.length > 0 && cards.map(card => 
                                                    <main className='maincard' 
                                                        onClick={()=> handleClick(card)}
                                                        key={card.id}>
                                                        <img draggable='false' className='image' src={card.image} alt="IMAGE???" />
                                                        <div className='name'>{card.name || 'NAME???'}</div>
                                                        <div className='power'>{card.power || 'POWER???'}</div>
                                                    </main>
            )
            }
            </>
  )
}

export default FirstDeckCards