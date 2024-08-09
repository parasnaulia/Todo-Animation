// src/components/VideoPlayer.js
import React, { useState } from 'react';
import './Video.module.css'; // Import your CSS file for styling

const Video = () => {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };

  return (
    <div className="video-container">
      {isVideoFinished ? (
        <img
          src="../T2.png"
          alt="Finished"
          className="image-display"
          height={420}
          width={330}
        />
      ) : (
        <video
          src="../Video/Taskeasy (2) (1)~5.mp4"
          muted
          autoPlay
          onEnded={handleVideoEnd}
          className="video-player"
          style={{ width: '100%', height: '50%' }}
        />
      )}
    </div>
  );
};

export default Video;
