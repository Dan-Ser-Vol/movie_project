import React, {FC} from "react";
import Rating from "@mui/material/Rating";

import {Box, Card, CardContent, CardHeader, CardMedia, Typography} from '@mui/material';

import {IMovie} from "../../interfaces";
import {LongMenu} from "../Menu";

interface IProps {
    movie: IMovie
}

const MovieCard:FC<IProps> = ({movie}) => {
    return (
        <Card sx={{minHeight: 500, position: 'relative' }}>
            <CardHeader
                sx={{position: 'absolute', right: 0}}
                action={
                <LongMenu >
                    add to favorite
                </LongMenu >
                }
            />
            <CardMedia
                component="img"
                height="330"
                image={ `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
            />
            <CardContent>
              <Box sx={{height: 70}}>
                  <Typography variant="h5" color="text.secondary">
                      {movie.title}
                  </Typography>
              </Box>
                <Box>
                    <Typography variant="h6">Rating: {movie.vote_average}</Typography>
                    <Rating  defaultValue={movie.vote_average} max={10} />
                </Box>
            </CardContent>
        </Card>
    );
}

export {
    MovieCard
}