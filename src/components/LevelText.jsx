import PrintCurrentLevel from "./PrintCurrentLevel";
import { inputs } from "../main";
import { Container, Stack } from "@mui/material";

export default function LevelText({
    level,
    setLevel,
    setPlay,
    gameOver,
    setGameOver,
    setShouldAnimate,
}) {
    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * inputs.length);
        const item = inputs[randomIndex];
        return item;
    };

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

    return (
        <Container
            sx={{
                marginTop: "2rem",
            }}
            component={Stack}
            direction="column"
            spacing={4}
        >
            <PrintCurrentLevel
                level={level}
                setLevel={setLevel}
                gameOver={gameOver}
                handleStartGame={handleStartGame}
                setGameOver={setGameOver}
            />
        </Container>
    );
}
