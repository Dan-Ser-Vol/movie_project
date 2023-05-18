import { FC, useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { Box, Container, createTheme, ThemeProvider} from '@mui/material';



const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#627BCC',
        },
        secondary: {
            main: '#3ABDEB',
        },
        background: {
            default: '#FFFFFF',
        },
        text: {
            primary: '#5F5F5F',
            secondary: '#5F5F5F',
        },
    },
});


const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#384D4C',

        },
        secondary: {
            main: '#548c89',
        },
        background: {
            default: '#FFFFFF',
        },
        text: {
            primary: '#FDC998',
            secondary: '#F0F0F0',
        },

    },
});

const MyLayout: FC = () => {
    const [darkMode, setDarkMode] = useState(true);

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
                <Container maxWidth="xl" sx={{ backgroundColor: darkMode ?  '#2A2D34':'#3ABDEB',   padding: '10px' }}>
                    <Header onThemeChange={handleThemeChange} />
                    <Outlet />
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export { MyLayout };
