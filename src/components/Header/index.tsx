import React, {FC} from 'react';
import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Typography, Avatar, Grid
} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

import {MySearch} from "../Search";
import {Switcher} from "../Switcher";

interface IProps {
    onThemeChange: () => void
}


const Header: FC<IProps> = ({onThemeChange}) => {
    return (
        <AppBar position="static" sx={{boxShadow: 'none', borderRadius: '4px'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src="" alt=""/>

                    <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Grid item xs={12} md={2} sx={{display: 'flex', alignItems: 'center'}}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component={RouterLink}
                                    to="/"
                                    sx={{
                                        mr: 6,
                                        display: {xs: 'none', md: 'flex'},
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.2rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                    }}
                                >
                                    Movie Storage
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}
                              sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box sx={{marginRight: "50px"}}>
                                <MySearch/>
                            </Box>
                            <Box>
                                <Switcher onThemeChange={onThemeChange}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Box>
                                <Typography sx={{margin: '10px'}}>User</Typography>
                            </Box>
                            <Box>
                                <Avatar alt="Avatar"
                                        src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"/>
                            </Box>
                        </Grid>
                    </Grid>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export {Header};