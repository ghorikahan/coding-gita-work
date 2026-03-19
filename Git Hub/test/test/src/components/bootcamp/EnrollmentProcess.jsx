import React from 'react';
import './EnrollmentProcess.css'; // Make sure to import your CSS file

const EnrollmentProcess = () => {
  return (
    <div className="enrollment-process">
      <h2>Enrollment Process</h2>
      <ol>
        <li className="step">
          <span className="step-number">1.</span>
          <div className="step-content">
            <p>Fill out the form to apply</p>
            <ul>
              <li>Send Resume</li>
              <li>Optional (An Introduction Video)</li>
              <li>Contact details [Mobile, Email]</li>
              <li>Name, Engineering Program [CSE/IT]</li>
            </ul>
          </div>
        </li>
        <li className="step">
          <span className="step-number">2.</span>
          <div className="step-content">
            <p>Next, there can be a round based on resume</p>
            <ul>
              <li>Problem-Solving Coding Round Or</li>
              <li>Take-home assignment Or</li>
              <li>Technical Interview on CS Fundamentals</li>
            </ul>
          </div>
        </li>
        <li className="step">
          <span className="step-number">3.</span>
          <div className="step-content">
            <p>You will receive the update within 24 hours.</p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default EnrollmentProcess;
