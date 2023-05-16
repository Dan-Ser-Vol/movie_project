import React, { useEffect, useState } from 'react';
import { genresService } from "../../services";
import { IGenre } from "../../interfaces";
import {Button, ButtonGroup} from "@mui/material";

const GenreFilter: React.FC = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const results = await genresService.getGenres();
                setGenres(results);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    const handleGenreClick = (genreId: number) => {
        if (selectedGenres.includes(genreId)) {
            setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
        } else {
            setSelectedGenres([...selectedGenres, genreId]);
        }
    };

    return (
        <div className="genre-filter">
            <div>
                    <ButtonGroup className="genre-buttons" variant="contained" aria-label="outlined primary button group">
                        {
                        genres.map((genre) => (
                        <Button
                            sx={{width: "100%", fontSize: '12px'}}
                            key={genre.id}
                            className={`genre-button ${selectedGenres.includes(genre.id) ? 'active' : ''}`}
                            onClick={() => handleGenreClick(genre.id)}
                        >
                            {genre.name}
                        </Button>
                        ))}
                    </ButtonGroup>
            </div>
        </div>
    );
};

export { GenreFilter };
