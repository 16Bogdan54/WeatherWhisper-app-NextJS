import axios from "axios";
//https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=1&language=en&format=json

export const getLocation = async (location: string) => {
  const res = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search?&count=1&language=en&format=json",
    { params: { name: location } }
  );

  return res.data.results.pop();
};
