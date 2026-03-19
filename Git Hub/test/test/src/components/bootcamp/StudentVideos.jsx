import React from 'react';

const StudentProfiles = () => {
  // ... (previous code for student profiles)

  // YouTube video data
  const youtubeVideos = [
    {
      title: 'Video 1',
      url: 'https://www.youtube.com/embed/qPFxdxCkNaU',
    },
    {
      title: 'Video 2',
      url: 'https://www.youtube.com/embed/OkjruKxKvEI',
    },
    {
      title: 'Video 3',
      url: 'https://www.youtube.com/embed/zEDoFCHmXzE',
    },
  ];

  return (
    <div className="student-profiles">
      {/* ... (previous code for student profiles) */}
      
      {/* Display YouTube videos in cards */}
      <div className="videos">
        <h3>YouTube Videos</h3>
        <div className="video-cards">
          {youtubeVideos.map((video, index) => (
            <div className="video-card" key={index}>
              <iframe
                title={video.title}
                width="300"
                height="200"
                src={video.url}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  Watch {video.title}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfiles;
