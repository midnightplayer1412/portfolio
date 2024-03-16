import React, { useMemo } from 'react';

const StarGalaxy = () => {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const starCount = 1000;
  const boxShadowStyles = useMemo(() => {
    let styles = '';

    for (let i = 0; i < starCount; i++) {
      styles += `${randomNumber(-100, 100)}vw ${randomNumber(-100, 100)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff, `;
    }

    return styles.substring(0, styles.length - 2);
  }, []); // Empty dependency array to ensure it only runs once

  const starStyle = {
    boxShadow: boxShadowStyles,
  };

  return (
    <>
      <div className="star" style={starStyle}></div>
    </>
  );
};

export default StarGalaxy;