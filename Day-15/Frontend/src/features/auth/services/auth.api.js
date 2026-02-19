import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});


export async function register(username, email, bio, password) {
  try {
    const response = await api.post("/register", {
      username,
      email,
      bio,
      password,
    });

    return response.data;
  } catch (err) {
    console.error("Register failed:", err.response?.data?.message);
    throw new Error("Registration failed");
  }
}

export async function login(email, password) {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.error("Login failed:", err.response?.data?.message);
    throw new Error("Login failed");
  }
}

export async function getMe() {
  try {
    const response = await api.get("/get-me");
    return response.data;
  } catch (err) {
    console.error("getMe failed:", err.response?.data?.message);
    throw new Error("getMe failed");
  }
}
