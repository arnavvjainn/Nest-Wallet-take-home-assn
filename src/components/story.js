import React from 'react';

const Story = ({ story, index }) => {
    const storyStyle = {
        textAlign: 'left',
        paddingLeft: '10px' 
      };
    return (
        <div style={storyStyle} >
            <div style={{ padding: '10px'}}>
          <div style={{ fontSize: '20px' }}>{index + 1}. {story.title}</div>
          <div style={{ fontSize: '14px' }}>
            {story.score} points by {story.by}
            {story.time} ago | {story.descendants} comments
          </div>
        </div>
        </div>
      );
};

export default Story;