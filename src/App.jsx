import { useState } from "react";
import {
    Container,
    CssBaseline,
    Divider,
    Stack,
    ThemeProvider,
    createTheme,
    useMediaQuery,
} from "@mui/material";
import { green, grey, teal } from "@mui/material/colors";

import Header from "./components/Header";
import LevelText from "./components/LevelText";
import Grids from "./components/Grids";
import Footer from "./components/Footer";

export default function App() {
    const [level, setLevel] = useState(0);
    const [play, setPlay] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const playAudio = new Audio();

    const CssBaselineStyles = {
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "html *": {},
                    body: {
                        margin: "0",
                        width: "100%",
                        textAlign: "center",
                        justfifyContent: "center",
                        alignItems: "center",
                        transition: "all 0.2s ease-in",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        transition: "all 0.2s ease",
                    },
                },
            },
        },
    };

    const lightTheme = createTheme({
        palette: {
            mode: "light",
            accent: {
                primary: green[500],
            },
            background: {
                default: teal[100],
                header: "rgba(255, 255, 255, 0.5)",
                primary: grey[900],
            },
        },
        ...CssBaselineStyles,
    });

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            accent: {
                primary: green[900],
            },
            background: {
                default: "#182727",
                header: grey[1000],
                primary: grey[100],
            },
        },
        ...CssBaselineStyles,
    });

    const customTheme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Container component={Stack} direction="column" spacing={4}>
                <LevelText
                    level={level}
                    setLevel={setLevel}
                    setPlay={setPlay}
                    gameOver={gameOver}
                    setGameOver={setGameOver}
                    setShouldAnimate={setShouldAnimate}
                />
                <Divider variant="middle" flexItem />
                <Grids
                    level={level}
                    setLevel={setLevel}
                    play={play}
                    setPlay={setPlay}
                    gameOver={gameOver}
                    setGameOver={setGameOver}
                    shouldAnimate={shouldAnimate}
                    setShouldAnimate={setShouldAnimate}
                    playAudio={playAudio}
                />

                <Footer />
            </Container>
        </ThemeProvider>
    );
}
