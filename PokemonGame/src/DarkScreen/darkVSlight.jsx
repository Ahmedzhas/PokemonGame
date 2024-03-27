import React, { useEffect, useState } from 'react'
import './darkVSlight.css'
const darkVSlight = () => {

    const [style,setStyle] = useState(JSON.parse(localStorage.getItem("theme")) ||'white')
    const btnStyle = {marginLeft: '50%',backgroundColor:'white'}
    const handleChangeLight = ()=> {
        setStyle(prev => prev == "dark" ? "white" : "dark")
    }
     
    useEffect(()=>{
        if(style === "dark"){
            const page = document.getElementById("body")
            page.classList.add("dark");
            const theme = JSON.stringify(style)
            localStorage.setItem("theme",theme)
        }
        if(style === "white"){
            const page = document.getElementById("body")
            page.classList.remove("dark");
            const theme = JSON.stringify(style)
            localStorage.setItem("theme",theme)   
        }
    },[style])

  return (
    <>
    <div className='btncontainer' onClick={()=>handleChangeLight()}>
         <div className='modebtn' style={style === 'white'?null:btnStyle}></div>
    </div>
    
    </>
  )
}

export default darkVSlight