import React, { useState, useEffect } from 'react'
import Figure from '../component/Figure'
import { Header } from '../component/Header'
import Word from '../component/Word'
import WrongLetter from '../component/WrongLetter'
import { ShowNotification as show } from '../helpers/helpers'
import Notification from '../component/Notification'
import Popup from '../component/Popup'

import './Hangman.css'

const Hangman = () => {
    const words = ['apple', 'ball', 'cat', 'egg'];
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const handleKeyDown = event => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(correctLetters => [...correctLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(wrongLetters => [...wrongLetters, letter])
                    } else {
                        show(setShowNotification)
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [correctLetters, wrongLetters, playable])


    return (
        <>
            <Header />
            <div className="game-container">
                <Figure wrongLetters={wrongLetters} />
                <WrongLetter wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />

            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable}/>
            <Notification showNotification={showNotification} />
        </>
    )
}

export default Hangman
