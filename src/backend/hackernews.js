export const getTopStories = async () => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    const stories = await response.json();
    return stories.slice(0,10);
};

export const getItem = async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const items = await response.json();
    return items;
};


