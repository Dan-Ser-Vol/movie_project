import React, {FC} from 'react';
import {Box, Card, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import {LongMenu} from "../Menu";
import {IMovie} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";

interface IProps {
    movie: IMovie
}

const MovieCardSelected:FC<IProps> = ({movie}) => {

    const dispatch = useAppDispatch()

    const removeMovie = () => {
        dispatch(movieActions.deleteMovie(movie.id))
    }
    return (
        <Card sx={{display: 'flex', marginBottom: '5px', position:"relative"}} >
            <CardMedia
                component= 'img'
                sx={{width: 151}}
                image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="Live from space album cover"
            />
           <Box sx={{position:"absolute", right: '5px', top: '5'}}>
               <LongMenu >
                   <Box onClick={removeMovie}>
                       Delete
                   </Box>
               </LongMenu >
           </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        {movie.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                       Release:  {movie.release_date}
                    </Typography>
                </CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                    <IconButton aria-label="previous">
                        <SkipPreviousIcon/>
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{height: 38, width: 38}}/>
                    </IconButton>
                    <IconButton aria-label="next">
                        <SkipNextIcon/>
                    </IconButton>
                </Box>
            </Box>

        </Card>
    );
}

export {
    MovieCardSelected
}