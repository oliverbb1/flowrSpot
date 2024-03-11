import { API } from "../shared/api";

export const userService = {
  loginUser: async (email, password) => {
    const data = await API.post("users/login", {
      email,
      password,
    });
    console.log(data);
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
    console.log(data);
    return data;
  },
  logoutUser: async () => {
    await API.post("logout");
    return true;
  },
};
