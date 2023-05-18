import {FC, useEffect} from 'react';
import {Box, Grid, Paper, styled} from "@mui/material";

import {GenreFilter, MoviesList} from "../../components";
import YearsInput from "../../components/YearsInput";
import {CheckGenre} from "../../components";
import {genres} from "../../utils/differentData";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";


const PositionSticky = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    background: theme.palette.primary.main,
    height: 'calc(100vh - 40px)',
    position: 'sticky',
    boxSizing: 'border-box',
    top: theme.spacing(2)
}));


const Home: FC = () => {
    const {page} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()
    console.log('home', page)
    useEffect(() => {
    dispatch(movieActions.getAll(page))
    }, [dispatch]);

    return (
        <Box sx={{flexGrow: 1, marginTop: 2,}}>
            <Grid container spacing={2}>
                <Grid item xs={12} display={"flex"} sx={{flexWrap: 'wrap'}}>
                    {
                        genres.map(genre=> <CheckGenre key={genre.id} genre={genre} page={page}/>)
                    }

                </Grid>
                <Grid item xs={12} md={10}>
                    <Paper variant="outlined" sx={{backgroundColor: '#afa89f'}}>
                        <MoviesList/>
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