import React, { useState } from 'react';

const coursesData = {
    "Git & GitHub": [
      "Intro to Git & Branches",
      "Working with GitHub",
      "Basic Git commands",
      "Creating first PR",
      "Resolving merge conflicts",
      "Rebasing, cherry-picking",
    ],
    "Design for Developers": [
      "Overview of wireframes",
      "Intro to Figma Design",
      "Crash course on how to design",
      "Frames & Autolayout",
      "Styles & Libraries",
      "Variables",
      "Prototyping",
      "Plugins",
    ],
      "HTML": [
        "Introduction to HTML",
        "HTML Block and Inline Elements",
        "HTML Tags: headings, paragraphs, lists",
        "HTML List",
        "HTML Table",
        "HTML Forms and Input Elements",
        "HTML5 Semantic Elements",
        "Advanced HTML Topics",
        "HTML and CSS Integration",
        "SEO Basics & HTML Best Practices",
      ],
      "CSS": [
        "Introduction to CSS",
        "CSS Selectors",
        "Font Properties in CSS",
        "Text Properties in CSS",
        "CSS Inheritance",
        "CSS Colors",
        "Box Model",
        "CSS Positioning",
        "CSS Values & Sizing",
        "CSS Overflow",
        "Organizing CSS",
        "Debugging HTML & CSS",
        "CSS Flexbox",
        "CSS Grid",
        "Responsive Design",
        "Advanced Styling Techniques",
        "CSS Layout Techniques",
        "Integrating CSS with JavaScript",
      ],
      "JavaScript": [
        "JS Variables",
        "JS Datatypes",
        "JS Strings",
        "JS Operators",
        "JS Functions",
        "JS Conditional Statements",
        "JS Control Statements",
        "JS Arrays",
        "JS Objects",
        "JS DOM",
        "JS Events",
        "JS Advanced Arrays",
        "JS Advanced Objects",
        "JS Storage",
        "JS ES6",
        "Functional Programming",
        "Pure functions",
        "First class functions",
        "Higher order functions",
        "JS Recursion",
        "JS Anonymous Function",
        "JS Immediately Invoked Function Expression",
        "JS Object Oriented Introduction",
        "JS Prototypal Inheritance",
        "JS Closures & Scope",
        "Asynchronous JavaScript",
        "JS Event Loops",
        "JS Async & Callbacks",
        "JS Promises",
        "JS APIs",
        "Axios GET, POST & PUT",
      ],
  
    "React Module": [
      "Introduction to React",
      "Create React App | Vite",
      "React App using Babel",
      "JSX | Styling React apps",
      "Components",
      "Props and State",
      "Component Lifecycle",
      "React Hooks",
      "useState",
      "Rules of hooks",
      "useEffect | useLayoutEffect",
      "useContext",
      "useCallback",
      "useMemo",
      "useRef",
      "useReducer",
      "React.memo",
      "& all the other hooks",
      "Fetching data from an API",
      "useEffect hook to fetch the data from an API",
      "Introduction to Axios",
      "Making GET Requests",
      "Making POST Requests",
      "Additional Configuration Options",
      "Event Handling",
      "Higher Order Component",
      "Pure Component",
      "Render Props",
      "Refs",
      "Routing",
      "React Forms",
      "Redux in React: Intro",
      "Store, Action, Reducers",
      "React Redux",
      "Redux Toolkit",
      "Introduction to Material UI",
      "Using Chakra UI",
      "Tailwind CSS framework",
      "Alternative CSS Frameworks for React",
    ],
  
      "Node.js": [
        "Introduction to Node.js",
        "NodeJS Architecture and working, Concept of thread",
        "Introduction to NodeJS Module System",
        "Global Object, Modules, creation and loading of modules",
        "Commonjs & es moduling",
        "Path Module, OS Module and File System Module",
        "NodeJs ThreadPool and LibUV",
        "HTTP & HTTPS module",
        "Events in Nodejs",
        "Basic server built using NodeJS",
        "Introduction to Node Package Manager (NPM)",
      ],
      "Express": [
        "Introduction to Express",
        "Building Your First Express Web Server",
        "RESTful Services & API",
        "What is an API",
        "What is REST",
        "Alternatives of REST",
        "API structures | Message structure | Versioning | Crud",
        "Curl, Postman",
        "Automate server",
        "Environment Variables (.env)",
        "Parameters",
        "Handling HTTP Request & Calling Endpoints Using Postman",
        "Middleware",
        "CORS",
        "Clean Error Handling",
        "Validation Errors",
      ],
      "Auth": [
        "Intro to Auth",
        "Password Encryption",
        "JWT",
        "Passport.js",
      ],
      "API Gateway": [
        "Intro to API Gateways",
        "Rate limit",
        "Forward Proxy",
        "Reverse Proxy",
        "Authorization",
      ],
      "Web Sockets, Socket.IO": [
        "Understanding Web Sockets",
        "Building real-time applications with Socket.IO",
      ],
      "Database": [
        "Introduction To Database",
        "File Based Storage System",
        "What is Schema including ER diagrams",
        "Intro to DBMS",
        "Intro to Data Models",
        "DBMS Classification: Relational & Non relational",
        "MySQL, Postgresql, MongoDB, Redis",
        "Overview of MongoDB Atlas",
        "Understanding how MongoDB Works",
        "Distinction Between JSON and BSON Data Formats",
        "Advanced Insert Operations in MongoDB",
        "Advanced Read Operations in MongoDB",
        "How to Import and Export of JSON Documents in MongoDB",
        "Comparison Operators in MongoDB",
        "Understanding Cursors in MongoDB",
        "Logical Operators in MongoDB",
        "expr operators",
        "Element Operators in MongoDB",
        "Managing Embedded Documents (Arrays and Objects)",
        "Comparing all and elemMatch Operators",
        "Advanced Update Operations in MongoDB",
        "Execution of Delete Operations in MongoDB",
        "Indexes in MongoDB",
        "Aggregation Framework in MongoDB",
        "group Operator in MongoDB",
        "Sorting Data with the sort Operator",
        "project Operator - Using it to shape the data",
        "push Operator",
        "unwind Operator",
        "addToSet, limit, and sort Operators",
        "filter Operator",
        "MongoDB Atlas and Compass",
      ],
      "Deployment and Monitoring": [
        "Serverless Architecture",
        "Application Monitoring and Logging",
      ],
  
    "Capstone Project Overview": [
      "Finalizing a problem to solve",
      "Coming up with useful feature that solves a problem",
      "Creating a design of the solution in Figma",
      "Get it reviewed",
      "After Review start building as per approved plan",
      "Do regular PR's as per plan",
      "You can also contribute to other's Projects through PR",
      "Deploy React App on Netlify, Vercel, Render, AWS or other platform",
      "Node Server on Render, AWS or other platform",
      "MongoDB on MongoDB Atlas",
      "Create Documentation for APIs from Postman",
    ]
  }

