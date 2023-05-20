import * as React from 'react';
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";

const MySearch = () => {
    const [value, setValue] = useState<string>('');

    const dispatch = useAppDispatch()

    const inputHandler = () => {
        dispatch(movieActions.search(value))
        setValue('')
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter') {
            event.preventDefault()
            inputHandler()
        }
    };

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
        >
            <InputBase
                sx={{ml: 1, flex: 1, color: 'gray', fontSize: '18px'}}
                placeholder="Search movie"
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={handleKeyPress}
                inputProps={{'aria-label': 'search movie'}}
            />
            <IconButton
                onClick={inputHandler}
                type="button"
                sx={{p: '10px',}}
                aria-label="search"
            >
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}

export {MySearch}
