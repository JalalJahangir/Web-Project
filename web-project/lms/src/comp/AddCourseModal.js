import React, { useState } from "react";
import DatePicker from "react-date-picker";

function AddCourseModal({ closeModal }) {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const submitCourse = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ModalBackground">
      <div className="ModalContainer">
        <div class="header">Add a Course</div>
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
            <DatePicker onChange={setStartDate} value={startDate}></DatePicker>
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
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCourseModal;
