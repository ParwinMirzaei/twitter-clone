import React, { useState } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';

const App = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (tweetContent) => {
    const timestamp = new Date().toLocaleString(); // Current date and time
    const newTweet = {
      content: tweetContent,
      timestamp: timestamp,
      likes: 0,
      avatarUrl: 'https://via.placeholder.com/50', // Placeholder avatar
    };
    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (index) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].likes += 1;
    setTweets(updatedTweets);
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
