import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Courses.css";
import DatePicker from "react-date-picker";

const Courses = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const coursesList = [
    {
      _id: 1,
      cName: "Introduction to Computer Science",
      description:
        "This course is designed to introduce students to the fundamentals of computer science.",
      cCode: "CS101",
      cType: "Core",
    },
    {
      _id: 2,
      cName: "Introduction to Calculus",
      description:
        "This course is designed to introduce students to the fundamentals of calculus.",
      cCode: "MATH101",
      cType: "Core",
    },
  ];
  const [openModal, setOpenModal] = useState(false);

  //handleAddCourse = () => {};
  const submitCourse = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="courses"
      className="ml"
      style={{
        width: "80%",
        marginTop: "10px",
        marginLeft: "5%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1
          className="heading"
          style={{ width: "70%", borderRadius: "30px", marginLeft: "40px" }}
        >
          Courses
        </h1>

        <button
          className="btn-primary"
          style={{ width: "200px", marginLeft: "30px" }}
          onClick={(e) => setOpenModal(true)}
        >
          Add Course
        </button>
      </div>
      {coursesList.map((listItem) => (
        <div id="CourseListCards" className="card">
          <h3 className="Course-Heading">{listItem.cName}</h3>
          <h3 className="CourseEntry">{listItem.description}</h3>
          <h3 className="CourseEntry">{listItem.cCode}</h3>
          <h3 className="CourseEntry">{listItem.cType}</h3>
        </div>
      ))}

      <Modal show={openModal} onHide={() => setOpenModal(false)}>
        <Modal.Header closeButton>Add Course</Modal.Header>

        <Modal.Body>
          <div class="box">
            <div class="mb-3">
              <label class="form-label" htmlFor="coursename">
                Course Name
              </label>
              <input
                type="text"
                name="coursename"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                class="form-control"
                placeholder="Course Name"
              />
            </div>

            <div class="mb-3">
              <label class="form-label" htmlFor="desc">
                Course Description
              </label>
              <textarea
                rows="4"
                cols="50"
                name="desc"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
              ></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label" htmlFor="startdate">
                Start Date
              </label>
              <DatePicker
                onChange={setStartDate}
                value={startDate}
              ></DatePicker>
            </div>
            <div class="mb-3">
              <label class="form-label" htmlFor="startdate">
                End Date
              </label>
              <DatePicker onChange={setEndDate} value={endDate}></DatePicker>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={(e) => submitCourse(e)}
            >
              Submit
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Courses;
