import {FC, useEffect} from 'react';
import {Box, Grid} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieCard} from "../MovieCard";
import {PaginationControlled} from "../Pagination";
import * as React from "react";
import {MyLoader} from "../Loader";

interface IProps {
}

const MoviesList: FC<IProps> = () => {
    const {results, isLoading} = useAppSelector((state) => state.movieReducer);
    const [page, setPage] = React.useState(1);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll(page));
    }, [dispatch, page]);


    return (
        <Box sx={{padding: '10px'}}>
            {
                isLoading ?
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                    <MyLoader />
                    </Box>
                    :
                    <Grid container spacing={1}>
                        {results.map((movie) => (
                            <Grid item xs={12} sm={6} md={4} key={movie.id}>
                                <MovieCard movie={movie}/>
                            </Grid>
                        ))}
                    </Grid>
            }

            <Box>
                <PaginationControlled page={page} setPage={setPage}/>
            </Box>
        </Box>
    );
};

export {MoviesList};
