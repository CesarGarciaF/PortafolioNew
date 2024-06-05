import React, { useEffect, useState } from 'react';

interface Video {
    id: {
        videoId: string;
    };
    snippet: {
        thumbnails: {
            high: {
                url: string;
            };
        };
        title: string;
    };
}

const YouTubeVideos: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwCJeZGTpQqW5IT71FNZr-g&maxResults=10&order=viewCount&key=AIzaSyBQuSM8ykyE1_TnYtbgfDchBLSZu0RuaIc")
            .then((result) => {
                if (!result.ok) {
                    throw new Error('Error en la solicitud de la API');
                }
                return result.json();
            })
            .then((data) => {
                console.log(data);
                setVideos(data.items);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="">
            <h1 className='text-3xl font-bold text-center block my-2'>Mis videos!</h1>
            <div className='grid grid-cols-5 gap-4'>
                {videos.map((video) => (
                    <img key={video.id.videoId} src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                ))}
            </div>
        </div>
    );
};

export default YouTubeVideos;
