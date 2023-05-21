import {FC} from 'react';
import {Box, Grid, Paper, styled} from "@mui/material";

import YearsInput from "../../components/YearsInput";
import {CheckGenre, GenreFilter, MoviesList} from "../../components";
import {useAppSelector} from "../../hooks";


const PositionSticky = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    background: theme.palette.primary.main,
    height: 'calc(100vh - 40px)',
    position: 'sticky',
    boxSizing: 'border-box',
    top: theme.spacing(2)
}));


const Home: FC = () => {
    const {genres} = useAppSelector((state) => state.genreReducer)
    return (
        <Box sx={{flexGrow: 1, marginTop: 2,}}>
            <Grid container spacing={2}>
                <Grid item xs={12} display={"flex"} sx={{flexWrap: 'wrap', position: 'relative'}}>
                    {
                        genres && genres.map(genre => <CheckGenre key={genre.id} genre={genre}/>)
                    }

                </Grid>
                <Grid item xs={12} md={10}>
                    <Paper variant="outlined" sx={{backgroundColor: '#afa89f'}}>
                        <MoviesList />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={2}>
                    <PositionSticky variant="outlined" sx={{backgroundColor: '#afa89f'}}>
                        <Paper variant="outlined" sx={{backgroundColor: '#afa89f'}}>
                            <YearsInput/>
                            <GenreFilter/>
                        </Paper>
                    </PositionSticky>
                </Grid>
            </Grid>
        </Box>
    );
};

export {Home};