import './App.css'
import FirstDeck from './PokaGame/FirstPlayingCards/FirstDeck'
import SecondDeck from './PokaGame/SecondPlayingCards/SecondDeck'
import FirstCard from './PokaGame/FightingDeck/FirstCard'
import SecondCard from './PokaGame/FightingDeck/SecondCard'
import HealthBarLeft from './PokaGame/HealthBar/HealthBarLeft'
import HealthBarRight from './PokaGame/HealthBar/HealthBarRight'
import Fight from './PokaGame/FightingDeck/Fight'
import GameOverReset from './PokaGame/FightingDeck/GameOverReset'
import Nav from './Nav/Nav'
import StartGame from './PokaGame/StartGame/StartGame'
function Game() {

  return (
    <>
    <Nav/>
      <div className='GAME'>
      <div className='maincardscontainer'>
        <FirstDeck/>
      </div>
      <div className='gamingdeck'>
          <div className='fightingcards1'>
          <HealthBarLeft/>
          <FirstCard/>
            </div>
          <div >
            <StartGame/>
            <Fight/>
            <GameOverReset/>
          </div>
          <div className='fightingcards2'>
            <HealthBarRight/>
            <SecondCard/>
          </div>
        </div>
      <div className='maincardscontainer'>
      <SecondDeck/>
      </div>
      </div>
    </>
  )
}

export default Game