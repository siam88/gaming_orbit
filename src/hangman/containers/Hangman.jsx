import React from 'react'
import Figure from '../component/Figure'
import { Header } from '../component/Header'
import Word from '../component/Word'
import WrongLetter from '../component/WrongLetter'

import './Hangman.css'

const Hangman = () => {
    return (
        <div>
           <Header/> 
           <div className="game-container">
               <Figure/>
               <WrongLetter/>
               <Word/>
           </div>
        </div>
    )
}

export default Hangman
