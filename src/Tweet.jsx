import React from 'react';

const Tweet = ({ content, timestamp, likes, avatarUrl, onLike }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
      <img
        src={avatarUrl}
        alt="avatar"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          marginRight: '10px',
        }}
      />
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{content}</p>
        <p style={{ margin: 0, fontSize: '12px', color: 'gray' }}>{timestamp}</p>
        <button onClick={onLike} style={{ marginTop: '5px' }}>
          ❤️ {likes}
        </button>
      </div>
    </li>
  );
};

export default Tweet;
