import axios from "axios";

// ?hourly=temperature_2m,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=auto

export const getWeather = async (lat: number, lon: number) => {
  const params = {
    latitude: lat,
    longitude: lon,
  };

  const res = await axios.get(
    "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=auto",
    { params: params }
  );

  return res.data;
};
