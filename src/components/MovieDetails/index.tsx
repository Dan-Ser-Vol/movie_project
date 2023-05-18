import {useEffect, useState} from 'react';
import {IMovie} from '../../interfaces';
import {MovieInfo} from '../MovieInfo';
import {Grid} from "@mui/material";

const MovieDetails = () => {
    const [movie, setMovie] = useState<IMovie | null>(null);


    useEffect(() => {
        const storedMovies = localStorage.getItem('movies');
        if (storedMovies) {
            const parsedMovies: IMovie = JSON.parse(storedMovies);
            setMovie(parsedMovies)
        }
    }, []);

    const youtubeUrl = `https://www.youtube.com/watch?v=eX0KjDFvDAY`;

    return (
        <Grid container spacing={2} sx={{height: '100vh', display:  'flex', marginTop: '20px',flexDirection: 'column'}}>
            <Grid item sx={{height: '100vh'}}>
                {
                    movie && <MovieInfo movie={movie}/>
                }
            </Grid>
            {/*<Grid item >*/}
            {/*    <iframe*/}
            {/*        width="560"*/}
            {/*        height="315"*/}
            {/*        src={`https://www.youtube.com/embed/eX0KjDFvDAY`}*/}
            {/*        title={'name'}*/}
            {/*        // frameBorder="0"*/}
            {/*        allowFullScreen*/}
            {/*    ></iframe>*/}

            {/*    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">*/}
            {/*        Watch Trailer on YouTube*/}
            {/*    </a>*/}
            {/*</Grid>*/}

        </Grid>
    );
};

export {MovieDetails};
