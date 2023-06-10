import { AudioFilePaths } from "../main";

export default function ChangeSongs(button, playAudio, gameOver) {
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
