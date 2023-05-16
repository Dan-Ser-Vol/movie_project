import {FC} from 'react';
import {Box, Grid, Paper, styled} from "@mui/material";

import {MovieCardSelected, MoviesList} from "../../components";


const SelectedMovie = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 140px)',
    position: 'sticky',
    top: theme.spacing(2)
}));


const Home: FC = () => {
    return (
        <Box sx={{flexGrow: 1, marginTop: 2,}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper variant="outlined" sx={{backgroundColor: '#afa89f'}}>
                        Filter Section
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper variant="outlined" sx={{backgroundColor: '#afa89f'}}>
                        <MoviesList/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SelectedMovie variant="outlined" sx={{backgroundColor: '#afa89f'}}>
                        <MovieCardSelected/>
                    </SelectedMovie>
                </Grid>
            </Grid>
        </Box>
    );
};

export {Home};