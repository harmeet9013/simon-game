import { RestartAlt, Start } from "@mui/icons-material";
import {
    Button,
    Grow,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { TransitionGroup } from "react-transition-group";

export default function PrintCurrentLevel({
    level,
    setLevel,
    gameOver,
    handleStartGame,
    setGameOver,
}) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const handleClick = () => {
        setLevel(0);
        setGameOver(false);
        handleStartGame();
    };

    const GameButton = styled(Button)(({ theme }) => ({
        padding: "50px",
        borderRadius: "15px",
        fontSize: isMobile ? "24px" : "35px",
        color: theme.palette.text.primary,
        transition: "all 0.2s ease-in",
        border: `2px solid ${theme.palette.action.disabled}`,
        "&:hover": {
            backgroundColor: theme.palette.accent.primary,
        },
    }));

    if (level === 0) {
        return (
            <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <TransitionGroup>
                    <Grow in={true}>
                        <GameButton
                            endIcon={<Start />}
                            onClick={handleStartGame}
                        >
                            Start Game
                        </GameButton>
                    </Grow>
                </TransitionGroup>
            </Stack>
        );
    } else if (gameOver === true) {
        return (
            <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <TransitionGroup>
                    <Grow in={true}>
                        <Typography variant="h2" color={red[800]}>
                            <strong>GAME OVER</strong>
                        </Typography>
                    </Grow>
                    <Grow in={true}>
                        <GameButton
                            onClick={handleClick}
                            endIcon={
                                <RestartAlt
                                    sx={{
                                        transform: "scale(1.5)",
                                    }}
                                />
                            }
                        >
                            Restart Game
                        </GameButton>
                    </Grow>
                </TransitionGroup>
            </Stack>
        );
    } else {
        return (
            <TransitionGroup>
                <Grow in={true}>
                    <Typography variant="h2">
                        Level <strong>{level}</strong>
                    </Typography>
                </Grow>
            </TransitionGroup>
        );
    }
}
