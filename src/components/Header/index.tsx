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
import {BackButton} from "../BackButton";

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
                                        color: '#EF9947',
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
                                <Typography sx={{margin: '10px 20px'}}>User</Typography>
                            </Box>
                            <Box>
                                <Avatar alt="Avatar"
                                        src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"/>
                            </Box>

                            <BackButton/>
                        </Grid>
                    </Grid>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export {Header};