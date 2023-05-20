import {FC, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Box, Button, Grid, Link, Paper, Typography, useTheme} from "@mui/material";
import {MyRating} from "../Rating";

interface IProps {

}

const MovieInfo: FC<IProps> = () => {
    const {movieInfo, page} = useAppSelector(state => state.movieReducer)
    const theme = useTheme()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {id} = useParams<{ id: string }>();
    const parsedId = id && parseInt(id)

    useEffect(() => {
        if (typeof parsedId === "number") {
            dispatch(movieActions.getMovieInfoById(parsedId))
        }
    }, [dispatch, parsedId]);

    const handleGenreClick = (id: number) => {
        dispatch(movieActions.selectByGenre({id, page}))
        navigate('/')

    };

    return (
        movieInfo && <Grid container component="main" sx={{height: '100vh'}}>
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`,

                    backgroundRepeat: 'no-repeat',
                    backgroundColor: "#376673",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item
                  xs={12}
                  sm={8}
                  md={6}
                  component={Paper} elevation={6}
                  sx={{backgroundColor: theme.palette.background.default}}
                  square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                    }}
                >
                    <Typography component="h1" variant="h5" sx={{ color: theme.palette.text.secondary }}>
                        {movieInfo.title}
                    </Typography>

                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                        {movieInfo.tagline}
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 2 }}>
                        {movieInfo.overview}
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 2 }}>
                        {movieInfo.genres.map((genre) => (
                            <Button
                                key={genre.id}
                                variant="outlined"
                                sx={{ m: 1, backgroundColor: theme.palette.text.secondary }}
                                onClick={() => handleGenreClick(genre.id)}
                            >
                                {genre.name}
                            </Button>
                        ))}
                    </Typography>

                    <Box sx={{ fontSize: '18px', color: '#FF6C37', display: 'flex', marginTop: '20px' }}>
                        Budget: <Typography sx={{ marginLeft: '10px', color: '#CAC198' }}>{movieInfo.budget}</Typography>
                    </Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}> Home Page: <Link href={movieInfo.homepage}
                        sx={{marginLeft: '10px', color: '#CAC198'}}>
                        {movieInfo.homepage}
                    </Link></Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}> Original
                        Language: <Typography
                            sx={{marginLeft: '10px', color: '#CAC198'}}>
                            {movieInfo.original_language}
                        </Typography></Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}> Original Title: <Typography
                        sx={{marginLeft: '10px', color: '#CAC198'}}>
                        {movieInfo.original_title}
                    </Typography></Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}> Popularity: <Typography
                        sx={{marginLeft: '10px', color: '#CAC198'}}>
                        {movieInfo.popularity}
                    </Typography></Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}> Status: <Typography
                        sx={{marginLeft: '10px', color: '#CAC198'}}>
                        {movieInfo.status}
                    </Typography></Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}>
                        Production Countries:
                        {
                            movieInfo.production_countries.map((item, idx) => (
                                <Typography key={idx}
                                            sx={{marginLeft: '10px', color: '#CAC198'}}>
                                    {item.name}
                                </Typography>

                            ))
                        }
                    </Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}> Release Date: <Typography
                        sx={{marginLeft: '10px', color: '#CAC198'}}>
                        {movieInfo.release_date}
                    </Typography></Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}> Runtime: <Typography
                        sx={{marginLeft: '10px', color: '#CAC198'}}>
                        {movieInfo.runtime} min
                    </Typography></Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}>
                        Production Countries:
                        {
                            movieInfo.spoken_languages.map((item, idx) => (
                                <Typography key={idx}
                                            sx={{marginLeft: '10px', color: '#CAC198'}}>
                                    {item.name}
                                </Typography>

                            ))
                        }
                    </Box>

                    <Box sx={{fontSize: '18px', color: '#FF6C37', display: 'flex'}}> Vote Count: <Typography
                        sx={{marginLeft: '10px', color: '#CAC198'}}>
                        {movieInfo.vote_count}
                    </Typography>
                    </Box>

                    <MyRating rating={movieInfo.vote_average}/>

                    <Box sx={{
                        mt: 2, display: 'flex',
                        justifyContent: 'space-evely',
                        alignItems: 'center'

                    }}>
                        <Typography sx={{fontSize: '18px', color: '#FF6C37'}}> Production Companies:</Typography>

                        {movieInfo.production_companies.map((company) => (
                            <Typography
                                sx={{marginLeft: '10px'}}
                                key={company.id}
                            >
                                {company.name}
                            </Typography>
                        ))}
                    </Box>

                    <Box  sx={{mt: 2}}>
                        <Link href={movieInfo.homepage} target="_blank" rel="noopener">
                            Movie Website
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export {MovieInfo};

