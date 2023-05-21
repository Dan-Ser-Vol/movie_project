import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {FC} from "react";


interface IProps {
    rating: number
}

const MyRating:FC<IProps> = ({rating}) => {
    return (
        <Box sx = {{ padding: '10px'}} >
            <Rating name="customized-10" defaultValue={rating} max={20} />
        </Box>
    );
}

export  {MyRating}