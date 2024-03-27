import React, { useContext, useEffect } from 'react'
import './Welcome.css'
import Nav from '../Nav/Nav'
import useReset from '../PokaGame/useReset'
import {NavLink} from 'react-router-dom'
const Welcome = () => {
  
  useReset()

  return (
    <>
    <Nav/>
    <div className='welcomecontainer'>
      <NavLink draggable='false' className={({isPending}) => { return isPending?'':'welcome';}} to={`/game`}><div>Welcome</div></NavLink>
      </div>
    </>
    
  )
}

export default Welcome