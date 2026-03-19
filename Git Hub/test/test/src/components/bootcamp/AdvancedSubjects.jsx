import React, { useState } from 'react';

const advancedCoursesData = {
  "Advanced Frontend Development": {
    "TypeScript": [
      "Introduction to TypeScript",
      "TypeScript with React",
      "Interfaces, Generics, and Decorators"
    ],
    "Progressive Web Apps (PWA)": [
      "Service Workers",
      "Manifest Files",
      "Offline Capabilities and Push Notifications"
    ],
    "State Management": [
      "Advanced Redux: Middleware, Thunks, Sagas",
      "Context API in depth",
      "State Management with MobX"
    ],
    "Frontend Performance Optimization": [
      "Code Splitting",
      "Lazy Loading",
      "Webpack Advanced Configuration"
    ],
    "Frontend Testing": [
      "Unit Testing with Jest",
      "End-to-End Testing with Cypress"
    ],
  },
  "Advanced Backend Development": {
    "Microservices with Node.js": [
        "Building Microservices with Node.js and Express",
        "Communication between Microservices",
        "Microservices Patterns and Best Practices"
      ],
      "Advanced Database Concepts": [
        "NoSQL vs SQL Deep Dive",
        "Database Optimization and Indexing",
        "Advanced Querying Techniques"
      ],
      "GraphQL": [
        "Introduction to GraphQL",
        "Building APIs with GraphQL and Node.js",
        "Integrating GraphQL with Frontend"
      ],
      "Message Brokers and Event-Driven Architecture": [
        "RabbitMQ/Kafka",
        "Event-Driven Design Patterns"
      ],
      "Containerization and Orchestration": [
        "Docker Compose in Development",
        "Kubernetes Advanced Concepts",
        "Service Mesh with Istio or Linkerd"
      ],
      "Serverless Architecture": [
        "Advanced AWS Lambda",
        "Building Serverless APIs",
        "Serverless Framework"
      ],
      "Advanced Authentication and Authorization": [
        "OAuth2 Flows and OpenID Connect",
        "Implementing SSO (Single Sign-On)",
        "Advanced JWT Usage"
      ],
      "API Security": [
        "Securing RESTful and GraphQL APIs",
        "Rate Limiting, API Throttling",
        "API Gateway and Security Policies"
      ],
      "CI/CD Pipelines": [
        "Advanced Jenkins Pipelines",
        "GitOps with ArgoCD or Flux",
        "Building CI/CD for Microservices"
      ],
      "Infrastructure as Code": [
        "Terraform or AWS CloudFormation",
        "Managing Infrastructure with Code",
        "Best Practices for Scalable Infrastructure"
      ],
      "Monitoring, Logging, and Observability": [
        "ELK Stack (Elasticsearch, Logstash, Kibana)",
        "Prometheus and Grafana",
        "Distributed Tracing with Jaeger or Zipkin"
      ],
      "Cloud-Native Applications": [
        "Building Cloud-Native Apps",
        "12-Factor App Methodology",
        "Cloud-Native Security"
      ]
  },
  "Advanced Full Stack Project": {
    "Full Stack Project": [
    "Building a complex full-stack application incorporating microservices, advanced frontend and backend techniques, CI/CD, and deploying to the cloud.",
    "Emphasis on clean code, design patterns, and best practices.",
    "Incorporating automated tests, monitoring, and logging."
  ]},
  "Next.js":{
    "Introduction Topics": [
    "Fundamentals of Next.js",
    "Pages and Routing",
    "Pre-rendering and Data Fetching",
    "Building Static Sites with Next.js",
    "API Routes",
    "Authentication and Authorization",
    "Internationalization and Theming",
    "State Management in Next.js",
    "Performance Optimizations",
    "Deployment and Vercel"
  ]},
};

const AdvancedSubjects = () => {
  const [activeSubject, setActiveSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    setActiveSubject(subject);
  };

  return (
    <div className="course-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Advanced Subjects</h2>
        <nav className="course-nav">
          {Object.keys(advancedCoursesData).map((subject) => (
            <button
              key={subject}
              className={`course-item ${activeSubject === subject ? 'active' : ''}`}
              onClick={() => handleSubjectClick(subject)}
            >
              {subject}
            </button>
          ))}
        </nav>
      </aside>
      <main className="syllabus-container">
        {activeSubject && (
          <div className="syllabus">
            <h2 className="syllabus-title">{activeSubject}</h2>
            <ul className="syllabus-list">
              {Object.entries(advancedCoursesData[activeSubject]).map(([topic, details], index) => (
                <li key={index} className="syllabus-topic">
                  <strong>{topic}</strong>
                  <ul className="syllabus-sublist">
                    {details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
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

export default AdvancedSubjects;
