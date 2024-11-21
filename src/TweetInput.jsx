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
        placeholder="What's happening?"
      />
      <button type="submit">Tweet</button>
    </form>
  );
}

export default TweetInput;