import React from 'react';

const InstructorDetails = () => {
  return (
    <div className="instructor-container">
      <div className="instructor-profile">
        <h2>Neel - Technical Instructor</h2>
        <p>Neel is an exceptional technical instructor with a proven track record of delivering numerous sessions on full-stack web development, covering both frontend and backend aspects. Over the last three years, he has successfully taught more than 350 students, providing comprehensive sessions on both front-end and back-end technologies. His dedication and expertise have significantly contributed to helping these students secure development positions in startups and MNCs.</p>
        <div className="links">
          <a href="https://www.linkedin.com/in/patel-neel-mahesh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/patelneelmahesh" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <style jsx>{`
        .instructor-container {
          padding: 20px;
          font-family: 'Roboto', sans-serif;
          background-color: #f7f7f7;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          max-width: 600px;
          margin: auto;
        }
        .instructor-profile {
          text-align: center;
        }
        h2 {
          color: #333;
          margin-bottom: 20px;
        }
        .links {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 15px;
        }
        .links a {
          text-decoration: none;
          color: #0077b5; /* LinkedIn color */
          font-weight: bold;
        }
        .links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default InstructorDetails;
