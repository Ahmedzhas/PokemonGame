import React, { useContext , useEffect } from 'react'
import cardContext from './context/Context'

const useReset = () => {
    const {setWinner , setLefthealth , setRighthealth , setIsgameover,
           setFighterPokemon ,setFighterPokemonSecond,setCards,setCardz
    } = useContext(cardContext)
    
    useEffect(()=>{
        setWinner('NONE')
        setLefthealth(200)
        setRighthealth(200)
        setIsgameover(true)
        setFighterPokemon([])
        setFighterPokemonSecond([])
        setCards([])
        setCardz([])
      },[])
}

export default useReset