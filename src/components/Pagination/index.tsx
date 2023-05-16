import React, {FC} from "react";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack';
import {useAppSelector} from "../../hooks";
import {Box} from "@mui/material";

interface IProps {
    page: number
    setPage: (page:number) => void
}

const PaginationControlled:FC<IProps> = ({ page ,setPage}) => {

    const {totalPages} = useAppSelector(state => state.movieReducer)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <Typography variant={"h4"} mt={2} color={"white"} fontWeight={"bold"}>Page: {page}</Typography>
      <Box>
          <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"

              color="primary"
              size="large"
              showFirstButton
              showLastButton
              sx={{border:'2px'}}
          />
      </Box>
        </Stack>
    );
}

export {
    PaginationControlled
}