import { inputs } from "../main";
import { useState, useEffect } from "react";
import ChangeSongs from "./ChangeSongs";

export default function Grids({
    level,
    setLevel,
    play,
    setPlay,
    gameOver,
    setGameOver,
    shouldAnimate,
    setShouldAnimate,
    playAudio,
}) {
    let index = 0;

    useEffect(() => {
        if (shouldAnimate === true) {
            playSequence();
            setShouldAnimate(false);
        }
    });

    const [isAnimating, setIsAnimating] = useState("");

    const animateButton = (button) => {
        setTimeout(() => {
            setIsAnimating(button);
            ChangeSongs(button + ".mp3", playAudio, false);
        }, 800);
        setTimeout(() => {
            setIsAnimating("");
        }, 1150);
    };

    const playSequence = () => {
        for (let i = 0; i < play.length; i++) {
            setTimeout(() => {
                animateButton(play[i]);
            }, i * 500);
        }
    };

    const renderButtons = () => {
        const buttons = [];
        for (const button of inputs) {
            buttons.push(
                <div
                    key={button}
                    className="game-button"
                    style={{
                        backgroundColor: button,
                        "&:hover": {
                            backgroundColor: button,
                        },
                        animation:
                            isAnimating === button
                                ? "button-animation 0.5s"
                                : "none",
                    }}
                    onClick={() => {
                        if (!isAnimating) {
                            checkGame(button);
                        }
                    }}
                />
            );
        }
        return buttons;
    };

    function checkGame(button) {
        if (play[index] === button) {
            ChangeSongs(button + ".mp3", playAudio, false);
            index++;
            if (play.length === index) {
                index = 0;
                setPlay((prevInputs) => {
                    return [...prevInputs, getRandomItem()];
                });
                setLevel(level + 1);
                setShouldAnimate(true);
            }
        } else {
            setGameOver(true);
            ChangeSongs(button + ".mp3", playAudio, true);
        }
    }

    function getRandomItem() {
        const randomIndex = Math.floor(Math.random() * inputs.length);
        const item = inputs[randomIndex];
        return item;
    }

    if (level > 0 && gameOver == false) {
        return <div className="boxes-grid">{renderButtons()}</div>;
    }
}
