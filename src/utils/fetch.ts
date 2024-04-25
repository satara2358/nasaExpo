
const API_KEY = "Sqek1qNOvoq5JfIeQLjIw5XQl4Jg7kArHfbUHr3L";
const API_URL = "https://api.nasa.gov/planetary/apod";

// import { API_KEY, API_URL } from '@env'

export default async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParams !== "undefined" && urlParams?.length > 0
          ? urlParams
          : ""
      }`
    );
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
