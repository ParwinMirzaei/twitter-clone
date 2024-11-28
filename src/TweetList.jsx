import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets, handleLike }) => {
  return (
    <ul>
      {tweets.map((tweet, index) => (
        <Tweet
          key={index}
          content={tweet.content}
          timestamp={tweet.timestamp}
          likes={tweet.likes}
          avatarUrl={tweet.avatarUrl}
          onLike={() => handleLike(index)}
        />
      ))}
    </ul>
  );
};

export default TweetList;
