import React from 'react'
import {NavLink} from "react-router-dom"
import './Nav.css'
import DarkVSlight from '../DarkScreen/darkVSlight'
const Nav = () => {


  return (
    <>
    <div className="navbarmain">
      <NavLink className={({isActive}) => { return isActive?'selectednv':'navs';}} to={`/`}>Main</NavLink>
      <NavLink className={({isActive}) => { return isActive?'selectednv':'navs';}} to={`/game`}>Game</NavLink>
      <NavLink className={({isActive}) => { return isActive?'selectednv':'navs';}} to={`/about`}>About</NavLink>
      <DarkVSlight/>
    </div>
    </>
  )
}

export default Nav