import React, { useContext } from 'react'
import cardContext from '../context/Context'
import useFetchtwo from '../Fetching/useFetchtwo'
import useAi from './useAi'
const SecondDeckCards = () => {
    const {cardz ,cards} = useContext(cardContext)
    useFetchtwo()
    useAi()
    return (
        <>
            {cardz.length > 0 && cards.length > 0 && cardz.map(card => 
                                                    <main className='maincard' 
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

export default SecondDeckCards