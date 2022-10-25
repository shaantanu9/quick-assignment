import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const register = async (data) => {
  const reqresdata = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  try {
    const response = await axios.post(`${BASE_URL}/api/login`, reqresdata);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default register;
