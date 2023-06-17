export default function PrintCurrentLevel({
    level,
    setLevel,
    gameOver,
    setGameOver,
}) {
    const handleClick = () => {
        setLevel(0);
        setGameOver(false);
    };

    if (level === 0) {
        return (
            <p className="heading-text">
                Press <strong>'ENTER'</strong> or <strong>'Tap'</strong>
                anywhere to start the game!
            </p>
        );
    } else if (gameOver === true) {
        return (
            <div>
                <p className="heading-text" style={{ color: "red" }}>
                    Wrong answer! <br />
                    <strong>Game over!</strong>
                </p>
                <button className="restart-button" onClick={handleClick}>
                    Restart Game
                </button>
            </div>
        );
    } else {
        return (
            <p className="heading-text">
                Level <strong>{level}</strong>
            </p>
        );
    }
}
