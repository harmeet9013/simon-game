import yellow from "./sounds/yellow.mp3";
import blue from "./sounds/blue.mp3";
import red from "./sounds/red.mp3";
import green from "./sounds/green.mp3";
import wrong from "./sounds/wrong.mp3";

export default function ChangeSongs(button, playAudio, gameOver) {
    const AudioFilePaths = [yellow, blue, red, green, wrong];

    const callMe = (item) => {
        playAudio.setAttribute("src", item);
        playAudio.volume = 0.5;
        playAudio.paused ? playAudio.play() : playAudio.pause();
    };

    AudioFilePaths.map((item) => {
        if (gameOver === false && item.split("/").pop() == button) {
            callMe(item);
        } else if (gameOver === true && "wrong.mp3" === item.split("/").pop()) {
            callMe(item);
        }
    });
}
