import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAnswers = [
    {
      question: "What makes CodingGita's Bootcamp unique compared to others?",
      answer: "CodingGita stands out due to its comprehensive syllabus that covers both front-end and back-end technologies extensively. Our unique approach includes practical, real-world training by industry experts, emphasizing hands-on learning. Additionally, our founder and chief instructor, Neel, brings valuable industry experience and a proven track record in technical instruction."
    },
    {
      question: "How does the payment structure work? Is it flexible?",
      answer: "Our payment structure is highly flexible. You pay monthly, which means you only pay for the months you attend. This allows you to manage your financial commitment better and aligns the costs with the value you receive from the program."
    },
    {
      question: "Can I leave the Bootcamp at any point?",
      answer: "Yes, you have the flexibility to leave the Bootcamp whenever you wish. You are only obligated to pay for the months you attended. This policy is part of our commitment to student satisfaction and confidence in our program quality."
    },
    {
      question: "How does CodingGita ensure student success and job placement?",
      answer: "We offer a unique placement guarantee. If a student, after completing at least 10 months in our boot camp, doesn’t secure a placement offer, we provide a full refund of the fees paid. This underscores our confidence in our curriculum and our commitment to our students' careers."
    },
    {
      question: "How is the enrollment process tailored to student needs?",
      answer: "Our enrollment process, including a resume review and a technical interview, is designed to assess the fit between the student's goals and our program's offerings. This ensures that each student is poised to gain the maximum benefit from our Bootcamp."
    },
    {
      question: "What additional support does CodingGita offer to students?",
      answer: "Beyond the technical training, we provide resume-building sessions, mock interviews, and 24/7 mentorship. Our aim is to holistically prepare our students for the tech industry, not just in technical skills but also in soft skills and career readiness."
    },
    {
      question: "How does CodingGita's Bootcamp cater to different learning paces and styles?",
      answer: "Our curriculum is structured to accommodate different learning styles, with a mix of live classes, tutorials, quizzes, and micro-assignments. We provide recorded classes for flexibility and ensure that every student can learn at a pace that suits them."
    },
    {
      question: "What happens if I'm not satisfied with the Bootcamp?",
      answer: "Our student-centric approach means if you're not satisfied with the Bootcamp, you can discontinue at any time and only pay for the months you've attended. We strive for student satisfaction and value your feedback to continually improve our program."
    },
    {
      question: "When is the next Bootcamp batch starting?",
      answer: "The next batch is scheduled to start on 15th February 2024. Enrollment will close as soon as the seats are filled. The ideal strength for this batch is 31 new members."
    },
    {
      question: "What is CodingGita's placement guarantee policy?",
      answer: "We offer a placement guarantee for students who diligently participate for at least 10 months. If they do not secure a job by the end of their program, we provide a full refund of the fees paid during those months."
    },
    {
      question: "Can you provide details on student success mentored by Neel?",
      answer: "Neels B.Tech 1st year Meentes achieved an average stipend of ₹26,333.33 in full-stack domain profiles, with stipends ranging from ₹15,000 to ₹45,000 in 2023."
    },
    {
      question: "What is the enrollment process for the Bootcamp?",
      answer: "The process involves filling out an application form and submitting a resume, followed by a round based on the resume, which could include coding tests or technical interviews. Notification of the outcome is given within 24 hours."
    },
    {
      question: "What syllabus does the Full Stack Bootcamp cover?",
      answer: "Our comprehensive syllabus includes modules on Git & GitHub, Design for Developers, Frontend and Backend Development, Node.js, Express, Database Management, AWS, Docker, Testing, Spring Boot, and Advanced Frontend and Backend Development. Detailed syllabus information is available on our website."
    },
    {
      question: "Who is the key instructor for the boot camp?",
      answer: "Neel, our Founder and Chief Instructor, is an accomplished technical instructor with extensive experience in full-stack web development."
    },
    {
      question: "Are there any real-world examples of student success?",
      answer: "Yes, we have numerous recommendations from former students along with their projects and success stories, evidencing the effectiveness of our program. Our current batch started in September 2023 and consists of 9 members, all of whom have LinkedIn profiles listed on our site."
    },
    {
      question: "How can I apply for the Bootcamp?",
      answer: "You can apply by filling out the form on our website, submitting your resume, and optionally, an introduction video."
    }
  ];
  
  
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {questionsAnswers.map((qa, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleClick(index)}>
            {qa.question}
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
            {qa.answer}
          </div>
        </div>
      ))}

      <style jsx>{`
        .faq-container {
          margin: 20px;
          padding: 10px;
          font-family: Arial, sans-serif;
        }
        .faq-item {
          margin-bottom: 10px;
        }
        .faq-question {
          cursor: pointer;
          background-color: #f7f7f7;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .faq-answer {
          display: none;
          padding: 10px;
          border: 1px solid #ddd;
          border-top: none;
          border-radius: 0 0 5px 5px;
          background-color: white;
        }
        .faq-answer.open {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default FAQs;
