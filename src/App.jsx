import React, { useState } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';

function App() {
  const [tweets, setTweets] = useState([]);

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="app">
      <h1>This is not Tweeter</h1>
      <TweetInput onAddTweet={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
}

export default App;