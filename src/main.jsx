import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

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
