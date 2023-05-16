import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
const MyRating = () => {
    return (
        <Box>
            <Rating name="customized-10" defaultValue={2} max={10} />
        </Box>
    );
}

export  {MyRating}