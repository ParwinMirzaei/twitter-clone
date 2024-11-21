import React from 'react';

function Tweet({ tweet }) {
  return <li>{tweet.content}</li>;
}

export default Tweet;