import {useEffect, useState} from 'react';
import {IMovie} from '../../interfaces';
import {MovieInfo} from '../MovieItem';
import {Grid} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const MovieDetails = () => {
    const [movie, setMovie] = useState<IMovie | null>(null);
    const {videos} = useAppSelector((state) => state.movieReducer)
    const dispatch = useAppDispatch()

    const sliceVideos = videos?.slice(0, 2);


    useEffect(() => {
        const storedMovies = localStorage.getItem('movies');
        if (storedMovies) {
            const parsedMovies: IMovie = JSON.parse(storedMovies);
            dispatch(movieActions.getVideoById(parsedMovies.id))
            setMovie(parsedMovies)
        }
    }, [dispatch]);


    return (
        <Grid container spacing={2} sx={{height: '100%', display:  'flex', marginTop: '20px'}}>
            <Grid md={12} item sx={{height: '60%'}}>
                {
                    movie && <MovieInfo movie={movie}/>
                }
            </Grid>
            {
                sliceVideos && sliceVideos.map(video=>(
                    <Grid key={video.key} md={6} xs={12} item  sx={{ display: "flex",height: '60%', marginTop: '50px'}} >
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={'name'}
                            // frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </Grid>
                ))
            }

        </Grid>
    );
};

export {MovieDetails};
