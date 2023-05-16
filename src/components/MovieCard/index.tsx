import React, {FC} from "react";
import Rating from "@mui/material/Rating";
import {Box, Card, CardContent, CardHeader, CardMedia, Typography} from '@mui/material';

import {IMovie} from "../../interfaces";
import {LongMenu} from "../Menu";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

interface IProps {
    movie: IMovie
}


const genres = [
    {
        id: 28,
        name: "Action",
    },
    {
        id: 12,
        name: "Adventure",
    },
    {
        id: 16,
        name: "Animation",
    },
    {
        id: 35,
        name: "Comedy",
    },
    {
        id: 80,
        name: "Crime",
    },
    {
        id: 99,
        name: "Documentary",
    },
    {
        id: 18,
        name: "Drama",
    },
    {
        id: 10751,
        name: "Family",
    },
    {
        id: 14,
        name: "Fantasy",
    },
    {
        id: 36,
        name: "History",
    },
    {
        id: 27,
        name: "Horror",
    },
    {
        id: 10402,
        name: "Music",
    },
    {
        id: 9648,
        name: "Mystery",
    },
    {
        id: 10749,
        name: "Romance",
    },
    {
        id: 878,
        name: "Science Fiction",
    },
    {
        id: 10770,
        name: "TV Movie",
    },
    {
        id: 53,
        name: "Thriller",
    },
    {
        id: 10752,
        name: "War",
    },
    {
        id: 37,
        name: "Western",
    }
]


const MovieCard: FC<IProps> = ({movie}) => {
    const {selectedMovies} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch();

    const genreTitle = genres
        .map(item => {
            if (movie.genre_ids.includes(item.id)) {
                return item.name;
            }
        })
        .filter(name => name !== undefined)
        .join(" ");


    const setMovieSelect = () => {
        const length = selectedMovies.length
        console.log(length)
        if (length <= 3 && !selectedMovies.find(item => item.id === movie.id)) {
            dispatch(movieActions.setSelectMovie(movie))
        }
    }

    return (
        <Card sx={{minHeight: 500, position: 'relative', cursor: 'pointer'}} onClick={setMovieSelect}>
            <CardHeader
                sx={{position: 'absolute', right: 0}}
                action={
                    <LongMenu>
                        <Box onClick={setMovieSelect}>
                            Select movie
                        </Box>
                    </LongMenu>
                }
            />
            <CardMedia
                component="img"
                height="330"
                image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
            />
            <CardContent>
                <Box sx={{height: 70}}>
                    <Typography variant="h5" color="text.secondary">
                        {movie.title}
                    </Typography>
                </Box>
                <Typography color="text.secondary">
                    {genreTitle}
                </Typography>
                <Box>
                    <Typography variant="h6">Rating: {movie.vote_average}</Typography>
                    <Rating defaultValue={movie.vote_average} max={10}/>
                </Box>
            </CardContent>
        </Card>
    );
}

export {
    MovieCard
}