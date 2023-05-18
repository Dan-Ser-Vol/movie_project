import React, {FC} from "react";
import Rating from "@mui/material/Rating";
import {Box, Card, CardContent, CardMedia, Typography, useTheme} from '@mui/material';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {genres} from "../../utils/differentData";

interface IProps {
    movie: IMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
    const theme = useTheme()
    const dispatch = useAppDispatch();
    const navigate = useNavigate()


    const otherUrls ='https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg'
    const imgUrl = movie.backdrop_path? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`: otherUrls

    const genreTitle = genres.map(item => {
            if (movie.genre_ids.includes(item.id)) {
                return item.name;
            }else {
                return null
            }
        })
        .filter(name => name !== undefined)
        .join(" ");


    const setMovieSelect = () => {
        localStorage.setItem('movies', JSON.stringify(movie));
        dispatch(movieActions.setSelectMovie(movie))
        navigate('details')
    }

    return (
        <Card sx={{maxHeight: 520, position: 'relative', cursor: 'pointer'}} onClick={setMovieSelect}>
            <CardMedia
                component="img"
                height="330"
                image={imgUrl}
                alt={movie.title}
            />
            <CardContent sx={{backgroundColor: theme.palette.secondary.main}}>
                <Box sx={{height: 70}}>
                    <Typography variant="h5" color="text.secondary">
                        {movie.title}
                    </Typography>
                </Box>
                <Typography color="text.secondary">
                    {genreTitle}
                </Typography>
                <Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant="h6">Rating: {movie.vote_average}</Typography>
                    </Box>
                    <Rating defaultValue={movie.vote_average} max={10}/>
                </Box>
            </CardContent>
        </Card>
    );
}

export {
    MovieCard
}