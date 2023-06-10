export default function PrintCurrentLevel({ level, gameOver }) {
    if (level === 0) {
        return (
            <h1 className="headingText">
                Press 'ENTER' or tap anywhere to start the game!
            </h1>
        );
    } else if (gameOver === true) {
        return (
            <h1 className="headingText" style={{ color: "red" }}>
                Wrong answer! Game over!
            </h1>
        );
    } else {
        return <h1 className="headingText">Level {level}</h1>;
    }
}
