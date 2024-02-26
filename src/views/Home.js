import React, {useEffect, useState} from "react";
import { getTopStories, getItem } from "../backend/hackernews";
import Story from "../components/story";


const Home = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchTopStories = async () => {
            const ids = await getTopStories();
            let data = [];
            for (const id of ids) {
                const item = await getItem(id); 
                data.push(item); 
            }
            setStories(data);
        };
        
        fetchTopStories(); 
    }, []);

    return (
        <div>
            <h1>Hacker News</h1>
            {stories.map((story, index) => (
            <Story key={story.id} story={story} index={index} />
            ))}
        </div>
  );
};

export default Home