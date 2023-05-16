import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";


const MySearch = () => {

    const [value, setValue] = useState<string>('');

    const dispatch = useAppDispatch()

    const inputHandler = () => {
        dispatch(movieActions.search(value))
        setValue('')
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search movie"
                value={value}
                onChange={e=>setValue(e.target.value)}
                inputProps={{ 'aria-label': 'search movie' }}
            />
            <IconButton
                onClick={inputHandler}
                type="button" sx={{ p: '10px', }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export {MySearch}