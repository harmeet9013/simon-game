import { useState, useEffect, Fragment } from "react";
import { Divider } from "@mui/material";

import { inputs } from "../main";
import ChangeSongs from "./ChangeSongs";
import RenderButtons from "./RenderButtons";

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
    let playerIndex = 0;

    const [highlightedButton, setHighlightedButton] = useState("");

    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * inputs.length);
        const item = inputs[randomIndex];
        return item;
    };

    const playSequence = () => {
        setTimeout(() => {
            for (let i = 0; i < play.length; i++) {
                setTimeout(() => {
                    setTimeout(() => {
                        setHighlightedButton(play[i]);
                        ChangeSongs(play[i] + ".mp3", playAudio, false);
                    }, 800);
                    setTimeout(() => {
                        setHighlightedButton("");
                    }, 1600);
                }, i * 500);
            }
        }, 100);
    };

    const checkGame = (button) => {
        if (play[playerIndex] === button) {
            ChangeSongs(button + ".mp3", playAudio, false);
            playerIndex++;
            if (play.length === playerIndex) {
                playerIndex = 0;
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
    };

    useEffect(() => {
        if (shouldAnimate) {
            playSequence();
            setShouldAnimate(false);
        }
    });

    if (level > 0 && gameOver == false) {
        return (
            <Fragment>
                <RenderButtons
                    checkGame={checkGame}
                    shouldAnimate={shouldAnimate}
                    highlightedButton={highlightedButton}
                />
                <Divider variant="middle" flexItem />
            </Fragment>
        );
    }
}
