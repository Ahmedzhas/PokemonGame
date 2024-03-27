import { useContext , useEffect } from "react"
import cardContext from "../context/Context"


const HealthBar = () => {
    const { righthealth , cards , cardz } = useContext(cardContext)
    const style = {
        backgroundImage: 'linear-gradient(to right, #c64234, #e06666, #990000)',
        borderRadius: '5px',
        marginBottom: '5px',
        width: `${righthealth/2}%`,
        height: '100%',
    }
    return (
        <>{
            cards.length > 0 && cardz.length > 0 &&
            <main className="healthmaincontainer">
                        <div style={style}>
                            </div>
                                </main>
        }
        
   
           
        </>
    )
}

export default HealthBar