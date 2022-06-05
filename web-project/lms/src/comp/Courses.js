import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Courses.css";
import DatePicker from "react-date-picker";
import axios from "axios";

const Courses = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const coursesList = [
    {
      _id: 1,
      cName: "Introduction to Computer Science",
      description:
        "This course is designed to introduce students to the fundamentals of computer science.",
      image: "http://localhost:44444/images/cs.jpg",
      startDate: new Date("2020-01-01"),
      endDate: new Date("2020-06-20"),
    },
    {
      _id: 2,
      cName: "Introduction to Calculus",
      description:
        "This course is designed to introduce students to the fundamentals of calculus.",
      image: "http://localhost:44444/images/calculus.png",
      startDate: new Date("2020-01-01"),
      endDate: new Date("2020-06-20"),
    },
  ];
  const [openModal, setOpenModal] = useState(false);

  //handleAddCourse = () => {};
  const submitCourse = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("courseName", courseName);
    data.append("courseDescription", courseDescription);
    data.append("courseImage", courseImage);
    data.append("startDate", startDate);
    data.append("endDate", endDate);

    axios.post("http://localhost:44444/api/courses", data).then((res) => {
      console.log(res);
      setOpenModal(false);
    });
  };

  return (
    <div
      id="courses"
      className="ml"
      style={{
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
      <div class="container">
        <div class="row">
          {coursesList.map((listItem) => (
            <div class="col-xl-3">
              <div id="CourseListCards" className="card">
                <h4 className="Course-Heading">{listItem.cName}</h4>
                <div className="CourseImageContainer">
                  <img className="Course-Image" src={listItem.image} alt="" />
                </div>
                <p className="CourseEntry">{listItem.description}</p>
                <span className="CourseEntry">
                  Course Start:{" "}
                  {listItem.startDate.toLocaleDateString("en-US", DATE_OPTIONS)}
                </span>
                <span className="CourseEntry">
                  Course End:{" "}
                  {listItem.endDate.toLocaleDateString("en-US", DATE_OPTIONS)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

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
              <label class="form-label" htmlFor="desc">
                Image
              </label>
              <input
                type={`file`}
                name="image"
                onChange={(e) => setCourseImage(e.target.files[0])}
              />
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
