import axios from "axios";

export const fetchModulesForCourse = async (courseId?: string) => {
  const response = await axios.get(
    `http://localhost:4000/api/courses/${courseId}/modules`
  );
  return response.data;
};