const CourseDetails = () => {
  const [activeCourse, setActiveCourse] = useState(null);

  const handleCourseClick = course => {
    setActiveCourse(course);
  };

  return (
    <div className="course-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Subjects</h2>
        <nav className="course-nav">
          {Object.keys(coursesData).map(course => (
            <button
              key={course}
              className={`course-item ${activeCourse === course ? 'active' : ''}`}
              onClick={() => handleCourseClick(course)}
            >
              {course}
            </button>
          ))}
        </nav>
      </aside>
      <main className="syllabus-container">
        {activeCourse && (
          <div className="syllabus">
            <h2 className="syllabus-title">{activeCourse}</h2>
            <ul className="syllabus-list">
              {(Array.isArray(coursesData[activeCourse]) ? coursesData[activeCourse] : Object.entries(coursesData[activeCourse])).map((item, index) => {
                const topic = Array.isArray(item) ? item[0] : item;
                const details = Array.isArray(item) ? item[1] : null;
                return (
                  <li key={index} className="syllabus-topic">
                    {topic}
                    {details && <ul className="syllabus-sublist">
                      {details.map((subitem, subindex) => (
                        <li key={subindex}>{subitem}</li>
                      ))}
                    </ul>}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </main>

      <style jsx>{`
        .course-container {
          display: flex;
          max-width: 100%;
          font-family: 'Roboto', sans-serif;
        }
        .sidebar {
          flex-basis: 250px;
          background-color: #f7f7f7;
          padding: 20px;
          height: 100vh;
          overflow-y: auto;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }
        .sidebar-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .course-nav {
          display: flex;
          flex-direction: column;
        }
        .course-item {
          background: none;
          border: none;
          text-align: left;
          padding: 10px;
          width: 100%;
          font-size: 18px;
          color: #333;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .course-item:hover, .course-item.active {
          background-color: #dedede;
        }
        .syllabus-container {
          flex-grow: 1;
          padding: 20px;
          overflow-y: auto;
        }
        .syllabus {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        .syllabus-title {
          font-size: 28px;
          color: #333;
          margin-bottom: 20px;
        }
        .syllabus-list, .syllabus-sublist {
          list-style: none;
          padding: 0;
        }
        .syllabus-topic {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .syllabus-sublist li {
          font-weight: normal;
          margin-left: 20px;
          margin-bottom: 5px;
        }
        @media (max-width: 768px) {
          .course-container {
            flex-direction: column;
          }
          .sidebar {
            height: auto;
            width: 100%;
            padding: 10px;
          }
          .syllabus-container {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default CourseDetails;
