import axios from "axios";

export default axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  params: {
    api_key: process.env.EXPO_PUBLIC_API_KEY,
  },
});
