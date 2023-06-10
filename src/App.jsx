import { useState } from "react";
import Heading from "./components/Heading";
import Grids from "./components/grids";

export default function App() {
    const [level, setLevel] = useState(0);
    const [play, setPlay] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    return (
        <div>
            <Heading
                level={level}
                setLevel={setLevel}
                setPlay={setPlay}
                gameOver={gameOver}
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
            />
        </div>
    );
}
