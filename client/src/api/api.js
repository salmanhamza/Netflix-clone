import axios from "axios";

const URL = "http://localhost:3000";

export const createUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("error while calling adduser api", error);
  }
};

export const loginUser = async (data) => {
  try {
    return await axios.post(`${URL}/authenticate`, data);
  } catch (error) {
    console.log("error while calling loginuser api", error);
  }
};
