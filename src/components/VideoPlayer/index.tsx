import React, { useEffect, useState } from 'react';
import movieService from "../../services/movie.service";



const VideoPlayer: React.FC = () => {
    const [videoKey, setVideoKey] = useState([]);

    useEffect(() => {
        fetchVideoData();
    }, []);

    const fetchVideoData = async () => {
        try {
         const response = await  movieService.videoById(283995)
            console.log(response.results[0].key);
            // @ts-ignore
            setVideoKey(response);
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
    };

    return (
        <div>
            {videoKey ? (
                <div>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoKey}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div>Loading video...</div>
            )}
        </div>
    );
};

export {VideoPlayer};

