import React,{useContext} from 'react'
import cardContext from '../context/Context'

const SecondCard = () => {

    const {fighterPokemonSecond , cards , cardz , isgameover} = useContext(cardContext)
    const img = '../src/PokaGame/Images/HOLD.gif'
  return (
    <>
    {isgameover === false && 
    <main className='fightingcards'>
        <img draggable='false' className='image' src={fighterPokemonSecond.image || img } alt="" />
        <div className='name'>{fighterPokemonSecond.name}</div>
        <div className='power'>{fighterPokemonSecond.power}</div>
    </main>
    }
    {isgameover === false &&
     <div>
      <h2>Ai</h2>
    </div>
}
    
    </>
    )
}

export default SecondCard