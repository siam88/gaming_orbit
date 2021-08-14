import React, { useState, useEffect } from 'react'
import Figure from '../component/Figure'
import { Header } from '../component/Header'
import Word from '../component/Word'
import WrongLetter from '../component/WrongLetter'

import './Hangman.css'

const Hangman = () => {
    const words = ['application', 'programming', 'interface', 'wizard'];
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);


    useEffect(() => {
        const handleKeyDown = event => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                      
                        setCorrectLetters(correctLetters=>[...correctLetters,letter])
           
                    } else {
                        // showNotification();
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        wrongLetters.push(letter);
                        setWrongLetters(wrongLetters=>[...wrongLetters,letter])
                       
                    } else {
                        // showNotification();
                    }
                }
            }
        }
        window.addEventListener('keydown',handleKeyDown )
        return ()=>window.removeEventListener('keydown',handleKeyDown)
    },[correctLetters,wrongLetters,playable])










    return (
        <>
            <Header />
            <div className="game-container">
                <Figure />
                <WrongLetter wrongLetters={wrongLetters}/>
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />

            </div>
        </>
    )
}

export default Hangman
