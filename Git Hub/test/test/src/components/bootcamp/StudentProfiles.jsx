import React from 'react';

const StudentProfiles = () => {
  // Data for student profiles
  const students = [
    {
      name: 'Jai Bhatia',
      linkedin: 'https://www.linkedin.com/in/jai-bhatia-409467222/',
    },
    {
      name: 'Patel Krish',
      linkedin: 'https://www.linkedin.com/in/prokrishpatel/',
    },
    {
      name: 'Rushik Patel',
      linkedin: 'https://www.linkedin.com/in/rushik-patel-43446928a/',
    },
    {
      name: 'Arsh Kumar',
      linkedin: 'https://www.linkedin.com/in/arsh-sharma-95ab90220/',
    },
    {
      name: 'Jain Kirtan Sunil',
      linkedin: 'https://www.linkedin.com/in/kirtan-jain-aa2412208/',
    },
    {
      name: 'Hritik Raj',
      linkedin: 'https://www.linkedin.com/in/hritik-raj-60a902230',
    },
    {
      name: 'Yash Patel',
      linkedin: 'https://www.linkedin.com/in/yash-patel-986787222/',
    },
    {
      name: 'Vaishnavi Rathore',
      linkedin: 'https://www.linkedin.com/in/vaishnavi-rathore-/',
    },
    {
      name: 'Darshan Patel',
      linkedin: 'https://www.linkedin.com/in/darshan119/',
    },
  ];

  return (
    <div className="student-profiles">
      <h2>Bootcamp Students</h2>
      <p>
        Bootcamp is starting from 15th Feb 2024, and the ideal strength should be for 31 new members. The current strength of the boot camp started in September 2023 is 9 members.
      </p>
      <div className="student-cards">
        {students.map((student, index) => (
          <div className="student-card" key={index}>
            <div className="student-details">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn Logo"
                className="linkedin-logo"
              />
              <p>{student.name}</p>
            </div>
            <div className="student-links">
              <a href={student.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .student-profiles {
            color: black;
            background-color: white;
            padding: 30px;
            margin: 20px auto;
            max-width: 800px;
            border: 2px solid #000;
            border-radius: 8px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
          }

          .student-profiles h2 {
            border-bottom: 2px solid black;
            padding-bottom: 15px;
            margin-bottom: 30px;
            font-size: 28px;
          }

          .student-profiles p {
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 16px;
            text-align: justify;
          }

          .student-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .student-card {
            width: 30%;
            padding: 10px;
            border: 1px solid black;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .student-details {
            display: flex;
            align-items: center;
          }

          .linkedin-logo {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }

          .student-links {
            margin-top: 10px;
          }

          .student-links a {
            text-decoration: none;
            color: black;
            margin-right: 10px;
          }

          @media (max-width: 600px) {
            .student-profiles {
              padding: 20px;
              margin: 10px;
              max-width: 100%;
            }

            .student-card {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default StudentProfiles;
