import { Button, Container, Stack, styled, useMediaQuery } from "@mui/material";
import { blue, green, red, yellow } from "@mui/material/colors";

export default function RenderButtons(props) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const ColoredButton = styled(Button)(({ theme }) => ({
        backgroundColor: "black",
        padding: isMobile ? "3.5rem" : "5rem",
        borderRadius: "25px",
        border: `10px solid black`,
        transition: "transform 0.4s ease",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
        "@keyframes ScaleAnimation": {
            "0%, 100%": {
                transform: "scale (1)",
                backgroundColor: "",
            },
            "30%": {
                transform: isMobile ? "scale(1.3)" : "scale(1.5)",
                backgroundColor: "white",
            },
        },
    }));

    const handleClick = (e) => {
        const { name } = e.target;
        !props.shouldAnimate && props.checkGame(name);
    };

    return (
        <Container component={Stack} spacing={2}>
            <Stack
                spacing={4}
                direction="row"
                sx={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ColoredButton
                    name="red"
                    disabled={props.shouldAnimate ? true : false}
                    sx={{
                        backgroundColor: red[800],
                        opacity: props.shouldAnimate ? "0.2" : "1",
                        animation:
                            props.highlightedButton === "red"
                                ? "ScaleAnimation 0.5s ease-out"
                                : "",
                        "&:hover": {
                            backgroundColor: red[300],
                        },
                    }}
                    onClick={handleClick}
                />

                <ColoredButton
                    name="blue"
                    disabled={props.shouldAnimate ? true : false}
                    sx={{
                        backgroundColor: blue[800],
                        opacity: props.shouldAnimate ? "0.2" : "1",
                        animation:
                            props.highlightedButton === "blue"
                                ? "ScaleAnimation 0.5s ease-out"
                                : "",
                        "&:hover": {
                            backgroundColor: blue[300],
                        },
                    }}
                    onClick={handleClick}
                />
            </Stack>
            <Stack
                spacing={4}
                direction="row"
                sx={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ColoredButton
                    name="green"
                    disabled={props.shouldAnimate ? true : false}
                    sx={{
                        backgroundColor: green[800],
                        opacity: props.shouldAnimate ? "0.2" : "1",
                        animation:
                            props.highlightedButton === "green"
                                ? "ScaleAnimation 0.5s ease-out"
                                : "",
                        "&:hover": {
                            backgroundColor: green[300],
                        },
                    }}
                    onClick={handleClick}
                />

                <ColoredButton
                    name="yellow"
                    disabled={props.shouldAnimate ? true : false}
                    sx={{
                        backgroundColor: yellow[800],
                        opacity: props.shouldAnimate ? "0.2" : "1",
                        animation:
                            props.highlightedButton === "yellow"
                                ? "ScaleAnimation 0.5s ease-out"
                                : "",
                        "&:hover": {
                            backgroundColor: yellow[300],
                        },
                    }}
                    onClick={handleClick}
                />
            </Stack>
        </Container>
    );
}
