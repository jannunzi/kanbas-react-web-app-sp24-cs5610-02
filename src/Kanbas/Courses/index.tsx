import React from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import courses from "../Database/courses.json";
import ModuleList from "./Modules/List";
import CourseNavigation from "./Navigation";

function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  return (
    <>
      <h2>Courses {course?.name}</h2>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<ModuleList />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

      <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre>
    </>
  );
}

export default Courses;
