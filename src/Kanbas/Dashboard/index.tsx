import React from "react";
import { Link } from "react-router-dom";
// import courses from "../Database/courses.json";

function Dashboard({
  courses,
  course,
  setCourse,
  addCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  addCourse: () => void;
  setCourse: (course: any) => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <input
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        value={course.name}
        className="form-control"
      />
      <button className="btn btn-success mt-2" onClick={addCourse}>
        Add
      </button>
      <button
        className="btn btn-warning ms-2 mt-2"
        onClick={() => updateCourse()}
      >
        Update
      </button>

      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img
                  src="/images/reactjs.png"
                  className="card-img-top"
                  style={{ maxHeight: "150px" }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">Full Stack software developer</p>
                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="btn btn-danger float-end"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setCourse(course)}
                    className="btn btn-warning float-end me-2"
                  >
                    Edit
                  </button>
                  <Link to={"#"} className="btn btn-primary">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <pre>
        <code>{JSON.stringify(courses, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Dashboard;
