import {
    Info,
    OpenInNew,
    DarkMode,
    LightMode,
    GitHub,
    Close,
    ChangeCircle,
    Speed,
    Cancel,
} from "@mui/icons-material";
import {
    Backdrop,
    Button,
    Container,
    Fab,
    List,
    Paper,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";
import { Fragment, useState } from "react";

export default function Header({ darkMode, setDarkMode }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [dialOpen, setDialOpen] = useState(false);

    const SourceButton = styled(Button)(({ theme }) => ({
        padding: isMobile ? "10px 20px" : "8px 16px",
        borderRadius: "15px",
        fontSize: isMobile ? "12px" : "18px",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
        border: `2px solid ${theme.palette.action.disabled}`,
        "&:hover": {
            backgroundColor: theme.palette.accent.primary,
        },
    }));

    const CustomDial = styled(SpeedDial)(({ theme }) => ({
        color: theme.palette.text.primary,
    }));

    return (
        <Paper
            elevation={4}
            component={Stack}
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
                borderRadius: "0px",
                padding: isMobile ? "20px 5px" : "30px",
                transition: "all 0.2s ease-in",
                backgroundColor: (theme) => theme.palette.background.header,
            }}
        >
            <Typography
                variant="button"
                sx={{
                    letterSpacing: "5px",
                    fontSize: "2rem",
                }}
            >
                <strong>Simon Game</strong>
            </Typography>

            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                component={Container}
            >
                {isMobile ? (
                    <Fragment>
                        <Backdrop open={dialOpen} />
                        <SpeedDial
                            ariaLabel="MobileActions"
                            sx={{
                                color: (theme) => theme.palette.action.hover,
                                position: "absolute",
                                bottom: 45,
                                right: 25,
                            }}
                            FabProps={{
                                sx: {
                                    bgcolor: (theme) =>
                                        theme.palette.background.paper,
                                    color: (theme) =>
                                        theme.palette.text.primary,
                                    "&:hover": {
                                        bgcolor: (theme) =>
                                            theme.palette.accent.primary,
                                    },
                                },
                            }}
                            icon={<SpeedDialIcon />}
                            open={dialOpen}
                            onClose={() => {
                                setDialOpen(false);
                            }}
                            onOpen={() => {
                                setDialOpen(true);
                            }}
                        >
                            <SpeedDialAction
                                icon={<Info />}
                                tooltipOpen
                                tooltipTitle="Tutorial"
                                onClick={() => {
                                    window.open(
                                        "https://youtu.be/EWJ5uYwQJGU",
                                        "_blank"
                                    );
                                }}
                            />
                            <SpeedDialAction
                                icon={<GitHub />}
                                tooltipOpen
                                tooltipTitle="Source"
                                onClick={() => {
                                    window.open(
                                        "https://github.com/harmeet9013/simon-game/",
                                        "_blank"
                                    );
                                }}
                            />
                            <SpeedDialAction
                                icon={<ChangeCircle />}
                                tooltipOpen
                                tooltipTitle="Theme"
                                onClick={() => {
                                    setDarkMode(!darkMode);
                                }}
                            />
                        </SpeedDial>
                    </Fragment>
                ) : (
                    <Fragment>
                        <SourceButton
                            onClick={() => {
                                window.open(
                                    "https://youtu.be/EWJ5uYwQJGU",
                                    "_blank"
                                );
                            }}
                            startIcon={<Info />}
                        >
                            tutorial
                        </SourceButton>
                        <SourceButton
                            startIcon={<OpenInNew />}
                            onClick={() => {
                                window.open(
                                    "https://github.com/harmeet9013/simon-game/",
                                    "_blank"
                                );
                            }}
                        >
                            Source
                        </SourceButton>
                        <SourceButton
                            onClick={() => {
                                setDarkMode((prevMode) => !prevMode);
                            }}
                            startIcon={darkMode ? <DarkMode /> : <LightMode />}
                        >
                            {darkMode ? "Dark Mode" : "Light Mode"}
                        </SourceButton>
                    </Fragment>
                )}
            </Stack>
        </Paper>
    );
}
