import React, { useContext , useEffect } from 'react'
import cardContext from '../context/Context'

const GameOverReset = () => {
    const { lefthealth ,righthealth,setIsgameover,
        setCards , setCardz , winner, setWinner,
        setFighterPokemon , setFighterPokemonSecond  
    } = useContext(cardContext)

    useEffect(()=>{
      if(lefthealth === 0 || righthealth === 0) {
        setCards([])
        setCardz([])
        setFighterPokemon([])
        setFighterPokemonSecond([])
        setIsgameover(true)
        if(lefthealth < righthealth){
          setWinner('Sorry !! :(')
        }
        if(lefthealth > righthealth){
          setWinner('Congratz and thanks for playing !!')
        }
      }
    },[lefthealth , righthealth])
    console.log(lefthealth,righthealth)

  return (
    <>

    {winner !== 'NONE' && <h1 className='fight'>{`${winner}`}</h1>}
    </>
    
    
  )
}

export default GameOverReset