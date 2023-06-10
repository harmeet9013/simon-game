import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import yellow from "./components/sounds/yellow.mp3";
import blue from "./components/sounds/blue.mp3";
import red from "./components/sounds/red.mp3";
import green from "./components/sounds/green.mp3";
import wrong from "./components/sounds/wrong.mp3";

createRoot(document.getElementById("root")).render(<App />);

export const styles = {
    box: {
        width: 200,
        height: 200,
        backgroundColor: "white",
        marginBottom: "70px",
        marginRight: "70px",
        border: "10px solid black",
        borderRadius: "50px",
        transition: "all 30ms ease-out",
        ":hover": {
            backgroundColor: "",
        },
        ":active": {
            transform: "scale(0.9)",
        },
    },
};

export const inputs = ["red", "blue", "green", "yellow"];

export const AudioFilePaths = [yellow, blue, red, green, wrong];
