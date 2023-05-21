import {FC} from 'react';
import {Box, Button, Grid, Paper, Typography, useTheme} from "@mui/material";
import {IMovie} from "../../interfaces";
import {MyRating} from "../Rating";
import {BackButton} from "../BackButton";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import * as React from "react";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const MovieInfo: FC<IProps> = ({movie}) => {

    const {genres} = useAppSelector((state) => state.genreReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const findGenres = genres.filter(item =>  movie.genre_ids.includes(item.id))
    const releaseDate = movie.release_date?.replace(/-/g, ' ').replace('-', ' ');
    const theme = useTheme();
    const otherUrls ='https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg'
    const imgUrl = movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: otherUrls

    const findGenre =  (id:number) => {
        dispatch(movieActions.setGenreId(id))
        dispatch(movieActions.setIsFilterResults('byGenre'))
        navigate('/')
    }
    const handleClick = () => {
        navigate(`/details/${movie.id}`);
    };

    return (
        <Box>
            {
                movie &&
                <Box>
                    <Grid container spacing={1} sx={{display: 'flex', marginTop: '3px', justifyContent: 'space-between' }}>
                        <Grid item md={4} xs={12}>
                            <Paper elevation={6} sx={{height: '500px', width: "250px", borderRadius: '3px'}}>
                                <img src={imgUrl} alt="poster" width={'400px'} height={'500px'}/>
                            </Paper>
                        </Grid>
                        <Grid item md={7} xs={12} color={theme.palette.text.primary} sx={{position: 'relative'}}>
                            <Typography mb={2} variant={'h4'}>{movie?.title}</Typography>
                            <Typography  mb={2} variant={'h5'}> {movie.overview}</Typography>
                            <Typography variant={'body1'}>Date: {releaseDate}</Typography>
                            <Typography variant={'body1'}>Language: {movie.original_language}</Typography>
                            <Typography variant={'body1'}>Popularity: {movie.popularity}</Typography>
                            {
                                findGenres && findGenres.map(genre => <Button
                                key={genre.id}
                                onClick={()=>findGenre(genre.id)}
                                sx={{backgroundColor: "#EF9947", margin: '10px 0'}}
                                    variant="outlined"
                                >{genre.name}</Button>)
                            }
                            <Typography mb={2}  sx={{display: 'flex', alignItems: 'center', gap: '10px'}} variant={'body1'}><ThumbUpIcon/> {movie.vote_count}</Typography>
                            <Typography variant={'h5'}>Rating: {movie.vote_average}</Typography>
                            < MyRating  rating={movie.vote_average}/>
                            <Box sx={{marginTop: "50px", position: 'absolute', right:2, bottom:2}}>
                                <BackButton/>
                            </Box>
                            <Box>
                                <Button variant="contained" color="success" onClick={handleClick}>More Info</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            }
        </Box>
    );
};

export {MovieInfo};