import { useEffect } from "react";
import PrintCurrentLevel from "./PrintCurrentLevel";
import { inputs } from "../main";

export default function Heading({
    level,
    setLevel,
    setPlay,
    gameOver,
    setGameOver,
    setShouldAnimate,
}) {
    function getRandomItem() {
        const randomIndex = Math.floor(Math.random() * inputs.length);
        const item = inputs[randomIndex];
        return item;
    }

    useEffect(() => {
        const handleStartGame = () => {
            setLevel((prevLevel) => {
                if (prevLevel === 0) {
                    setPlay([getRandomItem()]);
                    setShouldAnimate(true);
                    return prevLevel + 1;
                }
                return prevLevel;
            });
        };

        const handleKeyDown = (event) => {
            if (event.key === "Enter" || event.key === " ") {
                handleStartGame();
            }
        };

        const handleTouchStart = () => {
            handleStartGame();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("touchstart", handleTouchStart);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return (
        <div className="heading-container">
            <PrintCurrentLevel
                level={level}
                setLevel={setLevel}
                gameOver={gameOver}
                setGameOver={setGameOver}
            />
        </div>
    );
}
