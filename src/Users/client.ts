import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export const fetchAllUsers = async () => {
  const response = await request.get("/users");
  return response.data;
};

export const registerUser = async (user: any) => {
  const response = await request.get(
    `/users/register/${user.username}/${user.password}`
  );
  return response.data;
};

export const profile = async () => {
  const response = await request.get("/users/profile");
  return response.data;
};

export const loginUser = async (user: any) => {
  const response = await request.get(
    `/users/register/${user.username}/${user.password}`
  );
  return response.data;
};

export const logoutUser = async () => {
  const response = await request.get("/users/logout");
  return response.data;
};
