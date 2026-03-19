import React from "react";
import BootcampRefundPolicy from "./bootcamp/BootcampRefundPolicy";
import EnrollmentProcess from "./bootcamp/EnrollmentProcess";
import StudentProfiles from "./bootcamp/StudentProfiles";
import Placements from "./bootcamp/Placements";
import StudentVideos from './bootcamp/StudentVideos';
import BootcampFees from "./bootcamp/BootcampFees";
import StudentProfileVideos from "./bootcamp/StudentProfileVideos";
import CourseDetails from "./bootcamp/CourseDetails";
import OptionalSubjects from "./bootcamp/OptionalSubjects";
import AdvancedSubjects from "./bootcamp/AdvancedSubjects";
import InstructorDetails from "./bootcamp/InstructorDetails";
import FAQs from "./bootcamp/FAQs";

const Bootcamp = () => {
  return (
  <>
  {/* Hero section that contains brief of bootcamp */}
  {/* usp in our bootcamp */}
  <InstructorDetails/>
  {/* Refund Policy */}
  <BootcampRefundPolicy/>
  {/* Course Content */}
  <CourseDetails/>
  <OptionalSubjects/>
  <AdvancedSubjects/>
  {/* Placement status */}
  <Placements/>
  {/* Current Students Progress */}
  <StudentProfiles/>
  <StudentVideos/>
  {/* Fees for bootcamp */}
  <BootcampFees/>
  {/* Previous student testimonials */}
  {/* students profile videos */}
  <StudentProfileVideos/>
  {/* Student reviewes */}
  {/* Update on placement process */}
  {/* Admission process */}
  <EnrollmentProcess/>
  {/* FAQs */}
  <FAQs/>
  </>
  );
};

export default Bootcamp;
