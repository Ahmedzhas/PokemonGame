import React, { useContext,useEffect } from 'react'
import cardContext from '../context/Context'

const botAi = () => {
    const {fighterPokemonSecond , setFighterPokemonSecond , cardz ,isgameover , fighterPokemon} = useContext(cardContext)

    useEffect(()=> {
        setTimeout(()=>{const sortedCardz = [...cardz].sort((a,b)=> b.power - a.power)
                            if(sortedCardz.some((sCard)=> sCard.id === cardz[0].id )){
                                setFighterPokemonSecond(sortedCardz[0])
                            }},1000)
}
,[isgameover,cardz])
    return null
}
export default botAi