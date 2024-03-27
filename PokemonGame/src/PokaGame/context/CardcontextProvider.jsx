import react , {useState} from 'react'
import CardContext from './Context'

const CardContextProvider = ({children}) => {
    const [fighterPokemon , setFighterPokemon] = useState([]);
    const [fighterPokemonSecond , setFighterPokemonSecond] = useState([]);
    const [gamestate , setGamestate] = useState(false)
    const [lefthealth , setLefthealth] = useState(200)
    const [righthealth , setRighthealth] = useState(200)
    const [winner , setWinner] = useState("NONE")
    const [cards , setCards] = useState([])
    const [cardz , setCardz] = useState([])
    const [isgameover , setIsgameover] = useState(true)
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////the card object


    

///////////////////////////////// function logic

    return (
        <CardContext.Provider value={{
            righthealth , setRighthealth,lefthealth , setLefthealth , fighterPokemon , 
            setFighterPokemon,gamestate,setGamestate,fighterPokemonSecond , setFighterPokemonSecond,
            setCards ,cards , cardz , setCardz ,winner,setWinner ,isgameover ,setIsgameover
            }}> 
            {children}
        </CardContext.Provider>
    )
}
export default CardContextProvider
