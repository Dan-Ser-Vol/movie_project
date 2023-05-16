import {FC, useCallback, useState} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components";
import {Box, Container, createTheme, ThemeProvider} from "@mui/material";

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#384D4C',
        },
        secondary: {
            main: '#627BCC',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#627BCC',
        },
        secondary: {
            main: '#384D4C',
        },
    },
});

const MyLayout: FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleThemeChange = useCallback(
        () => {
            setDarkMode(!darkMode);
        },
        [darkMode],
    );

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Container maxWidth="xl" sx={{backgroundColor: darkMode ? 'white' : '#2A2D34', padding: '10px'}}>
                    <Header onThemeChange={handleThemeChange}/>
                    <Outlet/>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export {MyLayout};


