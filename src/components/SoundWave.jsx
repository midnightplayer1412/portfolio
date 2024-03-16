import React from 'react';

const SoundWave = ({ muted, numBars = 350 }) => {
    const musicBars = Array.from({ length: numBars }, (_, i) => (
      <div
        key={i}
        className="bar"
        style={{
          animationDuration: `${Math.random() * (0.7 - 0.2) + 0.2}s`,
          animationPlayState: muted ? 'paused' : 'running',
        }}
      />
    ));
  
    return <div className="sound-wave">{musicBars}</div>;
  };
  
  export default SoundWave;
