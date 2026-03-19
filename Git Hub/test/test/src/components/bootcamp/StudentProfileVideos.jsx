import React from 'react';

const studentVideos = [
  { name: 'Pankhuri', url: 'https://www.youtube.com/embed/04-v9xBcLmE' },
  { name: 'Sarthak', url: 'https://www.youtube.com/embed/hhZxfEhXi4Y' },
  { name: 'Shubham', url: 'https://www.youtube.com/embed/zEnAeSD45b0' },
  { name: 'Akanksha', url: 'https://www.youtube.com/embed/Qxm90rdGCFA' },
  { name: 'Akash', url: 'https://www.youtube.com/embed/TIPe9ptFOQM' },
  { name: 'Chandan', url: 'https://www.youtube.com/embed/07-RowiCWcE' },
  { name: 'Anjani', url: 'https://www.youtube.com/embed/QlLCqyx0MxY' },
];

const StudentProfileVideos = () => (
    <div className="student-profiles">
  <div className="video-container">
    {studentVideos.map(({ name, url }) => (
      <div className="video-card" key={name}>
        <iframe 
          src={url} 
          title={name} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        <div className="video-title">{name}</div>
      </div>
    ))}
  </div>
  </div>
);

export default StudentProfileVideos;
