import { useContext , useEffect } from "react"
import cardContext from "../context/Context"


const HealthBar = () => {
    const {lefthealth , cards , cardz} = useContext(cardContext)
    const style = {
        backgroundImage: 'linear-gradient(to right, #c64234, #e06666, #990000)',
        borderRadius: '5px',
        marginBottom: '5px',
        width: `${lefthealth/2}%`,
        height: '100%',
    }
    return (
        <>
        {cards.length > 0 && cardz.length > 0 &&
        <div className="healthmaincontainer">
            
        <div style={style}>
            
            </div>
                </div>    
       
        }

        </>
    )
}

export default HealthBar