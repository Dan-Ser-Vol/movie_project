import * as React from 'react';
import {FC, useEffect} from 'react';
import {Box, Grid} from "@mui/material";

import {movieActions} from "../../redux";
import {MovieCard} from "../MovieCard";
import {PaginationControlled} from "../Pagination";
import {MyLoader} from "../Loader";
import {useAppDispatch, useAppSelector} from "../../hooks";




const MoviesList: FC = () => {

    const {results, isLoading, totalPages, page, isFilterResult, genreId} = useAppSelector((state) => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(  isFilterResult === 'byGenre1') {
            console.log('list')
            dispatch(movieActions.selectByGenre({genreId, page}))
        }
        if(  isFilterResult === 'byGenre2') {
            console.log('list')
            dispatch(movieActions.selectByGenre({genreId, page}))
        }
        if(  isFilterResult === 'byGenre') {
            console.log('list')
            dispatch(movieActions.selectByGenre({genreId, page}))
        }else {
            dispatch(movieActions.getAll(page))
        }
    }, [dispatch, page,isFilterResult, genreId]);


    const setPages = (pages: number) => {
        dispatch(movieActions.setPage(pages))
    }


    return (
        <Box sx={{padding: '10px'}}>
            {
                isLoading ?
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                        <MyLoader/>
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
                <PaginationControlled page={page} setPage={setPages} totalPages={totalPages}/>
            </Box>
        </Box>
    );
};

export {MoviesList};
