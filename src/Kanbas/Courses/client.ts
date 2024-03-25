import axios from "axios";

export const fetchAllCourses = async () => {
  const response = await axios.get("http://localhost:4000/api/courses");
  return response.data;
};

export const fetchCourseById = async (id?: string) => {
  const response = await axios.get(`http://localhost:4000/api/courses/${id}`);
  return response.data;
};

export const createCourse = async (course: any) => {
  const response = await axios.post(
    "http://localhost:4000/api/courses",
    course
  );
  return response.data;
};

export const deleteCourse = async (id: string) => {
  const response = await axios.delete(
    `http://localhost:4000/api/courses/${id}`
  );
  return response.data;
};
