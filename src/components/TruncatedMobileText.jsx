import React, { useState, useEffect } from 'react';

const TruncatedText = ({ text }) => {
  const [isMobile, setIsMobile] = useState(false);
  const MAX_CHARS = 25;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [window.innerWidth]);

  const truncate = (str) => {
    if (str.length <= MAX_CHARS) return str;
    return str.slice(0, MAX_CHARS) + '...';
  };

  return (
      <p className = "itemLink">{isMobile ? truncate(text) : text}</p>
  );
};

export default TruncatedText;
