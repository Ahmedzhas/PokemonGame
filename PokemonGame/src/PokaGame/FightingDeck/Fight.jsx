import React , {useContext, useState} from 'react'
import cardContext from '../context/Context'
//delete chosen cards from player's decks

const Fight = () => {
  const {lefthealth , righthealth , setLefthealth , setRighthealth ,setCards,setCardz,
    fighterPokemon , fighterPokemonSecond ,setFighterPokemon,setFighterPokemonSecond ,
     setGamestate ,isgameover,cardz,cards} = useContext(cardContext)
     
    const startFight = ()=> {
      if(fighterPokemon.power > 0 && fighterPokemonSecond.power > 0) { 
        setGamestate(true)  
        const result = fighterPokemon.power - fighterPokemonSecond.power
        result < 0 && lefthealth+result >= 0 ? setLefthealth(prev=> prev+result) : lefthealth+result <= 0 ?setLefthealth(0):'';
        result > 0 && righthealth-result >= 0 ? setRighthealth(prev => prev-result): righthealth-result <= 0 ? setRighthealth(0):'';
        const remainingCardsOne = cards.filter(card => card.id !== fighterPokemon.id)
        const remainingCardsTwo = cardz.filter(card => card.id !== fighterPokemonSecond.id)
        setCards(remainingCardsOne)
        setCardz(remainingCardsTwo)
        setFighterPokemon([])
        setFighterPokemonSecond([]) 
        setGamestate(false) 
    }  
  }
  const cardPicked = fighterPokemon.length === 0 || fighterPokemonSecond.length === 0

    return (
      <>
      {
        cards.length === 0 && cardz.length === 0 && isgameover === false &&
        <div className='fight'><h1>Loading Deck ...</h1></div>
      }
      {
      cardPicked && isgameover === false && cardz.length > 0 && cards.length > 0 &&
      <div className='fight'><h1>Choose Your Fighters</h1></div>
      }
      {
      fighterPokemon.power > 0 && fighterPokemonSecond.power > 0 && isgameover === false &&
       <div className='fight' onClick={()=>startFight()}><h1>Fight</h1></div>
      }

      </>
    )
 
}

export default Fight