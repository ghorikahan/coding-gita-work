import React from "react";
import "./back-landing.css";
import flexible from "../../assests/flexibility.svg";
import expert from "../../assests/expert.svg";
import scalable from "../../assests/scalabe.svg";
import idea from "../../assests/idea.svg";

function Backend_Approach() {
  return (
    <>
      <div className="backend-approches">
        <div className="backend-approches-title">Project Approaches</div>
        <div className="backend-approches-cards">
          <div className="approches-cards">
            <div className="approches-img">
              <img src={flexible} alt="" />
            </div>
            <div className="approches-info">
              <div className="approches-title">Flexibility</div>
              <div className="approches-description">
                Our backend development strategies adapt to suit you. Our team
                of developers utilizes flexible development processes and
                procedures. We can provide as much or as little support as you
                need, adjusting our approach to suit your specific solution
                requirements. As your project progresses through the stages from
                discovery to release, we work in tandem with you, prioritizing
                your goals and clearly defining responsibilities.
              </div>
            </div>
          </div>
          <div className="approches-cards">
            <div className="approches-img">
              <img src={expert} alt="" />
            </div>
            <div className="approches-info">
              <div className="approches-title">Expertise</div>
              <div className="approches-description">
                Our extensive experience and design and development knowledge
                ensures we can get the best results with the right approach.
                Every time. But it’s not just about optimizing the results of
                each project. You want a company you can trust and rely on. When
                you choose Diffico, you unlock the power of reputable expertise
                for every backend development project.
              </div>
            </div>
          </div>
          <div className="approches-cards">
            <div className="approches-img">
              <img src={scalable} alt="" />
            </div>
            <div className="approches-info">
              <div className="approches-title">Scalability</div>
              <div className="approches-description">
                Our backend systems are designed to scale and grow alongside
                your business. As your company evolves, your backend solutions
                will change with it and enable your business to operate at its
                best.
              </div>
            </div>
          </div>
          <div className="approches-cards">
            <div className="approches-img">
              <img src={idea} alt="" />
            </div>
            <div className="approches-info">
              <div className="approches-title">Out-of-the-box thinking</div>
              <div className="approches-description">
                We don’t just create, we innovate. Need better results or have a
                challenging task? Our team uses their creativity to develop
                features that stand out from the rest and bring a fresh
                perspective to the table. With our team’s immense knowledge and
                innovative ideas, we strive to provide custom, cutting-edge
                solutions that help our clients reach their goals. We think
                outside of the box, so you don’t have to.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Backend_Approach;
