import React, { useState } from 'react';

const optionalCoursesData = {
  "AWS (Amazon Web Services) Syllabus": {
    "Introduction to AWS": [
      "Basics of Cloud Computing",
      "Overview of AWS Services",
      "Setting up an AWS Account",
      "AWS Global Infrastructure"
    ],
    "Core AWS Services": [
      "EC2 (Elastic Compute Cloud)",
      "S3 (Simple Storage Service)",
      "IAM (Identity and Access Management)",
      "VPC (Virtual Private Cloud)",
      "RDS (Relational Database Service)",
      "DynamoDB"
    ],
    "AWS Management Tools": [
      "AWS CLI (Command Line Interface)",
      "AWS CloudFormation",
      "AWS CloudWatch"
    ],
    "Networking in AWS": [
      "Route 53",
      "ELB (Elastic Load Balancing)",
      "Direct Connect"
    ],
    "Security in AWS": [
      "AWS Shield",
      "AWS WAF (Web Application Firewall)",
      "Security Best Practices"
    ],
    "AWS DevOps Tools": [
      "AWS CodeCommit",
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodePipeline"
    ],
    "Serverless Architecture in AWS": [
      "AWS Lambda",
      "API Gateway",
      "AWS SAM (Serverless Application Model)"
    ],
    "AWS Project": [
      "Designing and Deploying a Scalable and Fault-Tolerant Web Application"
    ],
  },
  "Docker and Containerization Syllabus": {
    "Introduction to Containers": [
      "Understanding Containers and Docker",
      "Installation and Configuration of Docker",
      "Docker Architecture"
    ],
    "Docker Fundamentals": [
      "Docker Images and Containers",
      "Dockerfile and Docker Compose",
      "Docker Networking",
      "Docker Volumes and Storage"
    ],
    "Docker Orchestration": [
      "Introduction to Kubernetes",
      "Kubernetes Architecture",
      "Deploying Applications with Kubernetes"
    ],
    "Docker in Development": [
      "Setting up a Local Development Environment",
      "Continuous Integration and Continuous Deployment with Docker"
    ],
    "Advanced Docker Concepts": [
      "Docker Security",
      "Docker Monitoring and Logging",
      "Microservices with Docker"
    ],
    "Docker Project": [
      "Building and Deploying a Microservices-based Application"
    ],
  },
  "Testing Syllabus": {
    "Fundamentals of Testing": [
      "Introduction to Software Testing",
      "Types of Testing (Unit, Integration, System)",
      "Test Planning and Design"
    ],
    "Manual Testing": [
      "Test Case Development",
      "Exploratory Testing",
      "Bug Reporting and Management"
    ],
    "Automation Testing": [
      "Introduction to Selenium",
      "Writing Automated Test Scripts",
      "Test Automation Frameworks"
    ],
    "API Testing": [
      "Postman for API Testing",
      "RESTful API Testing Techniques"
    ],
    "Performance Testing": [
      "Introduction to JMeter",
      "Load Testing and Stress Testing"
    ],
    "Advanced Testing Concepts": [
      "Mobile Testing",
      "Security Testing",
      "Test-Driven Development (TDD)"
    ],
    "Testing Project": [
      "Developing and Executing a Comprehensive Test Plan for a Web Application"
    ],
  },
  "Spring Boot Syllabus": {
    "Introduction to Spring Boot": [
      "Spring Framework Overview",
      "Setting up Spring Boot",
      "Spring Boot Architecture"
    ],
    "Core Concepts": [
      "Dependency Injection and Inversion of Control",
      "Spring Boot Auto-Configuration",
      "Spring Boot Starters"
    ],
    "Data Access": [
      "Spring Data JPA",
      "Hibernate with Spring Boot",
      "Transaction Management"
    ],
    "Web Development": [
      "Building RESTful Web Services",
      "Spring MVC",
      "Exception Handling in Spring Boot"
    ],
    "Security": [
      "Spring Security",
      "OAuth2 and JWT"
    ],
    "Microservices with Spring Boot": [
      "Introduction to Microservices",
      "Inter-service Communication",
      "Service Discovery with Eureka"
    ],
    "Testing in Spring Boot": [
      "Unit Testing with JUnit",
      "Integration Testing"
    ],
    "Spring Boot Project": [
      "Developing a RESTful API with Spring Boot"
    ],
  },

};

const OptionalSubjects = () => {
  const [activeSubject, setActiveSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    setActiveSubject(subject);
  };

  return (
    <div className="course-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Optional Subjects</h2>
        <nav className="course-nav">
          {Object.keys(optionalCoursesData).map((subject) => (
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
              {Object.entries(optionalCoursesData[activeSubject]).map(([topic, details], index) => (
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

export default OptionalSubjects;
