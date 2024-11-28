import React, { useState } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';

const App = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (content) => {
    const newTweet = {
      content,
      timestamp: new Date().toLocaleString(),
      likes: 0,
      avatarUrl: "https://i.pravatar.cc/40", // Placeholder avatar URL
    };
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  const handleLike = (index) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet, i) =>
        i === index ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <div>
      <h1>Twitter Clone</h1>
      <TweetInput addTweet={addTweet} />
      <TweetList tweets={tweets} handleLike={handleLike} />
    </div>
  );
};

export default App;
