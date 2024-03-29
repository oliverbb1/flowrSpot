import { API } from "../shared/api";

export const logoutUser = () => {
  return API.post("logout");
};

export const userService = {
  loginUser: async (email, password) => {
    const data = await API.post("users/login", {
      email,
      password,
    });
    // console.log(data);
    return data;
  },
  registerUser: async (
    first_name,
    last_name,
    date_of_birth,
    password,
    email
  ) => {
    const data = await API.post("users/register", {
      first_name,
      last_name,
      date_of_birth,
      password,
      email,
    });
    // console.log(data);
    return data;
  },
  logoutUser: async () => {
    // await API.post("logout");
    return true;
  },
  getCurrentUser: async () => {
    try {
      const data = await API.get("/users/me");
      console.log(data.data.user);
      return data.data.user;
    } catch (error) {
      console.log("API Error:", error);
    }
  },
};
