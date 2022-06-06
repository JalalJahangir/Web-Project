import React from "react";
import { useLocation } from "react-router-dom";

const CourseDetails = () => {
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const { state } = useLocation();
  const course = state.course;

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          id="CourseListCards"
          className="card"
          style={{ width: "20rem", height: "100%" }}
        >
          <h4 className="Course-Heading">{course.cName}</h4>
          <div className="CourseImageContainer">
            <img className="Course-Image" src={course.image} alt="" />
          </div>
          <p className="CourseEntry">{course.description}</p>
          <span className="CourseEntry">
            Course Start:{" "}
            {course.startDate.toLocaleDateString("en-US", DATE_OPTIONS)}
          </span>
          <span className="CourseEntry">
            Course End:{" "}
            {course.endDate.toLocaleDateString("en-US", DATE_OPTIONS)}
          </span>
        </div>
        <div id="CourseListCards" className="card" style={{ width: "100%" }}>
          <h4 className="Course-Heading">Course Materials</h4>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ width: "20rem" }}>
          <button className="btn-primary" style={{ width: "100%" }}>
            Add Material
          </button>
          <button className="btn-primary" style={{ width: "100%" }}>
            Add Assessment
          </button>
        </div>
        <div id="CourseListCards" className="card" style={{ width: "100%" }}>
          <h4 className="Course-Heading">Course Assessment</h4>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
