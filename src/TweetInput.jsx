import React, { useState } from 'react';

function TweetInput({ onAddTweet }) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim() !== '') {
      onAddTweet({ content }); 
      setContent(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Seriously, who cares about your tweets?"
      />
      <button type="submit">UNTWEET</button>
    </form>
  );
}

export default TweetInput;