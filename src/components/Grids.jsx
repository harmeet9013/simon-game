import { Grid, Button } from "@mui/material";
import { styles, inputs } from "../main";
import { useState, useEffect } from "react";

export default function Grids({
    level,
    setLevel,
    play,
    setPlay,
    gameOver,
    setGameOver,
    shouldAnimate,
    setShouldAnimate,
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
        setIsAnimating(button);
        setTimeout(() => {
            setIsAnimating("");
        }, 350);
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
                <Button
                    key={button}
                    component="button"
                    sx={{
                        ...styles.box,
                        backgroundColor: button,
                        "&:hover": {
                            ...styles.box,
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
        }
    }

    function getRandomItem() {
        const randomIndex = Math.floor(Math.random() * inputs.length);
        const item = inputs[randomIndex];
        return item;
    }

    if (level > 0 && gameOver == false) {
        return (
            <div className="boxesGrid">
                <Grid container ml={14} width={600}>
                    {renderButtons()}
                </Grid>
            </div>
        );
    }
}
