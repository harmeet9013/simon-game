import { Container, Stack, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Container
            component={Stack}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{
                cursor: "default",
                opacity: "0.8",
            }}
        >
            <Typography variant="body1">
                This website is a Simon game, a classic memory game that
                challenges players to remember and repeat a sequence of colors
                and sounds. It uses HTML, CSS, and ReactJS to create the game
                logic and the user interface. ReactJS is a popular JavaScript
                library for creating user interfaces that are fast and dynamic.
                The website has a simple and colorful design that appeals to
                both children and adults.
            </Typography>
        </Container>
    );
}
