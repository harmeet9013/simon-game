import { useState } from "react";
import Heading from "./components/Heading";
import Grids from "./components/Grids";

export default function App() {
    const [level, setLevel] = useState(0);
    const [play, setPlay] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const playAudio = new Audio();

    return (
        <div className="container">
            <Heading
                level={level}
                setLevel={setLevel}
                setPlay={setPlay}
                gameOver={gameOver}
                setGameOver={setGameOver}
                setShouldAnimate={setShouldAnimate}
            />
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
            <p className="desc-para">
                This website is a Simon game, a classic memory game that
                challenges players to remember and repeat a sequence of colors
                and sounds. It uses HTML, CSS, and ReactJS to create the game
                logic and the user interface. ReactJS is a popular JavaScript
                library for creating user interfaces that are fast and dynamic.
                The website has a simple and colorful design that appeals to
                both children and adults.
            </p>
            <h3 className="created-by">by Harmeet Singh</h3>
        </div>
    );
}
