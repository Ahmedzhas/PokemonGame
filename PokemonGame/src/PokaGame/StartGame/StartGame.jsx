import React, { useContext, useEffect } from 'react'
import cardContext from '../context/Context'
import { NavLink } from 'react-router-dom'

const StartGame = () => {
    const {cards , cardz ,setLefthealth ,setRighthealth,
      setWinner ,setIsgameover , isgameover
    } = useContext(cardContext)
    const handleClick = ()=> {
        setWinner('NONE')
        setLefthealth(200)
        setRighthealth(200)
        setIsgameover(false)
    }
  return (
    <>
    {cards.length === 0 && cardz.length === 0 && isgameover === true &&
    <h1 className='fight' onClick={()=>handleClick()}>Start</h1>
    }
    { cards.length === 0 && cardz.length === 0 && isgameover === true &&
      <div>
        <NavLink className={({isPending}) => { return isPending?'':'welcome';}} to={`/`}><h1 className='fight'>Main</h1></NavLink>
      </div>  
    }
    {cards.length  === 0 && cardz.length === 0 && isgameover === true &&
      <div>
        <NavLink className={({isPending}) => { return isPending?'':'welcome';}} to={`/about`}><h1 className='fight'>About</h1></NavLink> 
      </div>
    }
    </>
    
  )
}

export default StartGame