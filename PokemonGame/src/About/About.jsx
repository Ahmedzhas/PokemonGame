import React,{useState, useRef} from 'react'
import Nav from '../Nav/Nav'
import useReset from '../PokaGame/useReset'
import { NavLink } from 'react-router-dom'
const About = () => {
  const imgStyle = {
    width:'150px',
    padding:'15px'
  }

  useReset()
  return (
    <>
    <Nav/>
    <div className='gamingdeck'>
      <div className='Aboutp'>
        <div >
        
        <div className='profpic'>
        <img draggable='false' style = {imgStyle} src="../src/PokaGame/Images/12.jpg" alt="" />
          <NavLink draggable='false' to={'/'}>
            <img className='homeimage' style = {imgStyle} src="./src/PokaGame/Images/home.gif" alt="" />
            </NavLink>
          <NavLink draggable='false' to={'/game'}>
            <img className='gameimage' style = {imgStyle} src="./src/PokaGame/Images/gaming.gif" alt="" />
            </NavLink>
        </div>
        </div>
        <h1 className='heading'>Accountant Turned Web Developer</h1>
        <p>
        Hi there! I'm Ahmed Hassan, a passionate newcomer to the world of web development. 
        After 10 years as an accountant, I discovered a strong interest in programming.  
        In December 2023, I embarked on a journey to learn web development, and my passion for it grows every day.
        </p>
        <p>
        I started by focusing on fundamental technologies like HTML, CSS, and JavaScript.
        I then dove deeper into frameworks like React, mastering its Context API and Router library to build interactive web applications. 
        To solidify my learning, I've been working on personal projects a few project along the way like the regular to do lists , A weather app , A calculator
        , And my very first solo built without any kind of "cheating" the pokemon card gaming website.
        </p>
        <p >
        While I understand I'm still early in my development journey, I'm a fast learner with a strong work ethic.
        I'm eager to join a stimulating work environment where I can be challenged, collaborate with a talented team, and continuously improve my skills.
        I'm particularly interested in opportunities that allow me to contribute to building dynamic web apps, 
        and potentially even delve into game development in the future.

        If you're looking for a dedicated and enthusiastic web developer, I'd love to hear from you.
        Reach out to me at <a href="mailto:ahmed.hassangomaa300@gmail.com">ahmed.hassangomaa300@gmail.com</a> .
        </p>

      </div>

    </div>
    </>
  )
}

export default About