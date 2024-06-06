import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"

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
        <div className="border-b border-neutral-900 pb-2">
            <motion.h1 
            whileInView={{opacity : 1, y : 0}}
            initial={{opacity : 0, y : -100}}
            transition={{duration : 0.5}}
            className="my-20 text-center text-4xl"> Mis videos 
            </motion.h1>
            <motion.div 
            whileInView={{opacity : 1, x : 0}}
            initial={{opacity : 0, x : 100}}
            transition={{duration : 1}} 
            className='grid grid-cols-5 gap-4'>
            {videos.map((video) => (
                <div key={video.id.videoId} className='video-container'>
                    <iframe 
                        width="100%" 
                        height="200" 
                        src={`https://www.youtube.com/embed/${video.id.videoId}`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                        title={video.snippet.title}
                    ></iframe>
                </div>
            ))}
        </motion.div>
        </div>
    );
};

export default YouTubeVideos;
